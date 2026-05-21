import { Route, Routes } from "react-router-dom";
import Footer from "./components/Footer";
import ScrollProgress from "./components/ScrollProgress";
import Home from "./pages/Home";
import CustomCursor from "./components/CustomCursor";
import Navbar from "./components/Navbar";
import Project from "./pages/Project";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    // <div className="bg-[#f6f3f1] overflow-hidden relative">
    //   <CustomCursor />
    //   {/* Glow Effects */}
    //   <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-red-200 blur-[150px] opacity-50 rounded-full"></div>

    //   <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-orange-200 blur-[150px] opacity-50 rounded-full"></div>
    //  <ScrollProgress />
    //   <Navbar />
    //   <Hero />
    //   {/* <Stats /> */}
    //   <About />
    //   {/* <FeaturedWork /> */}
    //   <StackCards />
    //   <VideoPortfolio />
    //   {/* <LongForm />
    //   <MotionGraphics /> */}
    //   <FAQ />
    //   <Contact />
    //   <Footer />
    // </div>
    <>
      <ScrollProgress />
      <CustomCursor />
      <ScrollToTop />
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Project />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
