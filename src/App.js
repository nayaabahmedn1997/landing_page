import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import Specs from "./components/Specs";
import Testimonials from "./components/Testimonials";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Features />
      <Specs />
      <Testimonials />
      <CTA />
      <Footer />
    </div>
  );
};

export default App;
