"use client";
import React from "react";

const CTASection: React.FC = () => {
  return (
    <section
      className="box-border px-0 py-20 m-0 opacity-15"
      aria-labelledby="cta-heading"
    >
      <div className="box-border flex gap-28 items-center px-10 py-0 mx-auto my-0 max-w-[1034px] max-md:flex-col max-md:gap-10 max-md:text-center">
        <h2
          id="cta-heading"
          className="box-border p-0 m-0 text-5xl font-bold text-white leading-[72px] max-w-[421px]"
        >
          How to choose cybersecurity solution
        </h2>
        <p className="box-border p-0 m-0 mb-10 text-3xl">
          Having difficulties choosing the right solution for your business?
        </p>
        <div className="box-border p-0 m-0">
          <button
            className="box-border px-8 py-4 m-0 text-base font-bold tracking-wider text-black bg-cyan-300 rounded-lg cursor-pointer border-[none] max-sm:w-full"
            aria-label="Book an appointment with our team"
          >
            BOOK AN APPOINTMENT
          </button>
          <button
            className="box-border px-8 py-4 m-0 text-base font-bold tracking-wider text-cyan-300 rounded-lg border border-cyan-300 border-solid cursor-pointer max-sm:w-full"
            aria-label="Talk with our cybersecurity experts"
          >
            TALK WITH US
          </button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
