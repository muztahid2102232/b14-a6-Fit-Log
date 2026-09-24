import Image from "next/image";

export default function Home() {
  return (
    <div className="bg-[#0C0D10] py-8 px-[2.19%]">
      <div className="bg-[#15171D] rounded-2xl p-14 grid grid-cols-2 gap-8 justify-between">
        <div className="flex flex-col gap-6">
          <p className="text-[11px] font-bold uppercase tracking-wider text-[#C2F800] font-inter">
            workout library
          </p>
          <h1 className="text-white text-[55px] font-extrabold font-oswald leading-none">
            TRAIN WITH INTENT. LOG EVERY SET.
          </h1>
          <p className="text-[#9CA3AF] tex-[16px] font-inter ">
            FitLog is a dark, no-nonsense gym companion: pick a lift, lock it
            into today&apos;s plan, and watch the week&apos;s work add up.
          </p>
          <button className=" bg-[#C2F800] px-6 py-3 rounded-md font-inter text-[12px] text-black font-bold self-start">BROWSE WORKOUTS</button>
        </div>
        <div>
          <Image src="/banner.png" alt="Hero image" width={542} height={300} />
        </div>
      </div>
    </div>
  );
}
