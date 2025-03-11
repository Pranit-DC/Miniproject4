"use client";
import React from "react";

const CTASection: React.FC = () => {
  return (
    <section className="px-0 py-20 opacity-15" aria-labelledby="cta-heading">
      <div className="flex gap-28 items-center px-10 py-0 mx-auto my-0 max-w-[1034px] max-md:flex-col max-md:gap-10 max-md:text-center">
        <h2
          id="cta-heading"
          className="text-5xl font-bold leading-[72px] max-w-[421px]"
        >
          How to choose cybersecurity solution
        </h2>
        <p className="mb-10 text-3xl">
          Having difficulties choosing the right solution for your business?
        </p>
        <div>
          <button
            className="px-8 py-4 text-base font-bold tracking-wider text-black bg-cyan-300 rounded-lg cursor-pointer border-none max-sm:w-full mb-4"
            aria-label="Book an appointment with our cybersecurity experts"
          >
            BOOK AN APPOINTMENT
          </button>
          <button
            className="px-8 py-4 text-base font-bold tracking-wider text-cyan-300 rounded-lg border border-cyan-300 border-solid cursor-pointer max-sm:w-full"
            aria-label="Talk with our cybersecurity team"
          >
            TALK WITH US
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
