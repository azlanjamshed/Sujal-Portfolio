import React from "react";
import CustomCursor from "../components/CustomCursor";
import ScrollProgress from "../components/ScrollProgress";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import About from "../components/About";
import StackCards from "../components/stack";
import VideoPortfolio from "../components/VideoPortfolio";
import FAQ from "../components/FAQ";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div className="bg-[#f6f3f1] overflow-hidden relative">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-200 blur-[150px] opacity-50 rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-200 blur-[150px] opacity-50 rounded-full"></div>

      <Navbar />
      <Hero />
      {/* <Stats /> */}
      <About />
      {/* <FeaturedWork /> */}
      <StackCards />
      <VideoPortfolio />
      {/* <LongForm />
      <MotionGraphics /> */}
      <FAQ />
      <Contact />
    </div>
  );
};

export default Home;
