"use client";
import React from "react";

const Header: React.FC = () => {
  return (
    <header>
      <div className="box-border flex justify-between items-center px-10 py-4 m-0 max-md:px-5 max-md:py-4">
        <h1 className="box-border p-0 m-0 text-3xl font-semibold text-cyan-300">
          Iron
        </h1>
        <nav
          className="box-border flex gap-12 items-center p-0 m-0 max-md:hidden"
          aria-label="Main Navigation"
        >
          <a
            href="#pricing"
            className="box-border p-0 m-0 text-base font-medium tracking-wider text-white cursor-pointer"
          >
            Pricing
          </a>
          <div className="box-border flex gap-2 items-center p-0 m-0 text-base font-medium tracking-wider text-white cursor-pointer">
            <span>Features</span>
            <div>
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
          </div>
          <a
            href="#support"
            className="box-border p-0 m-0 text-base font-medium tracking-wider text-white cursor-pointer"
          >
            Support
          </a>
          <a
            href="#blog"
            className="box-border p-0 m-0 text-base font-medium tracking-wider text-white cursor-pointer"
          >
            Blog
          </a>
          <a
            href="#partners"
            className="box-border p-0 m-0 text-base font-medium tracking-wider text-white cursor-pointer"
          >
            Partners
          </a>
        </nav>
        <a
          href="#signup"
          className="box-border p-0 m-0 text-lg font-bold tracking-wider text-cyan-300 cursor-pointer"
        >
          SIGN UP
        </a>
      </div>
      <div className="box-border p-0 mx-10 my-0 w-full h-px bg-neutral-700" />
    </header>
  );
};

export default Header;
