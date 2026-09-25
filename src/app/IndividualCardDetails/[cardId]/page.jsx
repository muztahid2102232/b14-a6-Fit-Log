import Image from "next/image";
import { CalendarDays, Bookmark } from "lucide-react";

export default function IndividualCardDetails() {
  return (
    <main className="min-h-screen bg-[#0d1015] px-5 py-8 text-white md:px-10 lg:px-16">
      <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-2 lg:gap-10">
        {/* ================= LEFT: IMAGE ================= */}
        <div className="overflow-hidden rounded-xl">
          <Image
            src="/exercise.jpg"
            alt="Barbell bench press"
            width={700}
            height={700}
            className="h-full min-h-100 w-full object-cover"
          />
        </div>

        {/* ================= RIGHT: DETAILS ================= */}
        <div className="flex flex-col">
          {/* Title */}
          <h1 className="text-3xl font-extrabold uppercase tracking-tight md:text-4xl">
            Barbell Bench Press
          </h1>

          {/* Description */}
          <p className="mt-3 max-w-2xl text-sm leading-6 text-gray-400">
            A compound press that builds chest thickness, triceps, and pressing
            power from a stable bench.
          </p>

          {/* Muscle Tags */}
          <div className="mt-4 flex gap-2">
            <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-medium text-black">
              Chest
            </span>

            <span className="rounded-full bg-lime-400 px-3 py-1 text-xs font-medium text-black">
              Arms
            </span>
          </div>

          {/* ================= INFORMATION BOX ================= */}
          <div className="mt-5 overflow-hidden rounded-xl border border-gray-800 bg-[#151a22]">
            {/* Equipment */}
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Equipment
              </span>

              <span className="text-xs text-gray-200">Barbell, Bench</span>
            </div>

            {/* Difficulty */}
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Difficulty
              </span>

              <span className="text-xs text-gray-200">Intermediate</span>
            </div>

            {/* Sets */}
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Sets
              </span>

              <span className="text-xs text-gray-200">4</span>
            </div>

            {/* Reps */}
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Reps
              </span>

              <span className="text-xs text-gray-200">6-8</span>
            </div>

            {/* Duration */}
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Duration
              </span>

              <span className="text-xs text-gray-200">25 min</span>
            </div>

            {/* Calories */}
            <div className="flex items-center justify-between border-b border-gray-800 px-4 py-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Calories
              </span>

              <span className="text-xs text-gray-200">180 kcal</span>
            </div>

            {/* Rating */}
            <div className="flex items-center justify-between px-4 py-4">
              <span className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                Rating
              </span>

              <span className="text-xs text-gray-200">4.8</span>
            </div>
          </div>

          {/* ================= INSTRUCTIONS ================= */}
          <div className="mt-6">
            <h2 className="text-sm font-bold uppercase tracking-wide">
              Instructions
            </h2>

            <ol className="mt-4 space-y-3">
              <li className="flex gap-3 text-xs leading-5 text-gray-400">
                <span className="text-gray-500">1.</span>
                <span>
                  Lie on the bench with eyes under the bar and feet planted.
                </span>
              </li>

              <li className="flex gap-3 text-xs leading-5 text-gray-400">
                <span className="text-gray-500">2.</span>
                <span>
                  Unrack with locked elbows and lower the bar to mid-chest.
                </span>
              </li>

              <li className="flex gap-3 text-xs leading-5 text-gray-400">
                <span className="text-gray-500">3.</span>
                <span>
                  Press up in a slight arc until elbows lock without bouncing.
                </span>
              </li>

              <li className="flex gap-3 text-xs leading-5 text-gray-400">
                <span className="text-gray-500">4.</span>
                <span>
                  Keep shoulder blades pinched and a natural arch in the back.
                </span>
              </li>
            </ol>
          </div>

          {/* ================= BUTTONS ================= */}
          <div className="mt-7 flex flex-wrap gap-3">
            <button className="flex items-center gap-2 rounded-lg bg-lime-400 px-4 py-3 text-xs font-semibold text-black transition hover:bg-lime-300">
              <CalendarDays size={15} />
              Add to today&apos;s plan
            </button>

            <button className="flex items-center gap-2 rounded-lg border border-gray-700 px-4 py-3 text-xs font-medium text-gray-300 transition hover:bg-gray-800">
              <Bookmark size={15} />
              Save for later
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
