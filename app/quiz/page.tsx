"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { questions } from "@/lib/questions";

const PUB_BACKGROUND_STYLE: React.CSSProperties = {
  backgroundColor: "#2a1810",
  backgroundImage: [
    "repeating-linear-gradient(91deg, rgba(0,0,0,0.18) 0px, rgba(0,0,0,0.18) 1px, transparent 1px, transparent 3px)",
    "repeating-linear-gradient(89deg, rgba(255,200,140,0.04) 0px, rgba(255,200,140,0.04) 2px, transparent 2px, transparent 17px)",
    "radial-gradient(ellipse 80% 50% at 50% 0%, rgba(200,140,70,0.22) 0%, transparent 60%)",
    "linear-gradient(180deg, #3a2316 0%, #2a1810 55%, #170b04 100%)",
  ].join(", "),
};

export default function QuizPage() {
  const router = useRouter();
  const [picked, setPicked] = useState<number[]>([]);

  const currentIndex = picked.length;
  const current = questions[currentIndex];

  function selectAnswer(answerIndex: number) {
    const next = [...picked, answerIndex];
    if (next.length >= questions.length) {
      router.push(`/quiz/result?a=${next.join(",")}`);
    } else {
      setPicked(next);
    }
  }

  // Guard: if there are zero questions, fall through with a friendly message.
  if (!current) {
    return (
      <div className="relative flex flex-1 flex-col" style={PUB_BACKGROUND_STYLE}>
        <main className="relative mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-6 px-6 py-20 text-center">
          <h1 className="font-display text-4xl font-bold text-[#f4ead5]">
            No questions available
          </h1>
          <Link
            href="/"
            className="font-serif text-sm text-[#c9a961] underline-offset-4 hover:underline"
          >
            &larr; Back to home
          </Link>
        </main>
      </div>
    );
  }

  const progressPercent = (currentIndex / questions.length) * 100;

  return (
    <div className="relative flex flex-1 flex-col" style={PUB_BACKGROUND_STYLE}>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{ boxShadow: "inset 0 0 180px 40px rgba(0,0,0,0.55)" }}
      />

      <main className="relative mx-auto flex w-full max-w-2xl flex-1 flex-col gap-10 px-6 py-12 sm:py-16 md:py-20">
        {/* Progress */}
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between text-[#c9a961]">
            <span className="font-serif text-[11px] uppercase tracking-[0.42em]">
              Question {currentIndex + 1} of {questions.length}
            </span>
            <Link
              href="/"
              className="font-serif text-[11px] uppercase tracking-[0.3em] text-[#c9a961]/70 underline-offset-4 hover:text-[#c9a961] hover:underline"
            >
              Quit
            </Link>
          </div>
          <div
            className="h-[3px] w-full overflow-hidden rounded-full"
            style={{ backgroundColor: "rgba(201,169,97,0.18)" }}
            role="progressbar"
            aria-valuenow={currentIndex}
            aria-valuemin={0}
            aria-valuemax={questions.length}
          >
            <div
              className="h-full transition-[width] duration-500 ease-out"
              style={{
                width: `${progressPercent}%`,
                backgroundImage:
                  "linear-gradient(90deg, #d4a956 0%, #f0d28a 100%)",
              }}
            />
          </div>
        </div>

        {/* Question */}
        <h1
          key={current.id}
          className="font-display text-3xl font-bold leading-tight text-[#f4ead5] sm:text-4xl md:text-5xl"
          style={{ textShadow: "0 2px 20px rgba(0,0,0,0.6)" }}
        >
          {current.text}
        </h1>

        {/* Answers */}
        <div className="flex flex-col gap-3 sm:gap-4">
          {current.answers.map((answer, i) => (
            <button
              key={`${current.id}-${i}`}
              type="button"
              onClick={() => selectAnswer(i)}
              className="group w-full rounded-[3px] border border-[#c9a961]/30 bg-[#3a2316]/60 px-5 py-4 text-left font-serif text-base text-[#f4ead5] backdrop-blur-sm transition-colors hover:border-[#c9a961] hover:bg-[#4a2e1a]/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#f4ead5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#2a1810] sm:text-lg"
              style={{
                boxShadow:
                  "inset 0 1px 0 rgba(255,240,200,0.08), 0 4px 12px rgba(0,0,0,0.35)",
              }}
            >
              <span className="flex items-center gap-4">
                <span
                  className="font-display text-sm font-bold tracking-wider text-[#c9a961] transition-colors group-hover:text-[#f0d28a]"
                  aria-hidden
                >
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="flex-1">{answer.text}</span>
              </span>
            </button>
          ))}
        </div>
      </main>
    </div>
  );
}
