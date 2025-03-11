"use client";
import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <div className="flex justify-between items-center px-10 py-4 max-md:px-5 max-md:py-4">
        <h1 className="text-3xl font-semibold text-cyan-300">Iron</h1>
        <nav className="flex gap-12 items-center max-md:hidden">
          <a
            href="#pricing"
            className="text-base font-medium tracking-wider text-white cursor-pointer"
          >
            Pricing
          </a>
          <div className="flex gap-2 items-center text-base font-medium tracking-wider text-white cursor-pointer">
            <span>Features</span>
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="dropdown-icon"
            >
              <path
                d="M5.25 9.5L9 13.25L12.75 9.5H5.25Z"
                fill="white"
                fillOpacity="0.87"
              ></path>
            </svg>
          </div>
          <a
            href="#support"
            className="text-base font-medium tracking-wider text-white cursor-pointer"
          >
            Support
          </a>
          <a
            href="#blog"
            className="text-base font-medium tracking-wider text-white cursor-pointer"
          >
            Blog
          </a>
          <a
            href="#partners"
            className="text-base font-medium tracking-wider text-white cursor-pointer"
          >
            Partners
          </a>
        </nav>
        <button
          className="text-lg font-bold tracking-wider text-cyan-300 cursor-pointer"
          aria-label="Sign up"
        >
          SIGN UP
        </button>
      </div>
      <div
        className="mx-10 my-0 w-full h-px bg-neutral-700"
        aria-hidden="true"
      />
    </header>
  );
};

export default Header;
