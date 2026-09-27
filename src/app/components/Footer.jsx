import React from "react";
import Image from "next/image";

const Footer = () => {
  return (
    <footer className="w-full bg-[#0C0D10] border-t border-white/10 py-6 sm:py-8 px-4 sm:px-[2.19%]">
      <div className="flex flex-row justify-between items-center w-full gap-4">
        {/* Brand Logo */}
        <div className="shrink-0">
          <Image
            src="/brand-logo-left.png"
            alt="FitLog Footer logo"
            width={100}
            height={50}
            className="w-20 sm:w-24 h-auto object-contain"
          />
        </div>

        {/* Copyright & Tagline */}
        <div className="text-right">
          <p className="text-[#6B7280] text-xs sm:text-sm md:text-[16px] font-inter leading-tight">
            &copy; 2026 FitLog — Workout Library. Train hard, log honest.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
