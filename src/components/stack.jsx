// import React, { useState, useEffect } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const ProjectStack = () => {
//   // 1. Safe Responsive State
//   // Using window.innerWidth directly in the render loop causes bugs.
//   // This hook ensures the layout recalculates smoothly if the user resizes their browser.
//   const [screenWidth, setScreenWidth] = useState(
//     typeof window !== "undefined" ? window.innerWidth : 1200,
//   );

//   useEffect(() => {
//     const handleResize = () => setScreenWidth(window.innerWidth);
//     window.addEventListener("resize", handleResize);
//     return () => window.removeEventListener("resize", handleResize);
//   }, []);

//   const projects = [
//     {
//       id: 1,
//       title: "Alto - Exchange Showcase",
//       subtitle: "motion",
//       year: "2026",
//       desc: "A motion video designed to present the Alto exchange platform and highlight its core features.",
//       color: "bg-[#111111]",
//       videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
//     },
//     {
//       id: 2,
//       title: "Fintech App UI",
//       subtitle: "ui/ux",
//       year: "2025",
//       desc: "Showcasing the core features of a modern banking application with fluid micro-interactions.",
//       color: "bg-[#8a1c59]",
//       videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
//     },
//     {
//       id: 3,
//       title: "Crypto Dashboard",
//       subtitle: "web",
//       year: "2025",
//       desc: "Data visualization and trading interface built with React and interactive 3D elements.",
//       color: "bg-[#1a1a1a]",
//       videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
//     },
//     {
//       id: 4,
//       title: "Brand Anthem",
//       subtitle: "directing",
//       year: "2024",
//       desc: "Built to quickly show users how the platform works and what makes it valuable.",
//       color: "bg-[#f5f5f5]",
//       videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
//     },
//     {
//       id: 5,
//       title: "E-Commerce Experience",
//       subtitle: "web 3D",
//       year: "2026",
//       desc: "An immersive shopping experience built with Three.js and Framer Motion.",
//       color: "bg-[#111111]",
//       videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
//     },
//     {
//       id: 6,
//       title: "Data Visualizer",
//       subtitle: "dashboard",
//       year: "2025",
//       desc: "Transforming complex analytics into beautiful, understandable graphs.",
//       color: "bg-[#8a1c59]",
//       videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
//     },
//   ];

//   const [activeId, setActiveId] = useState(null);
//   const activeProject = projects.find((p) => p.id === activeId);

//   return (
//     <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0514] px-5 py-20 md:px-10 lg:px-24 font-['Inter',_sans-serif]">
//       <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-16 lg:flex-row">
//         {/* --- LEFT CONTENT --- */}
//         <div className="relative z-20 flex w-full flex-col justify-center lg:w-[38%]">
//           <AnimatePresence mode="wait">
//             {activeProject ? (
//               <motion.div
//                 key={activeProject.id}
//                 initial={{ opacity: 0, y: 20 }}
//                 animate={{ opacity: 1, y: 0 }}
//                 exit={{ opacity: 0, y: -20 }}
//                 transition={{ duration: 0.4 }}
//                 className="text-white"
//               >
//                 <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[4px] text-gray-500 md:text-sm">
//                   <span>{activeProject.subtitle}</span>
//                   <span>{activeProject.year}</span>
//                 </div>
//                 <h2 className="mb-5 text-3xl font-bold leading-tight text-[#b2ff33] sm:text-4xl md:text-5xl">
//                   {activeProject.title}
//                 </h2>
//                 <p className="max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
//                   {activeProject.desc}
//                 </p>
//               </motion.div>
//             ) : (
//               <motion.div
//                 key="default"
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 exit={{ opacity: 0 }}
//                 className="text-white"
//               >
//                 <span className="mb-6 block text-xs uppercase tracking-[4px] text-gray-500 md:text-sm">
//                   Archive
//                 </span>
//                 <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
//                   Selected Works
//                 </h2>
//                 <p className="max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
//                   Hover over the stack to explore featured projects, cinematic
//                   reels, and interactive experiences.
//                 </p>
//               </motion.div>
//             )}
//           </AnimatePresence>
//         </div>

