"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { questions } from "@/lib/questions";
import { clubs } from "@/lib/clubs";
import { aggregateUserScores, matchUserToClub } from "@/lib/matching";
import type { Club } from "@/lib/types";

// ---------- Constants & helpers ----------

const PUB_BACKGROUND_STYLE: React.CSSProperties = {
  backgroundColor: "#2a1810",
  backgroundImage: [
    "repeating-linear-gradient(91deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)",
    "repeating-linear-gradient(89deg, rgba(255,200,140,0.04) 0px, rgba(255,200,140,0.04) 2px, transparent 2px, transparent 17px)",
    "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(200,140,70,0.22) 0%, transparent 60%)",
    "linear-gradient(180deg, #3a2316 0%, #2a1810 55%, #170b04 100%)",
  ].join(", "),
};

const PARCHMENT = "#f4ead5";
const PARCHMENT_DEEP = "#e6d6b3";
const INK = "#2a1810";

const CLUB_INITIALS: Record<string, string> = {
  "manchester-city": "MCFC",
  "manchester-united": "MUFC",
  liverpool: "LFC",
  arsenal: "AFC",
  brighton: "BHA",
  sunderland: "SAFC",
  wrexham: "WFC",
  "aston-villa": "AVFC",
  bournemouth: "AFCB",
  brentford: "BFC",
  burnley: "BFC",
  chelsea: "CFC",
  "crystal-palace": "CPFC",
  everton: "EFC",
  fulham: "FFC",
  "leeds-united": "LUFC",
  "newcastle-united": "NUFC",
  "nottingham-forest": "NFFC",
  "tottenham-hotspur": "THFC",
  "west-ham-united": "WHU",
  "wolverhampton-wanderers": "WWFC",
};

function getInitials(club: Club): string {
  return CLUB_INITIALS[club.id] ?? "FC";
}

type ContrastColors = {
  text: string;
  textMuted: string;
  badgeRing: string;
};

function getContrast(hex: string): ContrastColors {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;
  if (luminance < 0.55) {
    return {
      text: "#f4ead5",
      textMuted: "rgba(244,234,213,0.78)",
      badgeRing: "rgba(244,234,213,0.55)",
    };
  }
  return {
    text: "#2a1810",
    textMuted: "rgba(42,24,16,0.72)",
    badgeRing: "rgba(42,24,16,0.45)",
  };
}

function shadeColor(hex: string, percent: number): string {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  const factor = 1 + percent / 100;
  const cap = (n: number) => Math.max(0, Math.min(255, Math.round(n * factor)));
  return `rgb(${cap(r)}, ${cap(g)}, ${cap(b)})`;
}

function formatNumber(n: number): string {
  return n.toLocaleString("en-US");
}

// ---------- Match resolution ----------

type MatchResult =
  | { ok: true; club: Club }
  | { ok: false; message: string };

function computeMatch(rawParam: string | null): MatchResult {
  if (!rawParam) {
    return {
      ok: false,
      message:
        "We didn't catch your answers. Take the quiz and we'll find your club.",
    };
  }

  const indices = rawParam.split(",").map((s) => Number.parseInt(s, 10));

  if (indices.length !== questions.length) {
    return {
      ok: false,
      message: "Your answers don't line up with the quiz. Want to try again?",
    };
  }

  for (let qi = 0; qi < questions.length; qi++) {
    const ai = indices[qi];
    if (!Number.isInteger(ai) || ai < 0 || ai >= questions[qi].answers.length) {
      return {
        ok: false,
        message: "We couldn't read one of your answers. Take it from the top?",
      };
    }
  }

  const chosenAnswers = indices.map((ai, qi) => questions[qi].answers[ai]);
  const userScores = aggregateUserScores(chosenAnswers);
  const club = matchUserToClub(userScores, clubs);
  return { ok: true, club };
}

// ---------- Page entry ----------

export default function ResultPage() {
  return (
    <Suspense fallback={<LoadingShell />}>
      <ResultContent />
    </Suspense>
  );
}

function ResultContent() {
  const searchParams = useSearchParams();
  const result = computeMatch(searchParams.get("a"));

  if (!result.ok) {
    return <ErrorView message={result.message} />;
  }

  return <ClubReveal club={result.club} />;
}

