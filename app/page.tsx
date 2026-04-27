import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div
      className="relative flex flex-1 flex-col"
      style={{
        backgroundColor: "#2a1810",
        backgroundImage: [
          "repeating-linear-gradient(91deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)",
          "repeating-linear-gradient(89deg, rgba(255,200,140,0.04) 0px, rgba(255,200,140,0.04) 2px, transparent 2px, transparent 17px)",
          "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(200,140,70,0.22) 0%, transparent 60%)",
          "linear-gradient(180deg, #3a2316 0%, #2a1810 55%, #170b04 100%)",
        ].join(", "),
      }}
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: "inset 0 0 180px 40px rgba(0,0,0,0.55)" }}
      />

      <main className="relative mx-auto grid w-full max-w-5xl flex-1 grid-cols-1 items-center gap-12 px-6 py-14 md:grid-cols-[5fr_6fr] md:gap-16 md:py-20 lg:px-10">
        {/* Framed hero image */}
        <div className="mx-auto w-full max-w-md md:mx-0 md:max-w-none">
          <figure
            className="relative aspect-[4/5] w-full overflow-hidden rounded-[3px]"
            style={{
              boxShadow: [
                // Inner dark wood matte
                "0 0 0 6px #3a2316",
                // Brass inner rim
                "0 0 0 8px #c9a961",
                // Outer dark frame
                "0 0 0 14px #1a0d06",
                // Hairline highlight on the frame
                "0 0 0 15px rgba(201,169,97,0.25)",
                // Drop shadow on the wall
                "0 18px 40px rgba(0,0,0,0.6)",
                "0 4px 10px rgba(0,0,0,0.5)",
              ].join(", "),
            }}
          >
            <Image
              src="/fans-hero.jpg"
              alt="Passionate English football fans cheering in a packed stadium"
              fill
              priority
              sizes="(min-width: 768px) 45vw, (min-width: 640px) 28rem, 100vw"
              className="object-cover"
            />
            {/* Warm overlay to tie the photo to the pub palette */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(58,35,22,0.05) 0%, rgba(23,11,4,0.35) 100%)",
                mixBlendMode: "multiply",
              }}
            />
            {/* Subtle inner vignette inside the frame */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0"
              style={{
                boxShadow: "inset 0 0 60px 10px rgba(0,0,0,0.45)",
              }}
            />
          </figure>
        </div>

        {/* Copy column */}
        <div className="flex flex-col items-center gap-8 text-center md:items-start md:text-left">
          <div className="flex items-center gap-3 text-[#c9a961]">
            <span className="h-px w-8 bg-[#c9a961]/60" aria-hidden />
            <span className="font-serif text-[11px] uppercase tracking-[0.42em]">
              A personality quiz
            </span>
            <span
              className="h-px w-8 bg-[#c9a961]/60 md:hidden"
              aria-hidden
            />
          </div>

          <h1
            className="font-display text-5xl font-bold leading-[0.95] tracking-tight text-[#f4ead5] sm:text-6xl md:text-7xl"
            style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}
          >
            Pick My Club
          </h1>

          {/* Chalkboard tagline */}
          <div className="w-full max-w-md">
            <div
              className="relative rounded-[3px] px-7 py-6"
              style={{
                backgroundColor: "#16261d",
                backgroundImage:
                  "radial-gradient(circle at 20% 30%, rgba(255,255,255,0.04) 0%, transparent 45%), radial-gradient(circle at 75% 70%, rgba(255,255,255,0.03) 0%, transparent 40%), radial-gradient(circle at 50% 50%, rgba(255,255,255,0.015) 0%, transparent 60%)",
                boxShadow:
                  "inset 0 0 70px rgba(0,0,0,0.55), 0 8px 24px rgba(0,0,0,0.5), 0 0 0 6px #4a2e1a, 0 0 0 8px #2a1810, 0 0 0 9px rgba(201,169,97,0.35)",
              }}
            >
              <p
                className="font-chalk text-3xl leading-[1.1] text-stone-100/95 sm:text-[2.1rem]"
                style={{ textShadow: "0 0 1px rgba(255,255,255,0.4)" }}
              >
                In England, your club is forever.
              </p>
            </div>
          </div>

          <p className="max-w-xl text-balance font-serif text-base leading-[1.75] text-[#ede0c8]/95 sm:text-lg">
            In England, when you pick your club, you stick with them. Through
            every relegation. Every glorious cup run. Every brutal Saturday.
            It&apos;s a lifelong commitment, and there are no take-backs. New
            to English football and don&apos;t know who to support? No worries
            &mdash; we&apos;re here to help. Answer a few questions and
            we&apos;ll match you with the club that actually fits who you are.
          </p>

          <div className="flex flex-col items-center gap-3 md:items-start">
            <Link
              href="/quiz"
              className="group relative inline-flex items-center gap-3 rounded-[2px] px-9 py-4 font-display text-lg font-semibold tracking-wide text-[#2a1810] transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4ead5] focus-visible:ring-offset-4 focus-visible:ring-offset-[#2a1810] sm:text-xl"
              style={{
                backgroundImage:
                  "linear-gradient(180deg, #f0d28a 0%, #d4a956 45%, #a87a30 100%)",
                boxShadow:
                  "inset 0 1px 0 rgba(255,240,200,0.7), inset 0 -2px 4px rgba(0,0,0,0.35), 0 1px 0 rgba(255,255,255,0.15), 0 6px 18px rgba(0,0,0,0.55), 0 0 0 1px rgba(80,50,15,0.6)",
              }}
            >
              Find My Club
              <span
                aria-hidden
                className="transition-transform group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </Link>
            <p className="font-serif text-sm italic text-[#ede0c8]/65">
              Takes 2 minutes. 92 clubs in the running.
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}