//         {/* --- RIGHT STACK --- */}
//         <div
//           onMouseLeave={() => setActiveId(null)}
//           className="
//             relative flex w-full items-center justify-center -mr-30
//             h-[500px] sm:h-[600px] md:h-[700px] lg:h-[850px] lg:w-[55%]
//           "
//           style={{ perspective: "2200px" }}
//         >
//           {projects.map((project, index) => {
//             const isActive = activeId === project.id;

//             // Calculate the resting position based on screen width
//             const stackedY =
//               screenWidth < 640
//                 ? index * 18
//                 : screenWidth < 1024
//                   ? index * 28
//                   : index * 38;

//             const stackedX =
//               screenWidth < 640
//                 ? index * -18
//                 : screenWidth < 1024
//                   ? index * -28
//                   : index * -40;

//             return (
//               <motion.div
//                 key={project.id}
//                 onMouseEnter={() => setActiveId(project.id)}
//                 onClick={() => setActiveId(project.id)}
//                 animate={{
//                   // Flatten out when active
//                   rotateX: isActive ? 0 : 55,
//                   rotateZ: isActive ? 0 : -35,

//                   // FIX: Instead of jumping to a fixed -20, the active card now
//                   // simply pulls slightly up and left from its CURRENT stacked position.
//                   y: isActive ? stackedY - 30 : stackedY,
//                   x: isActive
//                     ? stackedX - (screenWidth < 1024 ? 20 : 60)
//                     : stackedX,

//                   // Pop forward slightly
//                   scale: isActive ? 1.05 : 1,
//                   zIndex: isActive ? 100 : projects.length - index,
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 90, // Slightly tighter spring to prevent wobble
//                   damping: 20,
//                   mass: 1,
//                 }}
//                 // Transform origin ensures the card expands outward from its center
//                 // rather than jumping away from the cursor
//                 style={{ transformOrigin: "center center" }}
//                 className={`
//                   absolute overflow-hidden rounded-[28px] cursor-pointer
//                   shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]
//                   ${project.color}
//                   w-[220px] h-[150px]
//                   sm:w-[300px] sm:h-[200px]
//                   md:w-[420px] md:h-[280px]
//                   lg:w-[520px] lg:h-[340px]
//                 `}
//               >
//                 {/* VIDEO */}
//                 <AnimatePresence>
//                   {isActive && (
//                     <motion.video
//                       initial={{ opacity: 0 }}
//                       animate={{ opacity: 1 }}
//                       exit={{ opacity: 0 }}
//                       transition={{ duration: 0.4 }}
//                       src={project.videoSrc}
//                       autoPlay
//                       muted
//                       loop
//                       playsInline
//                       className="absolute inset-0 h-full w-full object-cover"
//                     />
//                   )}
//                 </AnimatePresence>

//                 <div className="absolute inset-0 bg-black/20" />

//                 {/* TEXT */}
//                 <div className="relative flex h-full flex-col justify-between p-5 md:p-8">
//                   <div className="flex items-center justify-between">
//                     <span className="text-[10px] uppercase tracking-[3px] text-white/60 md:text-xs">
//                       {project.subtitle}
//                     </span>
//                     <span className="text-[10px] text-white/60 md:text-xs">
//                       {project.year}
//                     </span>
//                   </div>
//                   <div>
//                     <h3 className="max-w-[80%] text-lg font-bold leading-tight text-white sm:text-2xl md:text-3xl">
//                       {project.title}
//                     </h3>
//                   </div>
//                 </div>

