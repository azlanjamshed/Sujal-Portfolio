// import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";
// import sujal from "../assets/sujal.png";
// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       className="py-20  relative  flex justify-between items-center"
//     >
//       <div>
//         <div className="absolute inset-0 bg-gradient-to-r from-red-200/40 to-orange-200/40 blur-3xl"></div>

//         <div className="max-w-5xl mx-auto text-center relative z-10">
//           <h2 className="text-6xl md:text-8xl font-black mb-6">
//             Let’s Create Something Cinematic
//           </h2>

//           <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
//             Available for freelance projects, creator collaborations, motion
//             graphics, and premium editing work.
//           </p>

//           <button className="bg-black text-white px-10 py-5 rounded-full text-lg hover:scale-105 duration-300 mb-10">
//             hello@email.com
//           </button>

//           <div className="flex justify-center gap-6 text-3xl">
//             <FaInstagram />
//             <FaYoutube />
//             <FaEnvelope />
//           </div>
//         </div>
//       </div>
//       <div className="h-[500px] object-cover">
//         <img src={sujal} alt="" />
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import sujal from "../assets/sujal.png";

const Contact = () => {
  return (
    <section
      id="contact"
      // Added overflow-hidden to contain the blur, and px-6 for mobile padding
      className="relative overflow-hidden bg-[#f5f5f5] py-20 px-6 lg:px-20"
    >
      {/* Background Gradient moved to the background layer */}
      <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-red-200/40 to-orange-200/40 blur-3xl"></div>

      {/* Responsive Container: 
        flex-col (stacks on mobile) -> lg:flex-row (side-by-side on desktop) 
      */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 lg:flex-row">
        {/* Text Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          // Center text on mobile, left-align on desktop
          className="flex-1 text-center lg:text-left"
        >
          <h2 className="mb-6 font-['Inter',_sans-serif] text-5xl font-black leading-tight tracking-tight md:text-7xl">
            Let’s Create Something Cinematic
          </h2>

          <p className="mx-auto mb-10 max-w-xl text-lg text-gray-700 lg:mx-0">
            Available for freelance projects, creator collaborations, motion
            graphics, and premium editing work.
          </p>
          <a
            href="https://cal.com/sujal-gupta-6vhzvx/project-call "
            target="_blank"
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="mb-12 rounded-full bg-[#111111] px-10 py-5 text-lg font-medium text-white shadow-xl transition-colors hover:bg-black cursor-pointer"
            >
              Contact
            </motion.button>
          </a>

          {/* Icons: Centered on mobile, left-aligned on desktop */}
          <div className="flex justify-center gap-8 text-3xl text-gray-800 lg:justify-start">
            <motion.a
              whileHover={{ y: -5, color: "#d96561" }}
              href="#"
              className="cursor-pointer transition-colors"
            >
              <FaInstagram />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, color: "#d96561" }}
              href="#"
              className="cursor-pointer transition-colors"
            >
              <FaYoutube />
            </motion.a>
            <motion.a
              whileHover={{ y: -5, color: "#d96561" }}
              href="#"
              className="cursor-pointer transition-colors"
            >
              <FaEnvelope />
            </motion.a>
          </div>
        </motion.div>

        {/* Image Container */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="flex w-full max-w-md flex-1 justify-center lg:max-w-lg"
        >
          <img
            src={sujal}
            alt="Sujal Portrait"
            // Fixed the image sizing so it scales proportionally
            className="h-auto w-full rounded-[2rem] object-cover drop-shadow-2xl  contrast-110"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
