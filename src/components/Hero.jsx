// import hero from "../assets/hero.png";
// import { motion } from "framer-motion";

// const Home = () => {
//   return (
//     <section className="relative min-h-screen overflow-hidden bg-[#f5f5f5] flex items-center justify-center px-4">
//       {/* Texture Background */}
//       <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]"></div>

//       {/* Gradient Glow */}
//       <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-red-400/20 blur-[140px] rounded-full"></div>

//       {/* Small Labels */}
//       <motion.p
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8 }}
//         className="absolute top-8 left-5 md:left-16 uppercase tracking-[5px] text-gray-500 text-[10px] md:text-sm z-20"
//       >
//         Video Editor
//       </motion.p>

//       <motion.p
//         initial={{ opacity: 0, y: -30 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.8, delay: 0.2 }}
//         className="absolute top-8 right-5 md:right-16 uppercase tracking-[5px] text-gray-500 text-[10px] md:text-sm z-20"
//       >
//         Portfolio
//       </motion.p>

//       {/* Main Content */}
//       <div className="relative flex items-center justify-center w-full h-full">
//         {/* Background Text */}
//         <motion.h1
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="
//             absolute
//             text-[24vw]
//             sm:text-[22vw]
//             md:text-[18vw]
//             lg:text-[15vw]
//             font-black
//             uppercase
//             tracking-tight
//             leading-none
//             text-black/95
//             select-none
//             z-0
//           "
//         >
//           PORTFOLIO
//         </motion.h1>

//         {/* Gradient Overlay Text */}
//         <motion.h1
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 1 }}
//           className="
//             absolute
//             text-[24vw]
//             sm:text-[22vw]
//             md:text-[18vw]
//             lg:text-[15vw]
//             font-black
//             uppercase
//             tracking-tight
//             leading-none
//             bg-gradient-to-b
//             from-transparent
//             via-transparent
//             to-red-400
//             bg-clip-text
//             text-transparent
//             select-none
//             z-0
//           "
//         >
//           PORTFOLIO
//         </motion.h1>

//         {/* Hero Image */}
//         <motion.div
//           initial={{ opacity: 0, y: 120 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{
//             duration: 1,
//             ease: "easeOut",
//           }}
//           className="relative z-10 flex justify-center items-end mt-50"
//         >
//           <img
//             src={hero}
//             alt="hero"
//             className="
//     w-[220px]
//     h-[560px]
//     object-contain
//     grayscale
//     rounded-xl
//     drop-shadow-[0_30px_40px_rgba(0,0,0,0.35)]
//   "
//           />
//           {/* Shadow */}
//           <div className="absolute bottom-0 w-[80%] h-12 bg-black/40 blur-3xl rounded-full"></div>
//         </motion.div>
//       </div>

//       {/* Bottom Fade */}
//       <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#f5f5f5] to-transparent"></div>
//     </section>
//   );
// };

// export default Home;

import React from "react";
import hero from "../assets/hero.png";
import { motion } from "framer-motion";

// 1. Define animation variants outside the component for cleaner code
const headerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2, delayChildren: 0.1 },
  },
};

const labelVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 100, damping: 20 },
  },
};

const Home = () => {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f5f5] font-['Inter',_sans-serif]"
    >
      {/* Texture Background with Blend Mode */}
      <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-30 mix-blend-multiply pointer-events-none"></div>

      {/* Gradient Glow */}
      <div className="absolute bottom-[-10%] left-1/2 h-[50vw] w-[50vw] max-h-[600px] max-w-[600px] -translate-x-1/2 rounded-full bg-red-400/20 blur-[120px] pointer-events-none"></div>

      {/* Top Labels using Staggered Animation */}
      {/* <motion.header
        variants={headerVariants}
        initial="hidden"
        animate="visible"
        className="absolute top-8 z-20 flex w-full justify-between px-6 md:px-16"
      >
        <motion.p
          variants={labelVariants}
          className="text-[10px] uppercase tracking-[5px] text-gray-500 md:text-sm"
        >
          Video Editor
        </motion.p>
        <motion.p
          variants={labelVariants}
          className="text-[10px] uppercase tracking-[5px] text-gray-500 md:text-sm"
        >
          Portfolio
        </motion.p>
      </motion.header> */}

      {/* Main Content */}
      <div className="relative flex h-full w-full items-center justify-center">
        {/* Unified Background Text */}
        <motion.h1
          initial={{ opacity: 0, y: 500, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          // Custom cubic-bezier for a "premium Apple-style" smooth ease-out
          transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
          className="
            absolute z-0 m-0 
            bg-gradient-to-b from-[#111111] from-40% to-[#d96561] 
            bg-clip-text text-center 
            font-['Bebas_Neue',_sans-serif] text-[28vw] leading-[0.9] tracking-tight 
            text-transparent select-none
          "
        >
          PORTFOLIO
        </motion.h1>

        {/* Hero Image Container */}
        {/* <motion.div
          initial={{ opacity: 0, y: 120 }}
          animate={{ opacity: 1, y: 0 }}
          // Spring physics give a subtle, natural bounce to the image settling
          transition={{
            duration: 1,
            delay: 0.3,
            type: "spring",
            bounce: 0.2,
          }}
          className="pointer-events-none relative z-10 flex h-[65vh] w-full items-end justify-center md:h-[85vh] mt-52"
        >
          <img
            src={hero}
            alt="Hero Portrait"
            className="h-full w-auto object-contain grayscale contrast-110 drop-shadow-2xl"
          />
          Base Shadow attached exactly to the bottom of the image container
          <div className="absolute bottom-0 h-8 w-[60%] max-w-[300px] rounded-[100%] bg-black/50 blur-2xl"></div>
        </motion.div> */}
      </div>

      {/* Bottom Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#f5f5f5] to-transparent z-20"></div>
    </section>
  );
};

export default Home;
