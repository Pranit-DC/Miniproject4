"use client";
import React from "react";

const Hero: React.FC = () => {
  return (
    <section className="box-border flex relative flex-col gap-10 px-28 py-24 m-0 max-md:px-5 max-md:py-16">
      <div className="box-border p-0 m-0 max-w-[756px]">
        <h2 className="box-border p-0 m-0 mb-8 text-6xl font-semibold text-white leading-[78.4px] max-md:text-4xl">
          <span className="box-border p-0 m-0">Comprehensive </span>
          <span className="box-border p-0 m-0 text-cyan-300">
            Cybersecurity
          </span>
          <span className="box-border p-0 m-0">
            {" "}
            Strategies for Growth and Resilience
          </span>
        </h2>
        <p className="box-border p-0 m-0 mb-16 text-2xl leading-10 text-gray-200 max-md:text-xl">
          Unlock your business's full potential with our comprehensive
          cybersecurity strategies. Safeguard your growth and resilience in the
          digital age.{" "}
        </p>
        <div className="box-border flex gap-8 p-0 m-0 max-sm:flex-col max-sm:gap-4">
          <button
            className="box-border px-8 py-4 m-0 text-base font-bold tracking-wider text-black bg-cyan-300 rounded-lg cursor-pointer border-[none] max-sm:w-full"
            aria-label="Learn more about our services"
          >
            {" "}
            LEARN MORE{" "}
          </button>
          <button
            className="box-border px-8 py-4 m-0 text-base font-bold tracking-wider text-cyan-300 rounded-lg border border-cyan-300 border-solid cursor-pointer max-sm:w-full"
            aria-label="Contact our team"
          >
            {" "}
            TALK WITH US{" "}
          </button>
        </div>
      </div>
      <div className="box-border relative p-0 m-0">
        <div className="box-border absolute p-0 m-0 w-px bg-neutral-700 h-[335px] left-[53px] top-[294px]" />
        <div className="box-border absolute p-0 m-0 w-10 h-px bg-neutral-700 left-[54px] top-[294px]" />
        <div className="box-border absolute p-0 m-0 w-10 h-px bg-neutral-700 left-[54px] top-[628px]" />
      </div>
      <div className="box-border p-0 m-0">
        <div className="box-border absolute p-0 m-0 w-6 h-6 border-solid border-l-[3px] border-l-cyan-300 border-t-[3px] border-t-cyan-300" />
        <div className="box-border absolute p-0 m-0 w-6 h-6 border-solid border-l-[3px] border-l-cyan-300 border-t-[3px] border-t-cyan-300" />
        <div className="box-border absolute p-0 m-0 w-6 h-6 border-solid border-l-[3px] border-l-cyan-300 border-t-[3px] border-t-cyan-300" />
        <div className="box-border absolute p-0 m-0 w-6 h-6 border-solid border-l-[3px] border-l-cyan-300 border-t-[3px] border-t-cyan-300" />
      </div>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/4f63bcb879c0a48293b5eed4fd195358c16ccbaa"
        alt="Cybersecurity visualization"
        className="box-border absolute top-48 p-0 m-0 h-[550px] left-[535px] w-[829px]"
      />
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/f5d40d0a7f3ce63f1a00634c498630bcb474ea6c"
        alt="Digital security concept"
        className="box-border absolute p-0 m-0 h-[550px] left-[1341px] top-[133px] w-[829px]"
      />
    </section>
  );
};

export default Hero;
