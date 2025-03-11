"use client";
import React from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({
  title,
  description,
  icon,
}) => {
  return (
    <article className="box-border px-20 py-12 m-0 text-center rounded-2xl border border-cyan-300 border-solid max-md:p-8 max-sm:px-4 max-sm:py-6">
      <div className="box-border p-0 mx-auto mt-0 mb-4 h-[94px] w-[94px]">
        {icon}
      </div>
      <div className="box-border p-0 m-0">
        <h3 className="box-border p-0 m-0 mb-6 text-2xl font-semibold bg-clip-text">
          {title}
        </h3>
        <p className="box-border p-0 m-0 text-lg leading-8 text-white">
          {description}
        </p>
      </div>
    </article>
  );
};

export default ServiceCard;
