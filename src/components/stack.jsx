// import { motion } from "framer-motion";

// const cards = [
//   {
//     id: 1,
//     title: "Motion Design",
//     image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
//   },
//   {
//     id: 2,
//     title: "Video Editing",
//     image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
//   },
//   {
//     id: 3,
//     title: "UI/UX Design",
//     image: "https://images.unsplash.com/photo-1559028012-481c04fa702d",
//   },
// ];

// const StackCards = () => {
//   return (
//     <section className="min-h-screen bg-[#050010] flex items-center justify-center overflow-hidden px-4">
//       <div className="relative w-full max-w-5xl h-[500px] flex items-center justify-center">
//         {cards.map((card, index) => (
//           <motion.div
//             key={card.id}
//             initial={{
//               rotate: -12 + index * 10,
//               y: index * 35,
//               z: -10,
//               scale: 0.9,
//             }}
//             whileHover={{
//               y: -100,
//               x: 10,
//               scale: 1.05,
//               rotate: 0,
//               zIndex: 999,
//               transition: {
//                 duration: 0.4,
//               },
//             }}
//             className={`
//               absolute
//               w-[240px]
//               sm:w-[280px]
//               md:w-[320px]
//               h-[380px]
//               md:h-[450px]
//               rounded-[35px]
//               overflow-hidden
//               cursor-pointer
//               group
//               shadow-2xl
//             `}
//             style={{
//               background:
//                 index === 0
//                   ? "linear-gradient(135deg,#0f172a,#111827)"
//                   : index === 1
//                     ? "linear-gradient(135deg,#ff0080,#7928ca)"
//                     : "linear-gradient(135deg,#ffffff,#d1d5db)",

//               zIndex: cards.length - index,
//             }}
//           >
//             {/* Content */}
//             <div className="relative w-full h-full p-6 flex flex-col justify-between">
//               {/* Background Image */}
//               <div className="absolute inset-0 opacity-40 group-hover:opacity-60 transition duration-500">
//                 <img
//                   src={card.image}
//                   alt=""
//                   className="w-full h-full object-cover"
//                 />
//               </div>

//               {/* Overlay */}
//               <div className="absolute inset-0 bg-black/40"></div>

//               {/* Year */}
//               <div className="relative flex justify-end">
//                 <span className="text-white/70 text-sm">2026</span>
//               </div>

//               {/* Bottom Content */}
//               <div className="relative">
//                 <motion.h2
//                   whileHover={{
//                     x: 10,
//                   }}
//                   className="
//                     text-4xl
//                     md:text-5xl
//                     font-bold
//                     text-white
//                     uppercase
//                     tracking-wider
//                     rotate-[-90deg]
//                     origin-left
//                     absolute
//                     left-8
//                     bottom-32
//                   "
//                 >
//                   {card.title}
//                 </motion.h2>

//                 {/* Hidden Content */}
//                 <motion.div
//                   initial={{ opacity: 0, y: 40 }}
//                   whileHover={{
//                     opacity: 1,
//                     y: 0,
//                   }}
//                   className="
//                     absolute
//                     bottom-5
//                     left-5
//                     right-5
//                     opacity-0
//                     group-hover:opacity-100
//                     transition duration-500
//                   "
//                 >
//                   <p className="text-white/90 text-sm leading-relaxed">
//                     Modern creative portfolio design with animation,
//                     interactions and immersive visual experience.
//                   </p>

//                   <button className="mt-4 px-5 py-2 bg-white text-black rounded-full text-sm font-medium hover:scale-105 transition">
//                     Explore
//                   </button>
//                 </motion.div>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//       </div>
//     </section>
//   );
// };

// export default StackCards;

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const projects = [
  // ... (Keep your projects array exactly the same)
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
    title: "Alto - Exchange Showcase",
    subtitle: "motion",
    year: "2026",
    desc: "A motion video designed to present the Alto exchange platform and highlight its core features.",
    color: "bg-[#111111]",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
  {
    id: 6,
    title: "Fintech App UI",
    subtitle: "ui/ux",
    year: "2025",
    desc: "Showcasing the core features of a modern banking application with fluid micro-interactions.",
    color: "bg-[#8a1c59]",
    videoSrc: "https://www.w3schools.com/html/mov_bbb.mp4",
  },
];

