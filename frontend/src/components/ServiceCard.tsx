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
    <article className="px-20 py-12 text-center rounded-2xl border border-cyan-300 border-solid max-md:p-8 max-sm:px-4 max-sm:py-6">
      <div className="mx-auto mt-0 mb-4 h-[94px] w-[94px]">{icon}</div>
      <div>
        <h3 className="mb-6 text-2xl font-semibold bg-clip-text">{title}</h3>
        <p className="text-lg leading-8 text-white">{description}</p>
      </div>
    </article>
  );
};

export default ServiceCard;
