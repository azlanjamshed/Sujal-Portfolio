import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Stats from "./components/Stats";
import FeaturedWork from "./components/FeaturedWork";
import LongForm from "./components/LongForm";
import MotionGraphics from "./components/MotionGraphics";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import VideoPortfolio from "./components/VideoPortfolio";

function App() {
  return (
    <div className="bg-[#f6f3f1] overflow-hidden relative">
      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-200 blur-[150px] opacity-50 rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-200 blur-[150px] opacity-50 rounded-full"></div>

      <Navbar />
      <Hero />
      <Stats />
      {/* <FeaturedWork /> */}
      <VideoPortfolio />
      {/* <LongForm />
      <MotionGraphics /> */}
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