//                 <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectStack;
//------------------------------------------------------------------//
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectStack = () => {
  // Safe Responsive State
  const [screenWidth, setScreenWidth] = useState(
    typeof window !== "undefined" ? window.innerWidth : 1200,
  );

  useEffect(() => {
    const handleResize = () => setScreenWidth(window.innerWidth);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const projects = [
    {
      id: 1,
      title: "Alto - Exchange Showcase",
      subtitle: "motion",
      year: "2026",
      color: "bg-[#111111]",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 2,
      title: "Fintech App UI",
      subtitle: "ui/ux",
      year: "2025",
      color: "bg-[#8a1c59]",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 3,
      title: "Crypto Dashboard",
      subtitle: "web",
      year: "2025",
      color: "bg-[#1a1a1a]",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 4,
      title: "Brand Anthem",
      subtitle: "directing",
      year: "2024",
      color: "bg-[#f5f5f5]",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 5,
      title: "E-Commerce Experience",
      subtitle: "web 3D",
      year: "2026",
      color: "bg-[#111111]",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 6,
      title: "Data Visualizer",
      subtitle: "dashboard",
      year: "2025",
      color: "bg-[#8a1c59]",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  // The automated index that cycles infinitely
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-play the stack animation every 2.5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % projects.length);
    }, 500);

    return () => clearInterval(interval);
  }, [projects.length]);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0514] px-5 pt-20 md:pt-10 md:px-10 lg:px-24 font-['Inter',_sans-serif]">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-16 lg:flex-row">
        {/* --- LEFT CONTENT (Now Static) --- */}
        <div className="relative z-20 flex w-full flex-col justify-center lg:w-[38%]">
          <div className="text-white">
            <span className="mb-6 block text-xs uppercase tracking-[4px] text-gray-500 md:text-sm">
              Archive
            </span>
            <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
              Selected Works
            </h2>
            <p className="max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
              A curated collection of featured projects, cinematic reels, and
              immersive interactive experiences spanning motion design, web
              development, and 3D.
            </p>
          </div>
        </div>

        {/* --- RIGHT STACK (Automated Infinite Loop) --- */}
        <div
          className="
            relative flex w-full items-center justify-center -mr-50
            h-[500px] sm:h-[600px] md:h-[700px] lg:h-[850px] lg:w-[55%]
            pointer-events-none /* Prevents user clicks from interrupting the flow */
          "
          style={{ perspective: "2200px" }}
        >
          {projects.map((project, index) => {
            const isActive = activeIndex === index;

            // Base position in the stack
            const stackedY =
              screenWidth < 640
                ? index * 18
                : screenWidth < 1024
                  ? index * 28
                  : index * 38;

            const stackedX =
              screenWidth < 640
                ? index * -18
                : screenWidth < 1024
                  ? index * -28
                  : index * -40;

            return (
              <motion.div
                key={project.id}
                animate={{
                  // Keep it in 3D perspective at all times
                  rotateX: 55,
                  rotateZ: -35,

                  // If active, slide it up and left diagonally from its spot
                  y: isActive ? stackedY - 40 : stackedY,
                  x: isActive ? stackedX - 50 : stackedX,

                  // Slight scale for emphasis
                  scale: isActive ? 1.05 : 1,

                  // Keep normal z-index stacking
                  zIndex: projects.length - index,
                }}
                transition={{
                  type: "spring",
                  stiffness: 70,
                  damping: 15,
                  mass: 1,
                }}
                style={{ transformOrigin: "center center" }}
                className={`
                  absolute overflow-hidden rounded-[28px]
                  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]
                  ${project.color}
                  w-[220px] h-[150px]
                  sm:w-[300px] sm:h-[200px]
                  md:w-[420px] md:h-[280px]
                  lg:w-[520px] lg:h-[340px]
                `}
              >
                {/* Optional: You can keep videos auto-playing when they pop out */}
                <AnimatePresence>
                  {isActive && (
                    <motion.video
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.6 }}
                      src={project.videoSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                </AnimatePresence>

                <div className="absolute inset-0 bg-black/30" />

                {/* TEXT */}
                <div className="relative flex h-full flex-col justify-between p-5 md:p-8">
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] uppercase tracking-[3px] text-white/60 md:text-xs">
                      {project.subtitle}
                    </span>
                    <span className="text-[10px] text-white/60 md:text-xs">
                      {project.year}
                    </span>
                  </div>
                  <div>
                    <h3 className="max-w-[80%] text-lg font-bold leading-tight text-white sm:text-2xl md:text-3xl">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectStack;
