// import React from "react";
// import hero from "../assets/hero.png";
// import { motion } from "framer-motion";

// // 1. Define animation variants outside the component for cleaner code
// const headerVariants = {
//   hidden: { opacity: 0 },
//   visible: {
//     opacity: 1,
//     transition: { staggerChildren: 0.2, delayChildren: 0.1 },
//   },
// };

// const labelVariants = {
//   hidden: { opacity: 0, y: -20 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { type: "spring", stiffness: 100, damping: 20 },
//   },
// };

// const Home = () => {
//   return (
//     <section
//       id="home"
//       className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#f5f5f5] font-['Inter',_sans-serif]"
//     >
//       {/* Texture Background with Blend Mode */}
//       <div className="absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-30 mix-blend-multiply pointer-events-none"></div>

//       {/* Gradient Glow */}
//       <div className="absolute bottom-[-10%] left-1/2 h-[50vw] w-[50vw] max-h-[600px] max-w-[600px] -translate-x-1/2 rounded-full bg-red-400/20 blur-[120px] pointer-events-none"></div>

//       {/* Top Labels using Staggered Animation */}
//       {/* <motion.header
//         variants={headerVariants}
//         initial="hidden"
//         animate="visible"
//         className="absolute top-8 z-20 flex w-full justify-between px-6 md:px-16"
//       >
//         <motion.p
//           variants={labelVariants}
//           className="text-[10px] uppercase tracking-[5px] text-gray-500 md:text-sm"
//         >
//           Video Editor
//         </motion.p>
//         <motion.p
//           variants={labelVariants}
//           className="text-[10px] uppercase tracking-[5px] text-gray-500 md:text-sm"
//         >
//           Portfolio
//         </motion.p>
//       </motion.header> */}

//       {/* Main Content */}
//       <div className="relative flex h-full w-full items-center justify-center">
//         {/* Unified Background Text */}
//         <motion.h1
//           initial={{ opacity: 0, y: 500, filter: "blur(10px)" }}
//           animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
//           // Custom cubic-bezier for a "premium Apple-style" smooth ease-out
//           transition={{ duration: 2, ease: [0.16, 1, 0.3, 1] }}
//           className="
//             absolute z-0 m-0
//             bg-gradient-to-b from-[#111111] from-40% to-[#d96561]
//             bg-clip-text text-center
//             font-['Bebas_Neue',_sans-serif] text-[28vw] leading-[0.9] tracking-tight
//             text-transparent select-none
//           "
//         >
//           PORTFOLIO
//         </motion.h1>

//         {/* Hero Image Container */}
//         {/* <motion.div
//           initial={{ opacity: 0, y: 120 }}
//           animate={{ opacity: 1, y: 0 }}
//           // Spring physics give a subtle, natural bounce to the image settling
//           transition={{
//             duration: 1,
//             delay: 0.3,
//             type: "spring",
//             bounce: 0.2,
//           }}
//           className="pointer-events-none relative z-10 flex h-[65vh] w-full items-end justify-center md:h-[85vh] mt-52"
//         >
//           <img
//             src={hero}
//             alt="Hero Portrait"
//             className="h-full w-auto object-contain grayscale contrast-110 drop-shadow-2xl"
//           />
//           Base Shadow attached exactly to the bottom of the image container
//           <div className="absolute bottom-0 h-8 w-[60%] max-w-[300px] rounded-[100%] bg-black/50 blur-2xl"></div>
//         </motion.div> */}
//       </div>

//       {/* Bottom Fade */}
//       <div className="pointer-events-none absolute bottom-0 left-0 h-32 w-full bg-gradient-to-t from-[#f5f5f5] to-transparent z-20"></div>
//     </section>
//   );
// };

// export default Home;

import React from "react";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <section
      id="home"
      className="
        relative
        flex
        min-h-screen
        items-center
        justify-center
        overflow-hidden
        bg-[#00181C]
        px-4
        font-['Inter',_sans-serif]
      "
    >
      {/* Background Texture */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')] opacity-[0.06]" />

      {/* Pink Glow */}
      <div className="absolute left-1/2 top-1/2 z-0 h-[300px] w-[300px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4E75]/20 blur-[120px] sm:h-[500px] sm:w-[500px] md:h-[650px] md:w-[650px]" />

      {/* Extra Glow */}
      <div className="absolute bottom-[-10%] right-[-10%] h-[250px] w-[250px] rounded-full bg-[#FF4E75]/10 blur-[100px]" />

      {/* Main Content */}
      <div className="relative z-10 flex w-full items-center justify-center">
        {/* Main Heading */}
        <motion.h1
          initial={{
            opacity: 0,
            y: 500,
            scale: 0.5,
            filter: "blur(12px)",
          }}
          animate={{
            opacity: 1,
            y: 0,
            scale: 1,
            filter: "blur(0px)",
          }}
          transition={{
            duration: 2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            text-center
            font-['Bebas_Neue',_sans-serif]
            uppercase
            leading-[0.85]
            tracking-[10px]
            select-none
            

            text-[18vw]

            sm:text-[20vw]

            md:text-[16vw]

            lg:text-[13vw]

            xl:text-[20vw]
          "
        >
          {/* Main Text */}
          <span
            className="
              bg-gradient-to-b
              from-white
             to-[#e99dad]
              to-[#FF4E75]
              bg-clip-text
              text-transparent
              drop-shadow-[0_10px_40px_rgba(255,78,117,0.25)]
            "
          >
            PORTFOLIO
          </span>

          {/* Outline Layer */}
          <span
            className="
              absolute
              left-0
              top-0
              -z-10
              text-transparent
              opacity-20
              [-webkit-text-stroke:2px_#FF4E75]
            "
          >
            PORTFOLIO
          </span>
        </motion.h1>
      </div>

      {/* Floating Labels */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6 }}
        className="
          absolute
          left-5
          top-6
          z-20
          text-[10px]
          uppercase
          tracking-[4px]
          text-white/50

          md:left-12
          md:top-10
          md:text-xs
        "
      >
        Video Editor
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="
          absolute
          right-5
          top-6
          z-20
          text-[10px]
          uppercase
          tracking-[4px]
          text-white/50

          md:right-12
          md:top-10
          md:text-xs
        "
      >
        Creative Developer
      </motion.div>

      {/* Bottom Gradient Fade */}
      <div className="pointer-events-none absolute bottom-0 left-0 z-20 h-32 w-full bg-gradient-to-t from-[#00181C] to-transparent" />
    </section>
  );
};

export default Home;
