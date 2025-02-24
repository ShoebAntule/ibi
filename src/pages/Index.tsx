import React from "react";
import Header from "../components/layout/Header";
import { Hero } from "../components/sections/Hero";
import { Services } from "../components/sections/Services";
import { About } from "../components/sections/About";
import { Goals } from "../components/sections/Goals";
import { Features } from "../components/sections/Features";
import { Pricing } from "../components/sections/Pricing";
import { Testimonials } from "../components/sections/Testimonials";
import { Footer } from "../components/layout/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white">
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Goals />
        <Features />
        <Pricing />
        <Testimonials />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
