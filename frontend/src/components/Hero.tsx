"use client";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="flex relative flex-col gap-10 px-28 py-24 max-md:px-5 max-md:py-16">
      <div className="max-w-[756px]">
        <h2 className="mb-8 text-6xl font-semibold leading-[78.4px] max-md:text-4xl">
          <span>Comprehensive </span>
          <span className="text-cyan-300">Cybersecurity </span>
          <span>Strategies for Growth and Resilience</span>
        </h2>
        <p className="mb-16 text-2xl leading-10 text-zinc-300 max-md:text-xl">
          Unlock your business's full potential with our comprehensive
          cybersecurity strategies. Safeguard your growth and resilience in the
          digital age.
        </p>
        <div className="flex gap-8 max-sm:flex-col max-sm:gap-4">
          <button
            className="px-8 py-4 text-base font-bold tracking-wider text-black bg-cyan-300 rounded-lg cursor-pointer border-none max-sm:w-full"
            aria-label="Learn more about our services"
          >
            LEARN MORE
          </button>
          <button
            className="px-8 py-4 text-base font-bold tracking-wider text-cyan-300 rounded-lg border border-cyan-300 border-solid cursor-pointer max-sm:w-full"
            aria-label="Talk with our cybersecurity experts"
          >
            TALK WITH US
          </button>
        </div>
      </div>
      <div className="relative" aria-hidden="true">
        <div className="absolute w-px bg-neutral-700 h-[335px] left-[53px] top-[294px]" />
        <div className="absolute w-10 h-px bg-neutral-700 left-[54px] top-[294px]" />
        <div className="absolute w-10 h-px bg-neutral-700 left-[54px] top-[628px]" />
      </div>
      <div aria-hidden="true">
        <div className="absolute w-6 h-6 border-solid border-l-[3px] border-l-cyan-300 border-t-[3px] border-t-cyan-300" />
        <div className="absolute w-6 h-6 border-solid border-l-[3px] border-l-cyan-300 border-t-[3px] border-t-cyan-300" />
        <div className="absolute w-6 h-6 border-solid border-l-[3px] border-l-cyan-300 border-t-[3px] border-t-cyan-300" />
        <div className="absolute w-6 h-6 border-solid border-l-[3px] border-l-cyan-300 border-t-[3px] border-t-cyan-300" />
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f63bcb879c0a48293b5eed4fd195358c16ccbaa"
        alt=""
        className="absolute top-48 h-[550px] left-[535px] w-[829px]"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5d40d0a7f3ce63f1a00634c498630bcb474ea6c"
        alt=""
        className="absolute h-[550px] left-[1341px] top-[133px] w-[829px]"
      />
    </section>
  );
};

export default Hero;