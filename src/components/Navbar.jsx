// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 border-b border-white/20">
//       <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
//         <h1 className="text-4xl font-bold">SUJAL</h1>

//         <div className="hidden md:flex gap-10 text-sm font-medium">
//           <a href="#work">Work</a>
//           <a href="#longform">Longform</a>
//           <a href="#motion">Motion</a>
//           <a href="#contact">Contact</a>
//         </div>

//         <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 duration-300">
//           Hire Me
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import React from "react";
import { motion } from "framer-motion";

const Navbar = () => {
  // Container variants to control the staggered reveal of the links
  const navContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1, // Time between each link dropping in
        delayChildren: 0.3, // Wait a moment before the links start appearing
      },
    },
  };

  // Individual link variants
  const linkVariants = {
    hidden: { opacity: 0, y: -15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 15 },
    },
  };

  return (
    // 1. The whole nav bar drops down smoothly from the top
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 70, damping: 15 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 border-b border-white/20"
    >
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        {/* 2. Logo slides in from the left */}
        <motion.h1
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-4xl font-bold"
        >
          SUJAL
        </motion.h1>

        {/* 3. Links use the staggered container variants */}
        <motion.div
          variants={navContainerVariants}
          initial="hidden"
          animate="visible"
          className="hidden md:flex gap-10 text-sm font-medium"
        >
          {["Work", "Longform", "Motion", "Contact"].map((item) => (
            <motion.a
              key={item}
              href={`#${item.toLowerCase()}`}
              variants={linkVariants}
              whileHover={{ y: -2, color: "#666" }} // Subtle lift on hover
              className="cursor-pointer transition-colors duration-300"
            >
              {item}
            </motion.a>
          ))}
        </motion.div>

        {/* 4. Button pops in, replacing Tailwind hover with Framer physics */}
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5, type: "spring" }}
          whileHover={{ scale: 1.05 }} // Framer handles the hover scale smoother than Tailwind
          whileTap={{ scale: 0.95 }} // Satisfying click effect
          className="bg-black text-white px-6 py-3 rounded-full"
        >
          Hire Me
        </motion.button>
      </div>
    </motion.nav>
  );
};

export default Navbar;
