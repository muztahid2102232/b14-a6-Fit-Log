import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen w-full bg-[#0C0D10] flex flex-col items-center justify-center relative px-6 overflow-hidden select-none">
      {/* Massive Background Outlined 404 Watermark (Kept Same Size) */}
      <div
        className="absolute inset-0 flex items-center justify-center font-oswald text-[22vw] font-black text-transparent leading-none pointer-events-none opacity-20"
        style={{ WebkitTextStroke: "2px #C2F800" }}
      >
        404
      </div>

      {/* Foreground Content Stack */}
      <div className="relative z-10 flex flex-col items-center gap-8">
        {/* Minimalist Split Message Row (Smaller Font Sizes) */}
        <div className="flex items-center gap-4 sm:gap-6">
          {/* Bold Oswald 404 Text */}
          <span className="text-[#C2F800] font-oswald text-4xl sm:text-5xl font-extrabold tracking-tight leading-none drop-shadow-[0_0_12px_rgba(194,248,0,0.3)]">
            404
          </span>

          {/* Clean Vertical White Accent Line */}
          <div className="w-[1px] h-7 sm:h-9 bg-white/20" />

          {/* Message Text */}
          <span className="text-white font-oswald text-lg sm:text-2xl font-bold tracking-wide uppercase">
            This page could not be found.
          </span>
        </div>

        {/* Compact High-Contrast Button */}
        <Link
          href="/"
          className="group relative inline-flex items-center gap-2 bg-[#C2F800] text-black font-oswald text-xs sm:text-sm font-bold tracking-widest uppercase px-6 py-2.5 rounded-full transition-all duration-300 hover:bg-white hover:shadow-[0_0_20px_rgba(255,255,255,0.3)]"
        >
          <span>Return to Home</span>
          <span className="text-sm transition-transform duration-300 group-hover:translate-x-1">
            →
          </span>
        </Link>
      </div>

      {/* Subtle Bottom Accent Grid Line */}
      <div className="absolute bottom-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-[#C2F800]/30 to-transparent" />
    </div>
  );
}
