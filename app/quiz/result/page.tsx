"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { questions } from "@/lib/questions";
import { clubs } from "@/lib/clubs";
import { aggregateUserScores, matchUserToClub } from "@/lib/matching";
import type { Club } from "@/lib/types";

const PUB_BACKGROUND_STYLE: React.CSSProperties = {
  backgroundColor: "#2a1810",
  backgroundImage: [
    "repeating-linear-gradient(91deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)",
    "repeating-linear-gradient(89deg, rgba(255,200,140,0.04) 0px, rgba(255,200,140,0.04) 2px, transparent 2px, transparent 17px)",
    "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(200,140,70,0.22) 0%, transparent 60%)",
    "linear-gradient(180deg, #3a2316 0%, #2a1810 55%, #170b04 100%)",
  ].join(", "),
};

type MatchResult =
  | { ok: true; club: Club }
  | { ok: false; message: string };

function computeMatch(rawParam: string | null): MatchResult {
  if (!rawParam) {
    return {
      ok: false,
      message: "We didn't catch your answers. Take the quiz and we'll find your club.",
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

export default function ResultPage() {
  return (
    <Suspense fallback={<LoadingShell />}>
      <ResultContent />
    </Suspense>
  );
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

function ResultContent() {
  const searchParams = useSearchParams();
  const result = computeMatch(searchParams.get("a"));

  if (!result.ok) {
    return <ErrorView message={result.message} />;
  }

  return <ClubReveal club={result.club} />;
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

function ClubReveal({ club }: { club: Club }) {
  return (
    <div className="relative flex flex-1 flex-col" style={PUB_BACKGROUND_STYLE}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: "inset 0 0 180px 40px rgba(0,0,0,0.55)" }}
      />

      <main className="relative mx-auto flex w-full max-w-3xl flex-1 flex-col items-center justify-center gap-10 px-6 py-16 text-center sm:py-24">
        <div className="flex items-center gap-3 text-[#c9a961]">
          <span className="h-px w-8 bg-[#c9a961]/60" aria-hidden />
          <span className="font-serif text-[11px] uppercase tracking-[0.42em]">
            Your club is
          </span>
          <span className="h-px w-8 bg-[#c9a961]/60" aria-hidden />
        </div>

        <h1
          className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-[#f4ead5] sm:text-7xl md:text-8xl"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}
        >
          {club.name}
        </h1>

        <p className="font-serif text-base italic text-[#c9a961] sm:text-lg">
          {club.city} &middot; {club.league}
        </p>

        <div
          className="w-full max-w-2xl rounded-[3px] px-7 py-7 sm:px-10 sm:py-9"
          style={{
            backgroundColor: "rgba(244,234,213,0.06)",
            boxShadow:
              "inset 0 0 60px rgba(0,0,0,0.35), 0 0 0 1px rgba(201,169,97,0.35), 0 14px 30px rgba(0,0,0,0.4)",
          }}
        >
          <p className="font-serif text-base leading-[1.85] text-[#ede0c8]/95 sm:text-lg">
            {club.description}
          </p>
        </div>

        <div className="flex flex-col items-center gap-3">
          <Link
            href="/quiz"
            className="group inline-flex items-center gap-3 rounded-[2px] px-9 py-4 font-display text-lg font-semibold tracking-wide text-[#2a1810] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4ead5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#2a1810]"
            style={{
              backgroundImage:
                "linear-gradient(180deg, #f0d28a 0%, #d4a956 45%, #a87a30 100%)",
              boxShadow:
                "inset 0 1px 0 rgba(255,240,200,0.7), inset 0 -2px 4px rgba(0,0,0,0.35), 0 6px 18px rgba(0,0,0,0.55), 0 0 0 1px rgba(80,50,15,0.6)",
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
          <Link
            href="/"
            className="font-serif text-sm text-[#c9a961]/80 underline-offset-4 hover:text-[#c9a961] hover:underline"
          >
            Back to home
          </Link>
        </div>
      </main>
    </div>
  );
}
