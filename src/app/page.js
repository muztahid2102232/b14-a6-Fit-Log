import Image from "next/image";
import WorkoutAll from "./components/WorkoutAll";

export default function Home() {
  return (
    <div className="scroll-smooth">
      {/* Hero Section */}
      <div className="bg-[#0C0D10] py-4 sm:py-6 lg:py-8 px-4 sm:px-[2.19%]">
        <div className="bg-[#15171D] rounded-2xl p-6 sm:p-10 lg:p-14 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center justify-between">
          {/* Text Section (Always First on Mobile) */}
          <div className="flex flex-col gap-4 sm:gap-6">
            <p className="text-[11px] font-bold uppercase tracking-wider text-[#C2F800] font-inter">
              workout library
            </p>
            <h1 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-[55px] font-extrabold font-oswald leading-tight lg:leading-none">
              TRAIN WITH INTENT. LOG EVERY SET.
            </h1>
            <p className="text-[#9CA3AF] text-sm sm:text-[16px] font-inter leading-relaxed">
              FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
              into today&apos;s plan, and watch the week&apos;s work add up.
            </p>

            {/* Scroll Link Button */}
            <a
              href="#library"
              className="bg-[#C2F800] px-6 py-3 rounded-md font-inter text-[12px] text-black font-bold self-start cursor-pointer hover:bg-[#b0df00] transition-colors uppercase tracking-wider mt-2 sm:mt-0"
            >
              BROWSE WORKOUTS
            </a>
          </div>

          {/* Image Section (Appears Below Text on Mobile) */}
          <div className="w-full flex items-center justify-center">
            <div className="relative w-full max-w-lg lg:max-w-none overflow-hidden rounded-xl">
              <Image
                src="/banner.png"
                alt="Hero image"
                width={542}
                height={400}
                priority
                className="w-full h-auto object-cover rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Library Section Target */}
      <div
        id="library"
        className="bg-[#0C0D10] py-6 sm:py-8 px-4 sm:px-[2.19%] scroll-mt-6"
      >
        <h3 className="font-oswald text-2xl sm:text-[30px] font-bold text-white tracking-wide">
          THE LIBRARY
        </h3>
        <p className="text-xs sm:text-[14px] font-inter text-[#9CA3AF] mt-1">
          Twelve lifts covering every major muscle group.
        </p>
      </div>

      <WorkoutAll />
    </div>
  );
}