function LoadingShell() {
  return (
    <div className="relative flex flex-1 flex-col" style={PUB_BACKGROUND_STYLE}>
      <main className="relative mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center px-6 py-20 text-center">
        <p className="font-serif text-base italic text-[#ede0c8]/70">
          Reading the tea leaves&hellip;
        </p>
      </main>
    </div>
  );
}

function ErrorView({ message }: { message: string }) {
  return (
    <div className="relative flex flex-1 flex-col" style={PUB_BACKGROUND_STYLE}>
      <main className="relative mx-auto flex w-full max-w-xl flex-1 flex-col items-center justify-center gap-6 px-6 py-20 text-center">
        <h1 className="font-display text-3xl font-bold text-[#f4ead5] sm:text-4xl">
          Something&apos;s off
        </h1>
        <p className="font-serif text-lg leading-relaxed text-[#ede0c8]/90">
          {message}
        </p>
        <Link
          href="/quiz"
          className="inline-flex items-center gap-2 rounded-[2px] px-7 py-3 font-display text-base font-semibold text-[#2a1810] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4ead5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#2a1810]"
          style={{
            backgroundImage:
              "linear-gradient(180deg, #f0d28a 0%, #d4a956 45%, #a87a30 100%)",
            boxShadow:
              "inset 0 1px 0 rgba(255,240,200,0.7), inset 0 -2px 4px rgba(0,0,0,0.35), 0 6px 18px rgba(0,0,0,0.55), 0 0 0 1px rgba(80,50,15,0.6)",
          }}
        >
          Start the quiz
        </Link>
      </main>
    </div>
  );
}

// ---------- Result page ----------

function ClubReveal({ club }: { club: Club }) {
  return (
    <div className="relative flex flex-1 flex-col" style={PUB_BACKGROUND_STYLE}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: "inset 0 0 180px 40px rgba(0,0,0,0.55)" }}
      />

      <main className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col px-3 py-6 sm:px-6 sm:py-12 md:py-16">
        <article
          className="overflow-hidden rounded-[3px]"
          style={{
            backgroundColor: PARCHMENT,
            color: INK,
            boxShadow: [
              "0 0 0 1px rgba(201,169,97,0.5)",
              "0 14px 30px rgba(0,0,0,0.45)",
              "0 4px 10px rgba(0,0,0,0.5)",
            ].join(", "),
          }}
        >
          <ClubHero club={club} />
          <WhyThisClub club={club} />
          <Divider color={club.primaryColor} />
          <AtAGlance club={club} />
          <Divider color={club.primaryColor} />
          <Legends club={club} />
          <AnthemBlock club={club} />
          <Divider color={club.primaryColor} />
          <StoryBlock club={club} />
          <PubTrivia club={club} />
          <SwornEnemy club={club} />
          <CTAArea club={club} />
        </article>

        <p className="mt-6 text-center font-serif text-xs italic text-[#ede0c8]/55">
          Pick My Club &middot; back to{" "}
          <Link href="/" className="underline-offset-4 hover:underline">
            home
          </Link>
        </p>
      </main>
    </div>
  );
}

// ---------- Sections ----------

function ClubHero({ club }: { club: Club }) {
  const initials = getInitials(club);
  const c = getContrast(club.primaryColor);
  const darker = shadeColor(club.primaryColor, -18);

  return (
    <header
      className="relative px-6 py-12 text-center sm:px-10 sm:py-16"
      style={{
        color: c.text,
        backgroundImage: `linear-gradient(180deg, ${club.primaryColor} 0%, ${darker} 100%)`,
      }}
    >
      <p
        className="font-serif text-[11px] uppercase tracking-[0.42em]"
        style={{ color: c.textMuted }}
      >
        Your club is
      </p>

      <div className="mt-6 flex justify-center">
        <div
          className="flex items-center justify-center rounded-full font-display font-bold tracking-wider"
          style={{
            width: 96,
            height: 96,
            backgroundColor: club.primaryColor,
            color: c.text,
            border: `3px solid ${c.badgeRing}`,
            fontSize: initials.length >= 4 ? "1.25rem" : "1.5rem",
            boxShadow:
              "inset 0 2px 8px rgba(0,0,0,0.25), 0 8px 22px rgba(0,0,0,0.4)",
          }}
          aria-label={`${club.name} badge`}
        >
          {initials}
        </div>
      </div>

      <h1
        className="mt-7 font-display text-4xl font-bold leading-[0.95] tracking-tight sm:text-5xl md:text-6xl"
        style={{ textShadow: "0 2px 14px rgba(0,0,0,0.25)" }}
      >
        {club.name}
      </h1>

      <p
        className="mt-3 font-serif text-xl italic sm:text-2xl"
        style={{ color: c.text }}
      >
        &ldquo;{club.nickname}&rdquo;
      </p>

      <p
        className="mt-3 font-serif text-sm tracking-wide sm:text-base"
        style={{ color: c.textMuted }}
      >
        {club.city} &middot; {club.league}
      </p>
    </header>
  );
}

