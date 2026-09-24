import Image from "next/image";
import Link from "next/link";
import React from "react";

const Nav = () => {
  const links = (
    <>
      <li className="font-inter">
        <a>Workouts</a>
      </li>
      <li className="font-inter">
        <a>My Plan</a>
      </li>
    </>
  );

  return (
    <div className="navbar bg-[#1E1E1E] shadow-sm">
      {/* Left side */}
      <div className="navbar-start">
        <div className="dropdown">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost hover:bg-transparent lg:hidden"
          >
            <svg
              aria-label="Menu"
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 text-white"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>

          <ul
            tabIndex={-1}
            className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 bg-[#1E1E1E] p-2 shadow text-white"
          >
            {links}
          </ul>
        </div>

        {/* Desktop logo + FITLOG */}
        <div className="hidden lg:flex items-center">
          <Image src="/logo-nav.png" width={20} height={20} alt="FITLOG logo" />

          <a className="text-xl text-white font-extrabold font-oswald">
            FITLOG
          </a>
        </div>
      </div>

      {/* Mobile logo + FITLOG */}
      <div className="navbar-center lg:hidden">
        <div className="flex items-center">
          <Image src="/logo-nav.png" width={20} height={20} alt="FITLOG logo" />

          <span className="text-[18px] font-extrabold text-white font-oswald">
            FITLOG
          </span>
        </div>
      </div>

      {/* Desktop navigation */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-white">{links}</ul>
      </div>

      {/* Right side badge */}
      <div className="navbar-end flex gap-2">
        <div className="flex items-center gap-8">
          <Link
            href=""
            className="flex items-center justify-center gap-2 text-sm text-gray-300 font-inter"
          >
            Plan
            <span className="flex h-5 w-5 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
              0
            </span>
          </Link>

          <Link
            href=""
            className="flex items-center justify-center gap-2 text-sm text-gray-400 font-inter"
          >
            Saved
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-gray-600 text-xs font-bold text-gray-400">
              0
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
