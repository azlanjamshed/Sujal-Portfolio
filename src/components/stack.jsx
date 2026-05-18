// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const projects = [
//   // ... (Keep your projects array exactly the same)
//   {
//     id: 1,
//     title: "Alto - Exchange Showcase",
//     subtitle: "motion",
//     year: "2026",
//     desc: "A motion video designed to present the Alto exchange platform and highlight its core features.",
//     color: "bg-[#111111]",
//     videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
//   },
//   {
//     id: 2,
//     title: "Fintech App UI",
//     subtitle: "ui/ux",
//     year: "2025",
//     desc: "Showcasing the core features of a modern banking application with fluid micro-interactions.",
//     color: "bg-[#8a1c59]",
//     videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
//   },
//   {
//     id: 3,
//     title: "Crypto Dashboard",
//     subtitle: "web",
//     year: "2025",
//     desc: "Data visualization and trading interface built with React and interactive 3D elements.",
//     color: "bg-[#1a1a1a]",
//     videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
//   },
//   {
//     id: 4,
//     title: "Brand Anthem",
//     subtitle: "directing",
//     year: "2024",
//     desc: "Built to quickly show users how the platform works and what makes it valuable.",
//     color: "bg-[#f5f5f5]",
//     videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
//   },
//   {
//     id: 5,
//     title: "Alto - Exchange Showcase",
//     subtitle: "motion",
//     year: "2026",
//     desc: "A motion video designed to present the Alto exchange platform and highlight its core features.",
//     color: "bg-[#111111]",
//     videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
//   },
//   {
//     id: 6,
//     title: "Fintech App UI",
//     subtitle: "ui/ux",
//     year: "2025",
//     desc: "Showcasing the core features of a modern banking application with fluid micro-interactions.",
//     color: "bg-[#8a1c59]",
//     videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
//   },
// ];

// const ProjectStack = () => {
//   const [activeId, setActiveId] = useState(null);
//   const activeProject = projects.find((p) => p.id === activeId);

//   return (
//     // We keep justify-between here so the left and right elements are pushed apart naturally
//     <section className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-[#0a0514] px-6  lg:flex-row lg:px-24 font-['Inter',_sans-serif]">
//       {/* --- LEFT SIDE: Dynamic Text Details --- */}
//       {/* FIX: Added flex-shrink-0 so this box will never compress, and widened it slightly to w-[40%] */}
//       <div className="relative z-20 flex w-full flex-shrink-0 flex-col justify-center lg:w-[40%]">
//         <AnimatePresence mode="wait">
//           {activeProject ? (
//             <motion.div
//               key={activeProject.id}
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//               className="flex flex-col text-white"
//             >
//               <div className="mb-8 flex w-full justify-between text-sm font-medium text-gray-500">
//                 <span className="uppercase tracking-widest">
//                   {activeProject.subtitle}
//                 </span>
//                 <span>{activeProject.year}</span>
//               </div>
//               <h2 className="mb-4 text-4xl font-bold leading-tight text-[#b2ff33] md:text-5xl">
//                 {activeProject.title}
//               </h2>
//               <p className="text-xl leading-relaxed text-gray-300">
//                 {activeProject.desc}
//               </p>
//             </motion.div>
//           ) : (
//             <motion.div
//               key="default-text"
//               initial={{ opacity: 0, y: 20 }}
//               animate={{ opacity: 1, y: 0 }}
//               exit={{ opacity: 0, y: -20 }}
//               transition={{ duration: 0.4, ease: "easeOut" }}
//               className="flex flex-col text-white"
//             >
//               <span className="mb-8 text-sm font-medium uppercase tracking-widest text-gray-500">
//                 Archive
//               </span>
//               <h2 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
//                 Selected Works
//               </h2>
//               <p className="text-xl leading-relaxed text-gray-400">
//                 Hover over the stack to explore featured projects, cinematic
//                 reels, and interactive experiences.
//               </p>
//             </motion.div>
//           )}
//         </AnimatePresence>
//       </div>

//       {/* --- RIGHT SIDE: The 3D Isometric Stack --- */}
//       <div
//         onMouseLeave={() => setActiveId(null)}
//         // FIX: Removed ml-[90%].
//         // Added 'justify-end' to align the stack to the right boundary.
//         // If you want it pushed even further off the screen, you can increase 'lg:translate-x-12'
//         className="relative mt-20 flex h-[500px] -mr-20 w-full items-center justify-end lg:mt-0 lg:h-screen lg:w-[50%] lg:translate-x-12"
//         style={{ perspective: "12000px" }}
//       >
//         {projects.map((project, index) => {
//           const isActive = activeId === project.id;
//           const stackedY = index * 40;
//           const stackedX = index * -40;