function WhyThisClub({ club }: { club: Club }) {
  return (
    <section className="px-6 py-10 sm:px-10 sm:py-12">
      <SectionEyebrow color={club.primaryColor}>
        Why this club fits you
      </SectionEyebrow>
      <p className="mt-5 font-serif text-base leading-[1.85] sm:text-lg">
        {club.description}
      </p>
    </section>
  );
}

function AtAGlance({ club }: { club: Club }) {
  return (
    <section className="px-6 py-10 sm:px-10 sm:py-12">
      <SectionEyebrow color={club.primaryColor}>At a glance</SectionEyebrow>
      <dl className="mt-6 grid grid-cols-1 gap-6 sm:grid-cols-3">
        <Fact label="Founded" value={String(club.foundedYear)} />
        <Fact
          label="Stadium"
          value={club.stadium.name}
          sub={`Capacity ${formatNumber(club.stadium.capacity)}`}
        />
        <Fact
          label="Manager"
          value={club.manager}
          footnote="as of project launch"
        />
      </dl>
    </section>
  );
}

function Legends({ club }: { club: Club }) {
  return (
    <section className="px-6 py-10 sm:px-10 sm:py-12">
      <SectionEyebrow color={club.primaryColor}>Club legends</SectionEyebrow>
      <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
        {club.legends.map((legend) => (
          <article
            key={legend.name}
            className="rounded-[3px] p-5"
            style={{
              backgroundColor: PARCHMENT_DEEP,
              borderTop: `3px solid ${club.primaryColor}`,
              boxShadow:
                "inset 0 1px 0 rgba(255,255,255,0.4), 0 2px 8px rgba(42,24,16,0.1)",
            }}
          >
            <h3 className="font-display text-base font-bold leading-tight sm:text-lg">
              {legend.name}
            </h3>
            <p className="mt-2 font-serif text-sm leading-relaxed text-[#2a1810]/85">
              {legend.bio}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
}

function AnthemBlock({ club }: { club: Club }) {
  return (
    <section className="px-6 py-10 sm:px-10 sm:py-12">
      <SectionEyebrow color={club.primaryColor}>
        Sing it like a local
      </SectionEyebrow>
      <p className="mt-5 font-display text-sm font-semibold uppercase tracking-[0.22em] text-[#2a1810]/65">
        {club.anthem.title}
      </p>
      <div
        className="mt-4 rounded-[3px] px-7 py-7 sm:px-9 sm:py-8"
        style={{
          backgroundColor: "#16261d",
          boxShadow:
            "inset 0 0 70px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.45), 0 0 0 6px #4a2e1a, 0 0 0 8px #2a1810, 0 0 0 9px rgba(201,169,97,0.4)",
        }}
      >
        <p
          className="font-chalk text-3xl leading-[1.15] text-stone-100/95 sm:text-4xl"
          style={{ textShadow: "0 0 1px rgba(255,255,255,0.4)" }}
        >
          &ldquo;{club.anthem.phrase}&rdquo;
        </p>
      </div>
    </section>
  );
}

function StoryBlock({ club }: { club: Club }) {
  return (
    <section className="px-6 py-10 sm:px-10 sm:py-12">
      <SectionEyebrow color={club.primaryColor}>The story</SectionEyebrow>
      <p className="mt-5 font-serif text-base leading-[1.85] sm:text-lg">
        {club.history}
      </p>
    </section>
  );
}

function PubTrivia({ club }: { club: Club }) {
  return (
    <section className="px-6 pb-10 sm:px-10">
      <div
        className="relative rounded-[3px] px-6 py-5 sm:px-7 sm:py-6"
        style={{
          backgroundColor: "rgba(201,169,97,0.16)",
          borderLeft: `4px solid ${club.primaryColor}`,
          boxShadow:
            "inset 0 1px 0 rgba(255,255,255,0.35), 0 4px 14px rgba(42,24,16,0.1)",
        }}
      >
        <p className="font-display text-[11px] font-bold uppercase tracking-[0.32em] text-[#2a1810]/65">
          Pub trivia
        </p>
        <p className="mt-2 font-serif text-base leading-relaxed sm:text-lg">
          {club.starterFact}
        </p>
      </div>
    </section>
  );
}

function SwornEnemy({ club }: { club: Club }) {
  return (
    <section className="px-6 py-10 text-center sm:px-10">
      <p className="font-serif text-[11px] uppercase tracking-[0.42em] text-[#2a1810]/55">
        Your sworn enemy
      </p>
      <p
        className="mt-2 font-display text-2xl font-bold leading-tight sm:text-3xl"
        style={{ color: club.primaryColor }}
      >
        {club.mainRival}
      </p>
      <p className="mx-auto mt-3 max-w-md font-serif text-sm italic text-[#2a1810]/65 sm:text-base">
        If you ever catch yourself cheering for them, hand in your scarf.
      </p>
    </section>
  );
}

function CTAArea({ club }: { club: Club }) {
  const c = getContrast(club.primaryColor);
  const darker = shadeColor(club.primaryColor, -22);

  return (
    <section
      className="px-6 py-10 sm:px-10 sm:py-12"
      style={{
        backgroundColor: PARCHMENT_DEEP,
        borderTop: `1px solid rgba(42,24,16,0.12)`,
      }}
    >
      <div className="flex flex-col items-center gap-5">
        <Link
          href="/quiz"
          className="group inline-flex items-center gap-3 rounded-[2px] px-9 py-4 font-display text-base font-semibold tracking-wide transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 sm:text-lg"
          style={{
            backgroundImage: `linear-gradient(180deg, ${club.primaryColor} 0%, ${darker} 100%)`,
            color: c.text,
            boxShadow:
              "inset 0 1px 0 rgba(255,255,255,0.18), inset 0 -2px 4px rgba(0,0,0,0.2), 0 6px 18px rgba(0,0,0,0.25), 0 0 0 1px rgba(0,0,0,0.12)",
          }}
        >
          Take the quiz again
          <span
            aria-hidden
            className="transition-transform group-hover:translate-x-1"
          >
            &rarr;
          </span>
        </Link>

        <a
          href={club.officialWebsite}
          target="_blank"
          rel="noopener noreferrer"
          className="font-serif text-sm underline-offset-4 hover:underline focus-visible:underline focus-visible:outline-none"
          style={{ color: club.primaryColor }}
        >
          Visit the official site &rarr;
        </a>
      </div>
    </section>
  );
}

// ---------- UI primitives ----------

function SectionEyebrow({
  color,
  children,
}: {
  color: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-3">
      <span
        className="h-px w-8"
        style={{ backgroundColor: color, opacity: 0.7 }}
        aria-hidden
      />
      <span
        className="font-serif text-[11px] font-semibold uppercase tracking-[0.42em]"
        style={{ color }}
      >
        {children}
      </span>
      <span
        className="h-px flex-1"
        style={{ backgroundColor: color, opacity: 0.22 }}
        aria-hidden
      />
    </div>
  );
}

function Fact({
  label,
  value,
  sub,
  footnote,
}: {
  label: string;
  value: string;
  sub?: string;
  footnote?: string;
}) {
  return (
    <div>
      <dt className="font-serif text-[11px] uppercase tracking-[0.3em] text-[#2a1810]/55">
        {label}
      </dt>
      <dd className="mt-1 font-display text-lg font-semibold leading-tight text-[#2a1810] sm:text-xl">
        {value}
      </dd>
      {sub && (
        <p className="mt-0.5 font-serif text-xs text-[#2a1810]/65">{sub}</p>
      )}
      {footnote && (
        <p className="mt-1 font-serif text-[11px] italic text-[#2a1810]/50">
          {footnote}
        </p>
      )}
    </div>
  );
}

function Divider({ color }: { color: string }) {
  return (
    <div className="px-6 sm:px-10">
      <div className="flex items-center gap-3 py-1">
        <span
          className="h-px flex-1"
          style={{ backgroundColor: INK, opacity: 0.12 }}
          aria-hidden
        />
        <span className="text-xs" style={{ color }} aria-hidden>
          ◆
        </span>
        <span
          className="h-px flex-1"
          style={{ backgroundColor: INK, opacity: 0.12 }}
          aria-hidden
        />
      </div>
    </div>
  );
}
