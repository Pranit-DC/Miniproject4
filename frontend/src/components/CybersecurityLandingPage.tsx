"use client";
import React from "react";
import Header from "./Header";
import Hero from "./Hero";
import ClientsSection from "./ClientsSection";
import AboutSection from "./AboutSection";
import ServicesSection from "./ServicesSection";
import TestimonialsSection from "./TestimonialsSection";
import CTASection from "./CTASection";
import Footer from "./Footer";

const CybersecurityLanding: React.FC = () => {
  return (
    <div className="text-white bg-slate-900">
      <Header />
      <Hero />
      <ClientsSection />
      <AboutSection />
      <ServicesSection />
      <TestimonialsSection />
      <CTASection />
      <Footer />
    </div>
  );
};

export default CybersecurityLanding;