//           return (
//             <motion.div
//               key={project.id}
//               onMouseEnter={() => setActiveId(project.id)}
//               onClick={() => setActiveId(project.id)}
//               animate={{
//                 rotateX: isActive ? 0 : 55,
//                 rotateZ: isActive ? 0 : -35,
//                 y: isActive ? -50 : stackedY,
//                 // Adjusted the active 'x' position slightly so it centers better when pulled out of the stack
//                 x: isActive ? (window.innerWidth > 1024 ? -100 : 0) : stackedX,
//                 scale: isActive ? 1.1 : 1,
//                 zIndex: isActive ? 50 : projects.length - index,
//               }}
//               transition={{
//                 type: "spring",
//                 stiffness: 80,
//                 damping: 20,
//                 mass: 1,
//               }}
//               className={`
//                 absolute flex h-[250px] w-[350px] cursor-pointer items-center justify-center
//                 overflow-hidden rounded-[30px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] md:h-[350px] md:w-[500px]
//                 ${project.color}
//               `}
//             >
//               <AnimatePresence>
//                 {isActive && (
//                   <motion.video
//                     initial={{ opacity: 0 }}
//                     animate={{ opacity: 1 }}
//                     transition={{ delay: 0.2 }}
//                     src={project.videoSrc}
//                     autoPlay
//                     loop
//                     muted
//                     playsInline
//                     className="absolute inset-0 h-full w-full object-cover"
//                   />
//                 )}
//               </AnimatePresence>

//               {!isActive && project.id === 1 && (
//                 <span className="absolute bottom-10 right-10 text-4xl font-black tracking-tighter text-white/50">
//                   EVERYONE S
//                 </span>
//               )}
//             </motion.div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default ProjectStack;

// import React, { useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";

// const ProjectStack = () => {
//   const projects = [
//     // ... (Keep your projects array exactly the same)
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
//       title: "Alto - Exchange Showcase",
//       subtitle: "motion",
//       year: "2026",
//       desc: "A motion video designed to present the Alto exchange platform and highlight its core features.",
//       color: "bg-[#111111]",
//       videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
//     },
//     {
//       id: 6,
//       title: "Fintech App UI",
//       subtitle: "ui/ux",
//       year: "2025",
//       desc: "Showcasing the core features of a modern banking application with fluid micro-interactions.",
//       color: "bg-[#8a1c59]",
//       videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
//     },
//   ];
//   const [activeId, setActiveId] = useState(null);
//   const activeProject = projects.find((p) => p.id === activeId);

//   return (
//     <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0514] px-5 py-20 md:px-10 lg:px-24">
//       <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-16 lg:flex-row">
//         {/* LEFT CONTENT */}
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

//         {/* RIGHT STACK */}
//         <div
//           onMouseLeave={() => setActiveId(null)}
//           className="
//             relative
//             flex
//             h-[420px]
//             w-full
//             items-center
//             justify-center

//             sm:h-[500px]

//             md:h-[600px]

//             lg:h-[750px]
//             lg:w-[55%]
//           "
//           style={{
//             perspective: "2200px",
//           }}
//         >
//           {projects.map((project, index) => {
//             const isActive = activeId === project.id;

//             // Responsive stacking
//             const stackedY =
//               window.innerWidth < 640
//                 ? index * 18
//                 : window.innerWidth < 1024
//                   ? index * 28
//                   : index * 38;

//             const stackedX =
//               window.innerWidth < 640
//                 ? index * -18
//                 : window.innerWidth < 1024
//                   ? index * -28
//                   : index * -40;

//             return (
//               <motion.div
//                 key={project.id}
//                 onMouseEnter={() => setActiveId(project.id)}
//                 onClick={() => setActiveId(project.id)}
//                 animate={{
//                   rotateX: isActive ? 0 : 55,
//                   rotateZ: isActive ? 0 : -35,

//                   y: isActive ? -20 : stackedY,

//                   x: isActive
//                     ? window.innerWidth < 1024
//                       ? 0
//                       : -100
//                     : stackedX,

//                   scale: isActive ? 1.06 : 1,

//                   zIndex: isActive ? 100 : projects.length - index,
//                 }}
//                 transition={{
//                   type: "spring",
//                   stiffness: 80,
//                   damping: 20,
//                 }}
//                 className={`
//                   absolute
//                   overflow-hidden
//                   rounded-[28px]
//                   shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]
//                   cursor-pointer
//                   ${project.color}

//                   w-[220px]
//                   h-[150px]

//                   sm:w-[300px]
//                   sm:h-[200px]

//                   md:w-[420px]
//                   md:h-[280px]

//                   lg:w-[520px]
//                   lg:h-[340px]
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

//                 {/* Overlay */}
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

