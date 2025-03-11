"use client";
import React from "react";

const AboutSection: React.FC = () => {
  return (
    <section className="px-28 py-0 text-center" aria-labelledby="about-heading">
      <h2 id="about-heading" className="sr-only">
        About Us
      </h2>
      <p className="mb-12 text-2xl">
        <span>At </span>
        <span className="text-cyan-300">Ironvelo</span>
        <span>
          , we're dedicated to protecting businesses and individuals from the
          ever-evolving threats in the digital landscape. With [X years/months]
          of experience in the cybersecurity industry, we have honed our
          expertise to deliver innovative solutions that safeguard your digital
          assets and maintain your peace of mind.
        </span>
      </p>
      <div className="flex justify-around p-8 rounded-[40px] max-sm:flex-col max-sm:gap-6">
        <div className="text-center text-black">
          <div className="text-7xl font-bold leading-none">10+</div>
          <div className="mt-2 text-2xl">Years of Experience</div>
        </div>
        <div className="text-center text-black">
          <div className="text-7xl font-bold leading-none">900+</div>
          <div className="mt-2 text-2xl">Satisfied customers</div>
        </div>
        <div className="text-center text-black">
          <div className="text-7xl font-bold leading-none">99%</div>
          <div className="mt-2 text-2xl">Cybersecurity guarantee</div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