const ProjectStack = () => {
  const [activeId, setActiveId] = useState(null);
  const activeProject = projects.find((p) => p.id === activeId);

  return (
    // We keep justify-between here so the left and right elements are pushed apart naturally
    <section className="relative flex min-h-screen w-full flex-col items-center justify-between overflow-hidden bg-[#0a0514] px-6  lg:flex-row lg:px-24 font-['Inter',_sans-serif]">
      {/* --- LEFT SIDE: Dynamic Text Details --- */}
      {/* FIX: Added flex-shrink-0 so this box will never compress, and widened it slightly to w-[40%] */}
      <div className="relative z-20 flex w-full flex-shrink-0 flex-col justify-center lg:w-[40%]">
        <AnimatePresence mode="wait">
          {activeProject ? (
            <motion.div
              key={activeProject.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col text-white"
            >
              <div className="mb-8 flex w-full justify-between text-sm font-medium text-gray-500">
                <span className="uppercase tracking-widest">
                  {activeProject.subtitle}
                </span>
                <span>{activeProject.year}</span>
              </div>
              <h2 className="mb-4 text-4xl font-bold leading-tight text-[#b2ff33] md:text-5xl">
                {activeProject.title}
              </h2>
              <p className="text-xl leading-relaxed text-gray-300">
                {activeProject.desc}
              </p>
            </motion.div>
          ) : (
            <motion.div
              key="default-text"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="flex flex-col text-white"
            >
              <span className="mb-8 text-sm font-medium uppercase tracking-widest text-gray-500">
                Archive
              </span>
              <h2 className="mb-4 text-4xl font-bold leading-tight text-white md:text-5xl">
                Selected Works
              </h2>
              <p className="text-xl leading-relaxed text-gray-400">
                Hover over the stack to explore featured projects, cinematic
                reels, and interactive experiences.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* --- RIGHT SIDE: The 3D Isometric Stack --- */}
      <div
        onMouseLeave={() => setActiveId(null)}
        // FIX: Removed ml-[90%].
        // Added 'justify-end' to align the stack to the right boundary.
        // If you want it pushed even further off the screen, you can increase 'lg:translate-x-12'
        className="relative mt-20 flex h-[500px] -mr-20 w-full items-center justify-end lg:mt-0 lg:h-screen lg:w-[50%] lg:translate-x-12"
        style={{ perspective: "12000px" }}
      >
        {projects.map((project, index) => {
          const isActive = activeId === project.id;
          const stackedY = index * 40;
          const stackedX = index * -40;

          return (
            <motion.div
              key={project.id}
              onMouseEnter={() => setActiveId(project.id)}
              onClick={() => setActiveId(project.id)}
              animate={{
                rotateX: isActive ? 0 : 55,
                rotateZ: isActive ? 0 : -35,
                y: isActive ? -50 : stackedY,
                // Adjusted the active 'x' position slightly so it centers better when pulled out of the stack
                x: isActive ? (window.innerWidth > 1024 ? -100 : 0) : stackedX,
                scale: isActive ? 1.1 : 1,
                zIndex: isActive ? 50 : projects.length - index,
              }}
              transition={{
                type: "spring",
                stiffness: 80,
                damping: 20,
                mass: 1,
              }}
              className={`
                absolute flex h-[250px] w-[350px] cursor-pointer items-center justify-center 
                overflow-hidden rounded-[30px] shadow-[0_35px_60px_-15px_rgba(0,0,0,0.8)] md:h-[350px] md:w-[500px]
                ${project.color}
              `}
            >
              <AnimatePresence>
                {isActive && (
                  <motion.video
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    src={project.videoSrc}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                )}
              </AnimatePresence>

              {!isActive && project.id === 1 && (
                <span className="absolute bottom-10 right-10 text-4xl font-black tracking-tighter text-white/50">
                  EVERYONE S
                </span>
              )}
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default ProjectStack;