//                 {/* Hover Glow */}
//                 <div className="absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
//               </motion.div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProjectStack;

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ProjectStack = () => {
  // 1. Safe Responsive State
  // Using window.innerWidth directly in the render loop causes bugs.
  // This hook ensures the layout recalculates smoothly if the user resizes their browser.
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
      desc: "A motion video designed to present the Alto exchange platform and highlight its core features.",
      color: "bg-[#111111]",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 2,
      title: "Fintech App UI",
      subtitle: "ui/ux",
      year: "2025",
      desc: "Showcasing the core features of a modern banking application with fluid micro-interactions.",
      color: "bg-[#8a1c59]",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 3,
      title: "Crypto Dashboard",
      subtitle: "web",
      year: "2025",
      desc: "Data visualization and trading interface built with React and interactive 3D elements.",
      color: "bg-[#1a1a1a]",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 4,
      title: "Brand Anthem",
      subtitle: "directing",
      year: "2024",
      desc: "Built to quickly show users how the platform works and what makes it valuable.",
      color: "bg-[#f5f5f5]",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 5,
      title: "E-Commerce Experience",
      subtitle: "web 3D",
      year: "2026",
      desc: "An immersive shopping experience built with Three.js and Framer Motion.",
      color: "bg-[#111111]",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
    {
      id: 6,
      title: "Data Visualizer",
      subtitle: "dashboard",
      year: "2025",
      desc: "Transforming complex analytics into beautiful, understandable graphs.",
      color: "bg-[#8a1c59]",
      videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
    },
  ];

  const [activeId, setActiveId] = useState(null);
  const activeProject = projects.find((p) => p.id === activeId);

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-[#0a0514] px-5 py-20 md:px-10 lg:px-24 font-['Inter',_sans-serif]">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col items-center justify-between gap-16 lg:flex-row">
        {/* --- LEFT CONTENT --- */}
        <div className="relative z-20 flex w-full flex-col justify-center lg:w-[38%]">
          <AnimatePresence mode="wait">
            {activeProject ? (
              <motion.div
                key={activeProject.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="text-white"
              >
                <div className="mb-6 flex items-center justify-between text-xs uppercase tracking-[4px] text-gray-500 md:text-sm">
                  <span>{activeProject.subtitle}</span>
                  <span>{activeProject.year}</span>
                </div>
                <h2 className="mb-5 text-3xl font-bold leading-tight text-[#b2ff33] sm:text-4xl md:text-5xl">
                  {activeProject.title}
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-gray-300 sm:text-lg md:text-xl">
                  {activeProject.desc}
                </p>
              </motion.div>
            ) : (
              <motion.div
                key="default"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="text-white"
              >
                <span className="mb-6 block text-xs uppercase tracking-[4px] text-gray-500 md:text-sm">
                  Archive
                </span>
                <h2 className="mb-5 text-3xl font-bold leading-tight sm:text-4xl md:text-5xl">
                  Selected Works
                </h2>
                <p className="max-w-xl text-base leading-relaxed text-gray-400 sm:text-lg md:text-xl">
                  Hover over the stack to explore featured projects, cinematic
                  reels, and interactive experiences.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* --- RIGHT STACK --- */}
        <div
          onMouseLeave={() => setActiveId(null)}
          className="
            relative flex w-full items-center justify-center -mr-30
            h-[500px] sm:h-[600px] md:h-[700px] lg:h-[850px] lg:w-[55%]
          "
          style={{ perspective: "2200px" }}
        >
          {projects.map((project, index) => {
            const isActive = activeId === project.id;

            // Calculate the resting position based on screen width
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
                onMouseEnter={() => setActiveId(project.id)}
                onClick={() => setActiveId(project.id)}
                animate={{
                  // Flatten out when active
                  rotateX: isActive ? 0 : 55,
                  rotateZ: isActive ? 0 : -35,

                  // FIX: Instead of jumping to a fixed -20, the active card now
                  // simply pulls slightly up and left from its CURRENT stacked position.
                  y: isActive ? stackedY - 30 : stackedY,
                  x: isActive
                    ? stackedX - (screenWidth < 1024 ? 20 : 60)
                    : stackedX,

                  // Pop forward slightly
                  scale: isActive ? 1.05 : 1,
                  zIndex: isActive ? 100 : projects.length - index,
                }}
                transition={{
                  type: "spring",
                  stiffness: 90, // Slightly tighter spring to prevent wobble
                  damping: 20,
                  mass: 1,
                }}
                // Transform origin ensures the card expands outward from its center
                // rather than jumping away from the cursor
                style={{ transformOrigin: "center center" }}
                className={`
                  absolute overflow-hidden rounded-[28px] cursor-pointer
                  shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)]
                  ${project.color}
                  w-[220px] h-[150px]
                  sm:w-[300px] sm:h-[200px]
                  md:w-[420px] md:h-[280px]
                  lg:w-[520px] lg:h-[340px]
                `}
              >
                {/* VIDEO */}
                <AnimatePresence>
                  {isActive && (
                    <motion.video
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.4 }}
                      src={project.videoSrc}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  )}
                </AnimatePresence>

                <div className="absolute inset-0 bg-black/20" />

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

                <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-pink-500/10 to-purple-500/10 opacity-0 transition duration-500 group-hover:opacity-100" />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectStack;
