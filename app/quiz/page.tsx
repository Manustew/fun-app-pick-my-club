import Link from "next/link";

export default function QuizPage() {
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
      <main className="relative mx-auto flex w-full max-w-2xl flex-1 flex-col items-center justify-center gap-6 px-6 py-20 text-center">
        <h1 className="font-display text-5xl font-bold tracking-tight text-[#f4ead5] sm:text-6xl">
          Quiz coming soon
        </h1>
        <p className="font-serif text-lg italic text-[#ede0c8]/80">
          The questions are still being argued over at the bar.
        </p>
        <Link
          href="/"
          className="font-serif text-sm tracking-wide text-[#c9a961] underline-offset-4 hover:underline"
        >
          &larr; Back to home
        </Link>
      </main>
    </div>
  );
}
