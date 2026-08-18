import React from "react";
import Navbar from "./layout/Navbar";
import Hero from "./sections/Hero";
import About from "./sections/About";
import Projects from "./sections/Projects";
import Experiance from "./sections/Experiance";
import Testimonial from "./sections/Testimonial";
import Contact from "./sections/Contact";
import { Footer } from "./layout/Footer";

const App = () => {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Experiance />
        <Testimonial />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;
