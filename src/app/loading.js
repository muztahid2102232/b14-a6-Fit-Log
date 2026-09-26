import React from "react";

export default function Loading() {
  return (
    <div className="fixed inset-0 z-[9999] w-screen h-screen bg-[#0C0D10] flex flex-col items-center justify-center overflow-hidden select-none">
      {/* Background Ambient Glow */}
      <div className="absolute w-[350px] h-[350px] md:w-[500px] md:h-[500px] bg-[#C2F800]/10 rounded-full blur-[120px] pointer-events-none animate-pulse" />

      {/* Main Spinner Wrapper */}
      <div className="relative flex items-center justify-center w-64 h-64 md:w-80 md:h-80">
        {/* Outer Track - Dashed Slow Counter-Spin */}
        <div className="absolute inset-0 rounded-full border-2 border-dashed border-white/15 animate-[spin_12s_linear_infinite_reverse]" />

        {/* Secondary Track - Thin White Border */}
        <div className="absolute inset-4 rounded-full border border-white/10" />

        {/* Primary Main Neon Spinner - Heavy Accent Arc */}
        <div className="absolute inset-4 rounded-full border-[5px] border-transparent border-t-[#C2F800] border-r-[#C2F800] animate-[spin_1.2s_cubic-bezier(0.55,0.15,0.45,0.85)_infinite] shadow-[0_0_35px_rgba(194,248,0,0.35)]" />

        {/* Inner Counter-Spinning Arc */}
        <div className="absolute inset-10 rounded-full border-2 border-transparent border-b-white border-l-white/50 animate-[spin_0.8s_linear_infinite_reverse]" />

        {/* Center Brand Core */}
        <div className="relative flex flex-col items-center justify-center text-center">
          <div className="w-3.5 h-3.5 bg-[#C2F800] rounded-full shadow-[0_0_12px_#C2F800] animate-ping mb-2" />
          <span className="text-white font-oswald text-2xl md:text-3xl font-extrabold tracking-wider uppercase">
            FITLOG
          </span>
        </div>
      </div>

      {/* Loading Status Text */}
      <div className="mt-8 flex items-center gap-3">
        <span className="text-[#9CA3AF] font-inter text-xs md:text-sm font-bold tracking-[0.35em] uppercase animate-pulse">
          Loading Workouts
        </span>
        <span className="text-[#C2F800] font-mono text-sm animate-bounce"></span>
      </div>
    </div>
  );
}
