"use client";
import React from "react";

const TestimonialsSection: React.FC = () => {
  return (
    <section
      className="px-28 py-20 text-center"
      aria-labelledby="testimonials-heading"
    >
      <h2 id="testimonials-heading" className="mb-12 text-4xl font-semibold">
        Customer Testimonials
      </h2>
      <blockquote className="mx-0 my-10 text-5xl leading-[67.2px] max-sm:text-3xl">
        <p>
          <span>&quot;By working with </span>
          <span className="text-cyan-300">Ironvelo</span>
          <span>
            , we processed more payments, increased authorization rates by 10 to
            15 percentage points, increased revenue by 5% to 7%, and reduced PCI
            scope.&quot;
          </span>
        </p>
      </blockquote>
      <img
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/2e308927824548c83f4037eb2f1d71cc773231f7"
        alt="Alberto Flores, IT Director"
        className="mx-auto my-0 w-40 h-40 rounded-[120px]"
      />
      <div className="mt-6 text-3xl font-bold">Alberto Flores</div>
      <div className="mt-6 text-2xl font-light">IT Director</div>
      <div className="mt-10" aria-hidden="true">
        <svg
          width="280"
          height="24"
          viewBox="0 0 280 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="12" cy="12" r="12" fill="#54F4FC"></circle>
          <circle
            cx="76"
            cy="12"
            r="12"
            fill="#54F4FC"
            fillOpacity="0.3"
          ></circle>
          <circle
            cx="140"
            cy="12"
            r="12"
            fill="#54F4FC"
            fillOpacity="0.3"
          ></circle>
          <circle
            cx="204"
            cy="12"
            r="12"
            fill="#54F4FC"
            fillOpacity="0.3"
          ></circle>
          <circle
            cx="268"
            cy="12"
            r="12"
            fill="#54F4FC"
            fillOpacity="0.3"
          ></circle>
        </svg>
      </div>
    </section>
  );
};

export default TestimonialsSection;
