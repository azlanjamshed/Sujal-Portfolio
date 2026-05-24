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
//---------------------------------------------------------------------------------------//
// import React from "react";
// import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";
// import { motion } from "framer-motion";
// import sujal from "../assets/sujal.png";

// const Contact = () => {
//   return (
//     <section
//       id="contact"
//       // Added overflow-hidden to contain the blur, and px-6 for mobile padding
//       className="relative overflow-hidden bg-[#f5f5f5] py-20 px-6 lg:px-20"
//     >
//       {/* Background Gradient moved to the background layer */}
//       <div className="pointer-events-none absolute inset-0 z-0 bg-gradient-to-r from-red-200/40 to-orange-200/40 blur-3xl"></div>

//       {/* Responsive Container:
//         flex-col (stacks on mobile) -> lg:flex-row (side-by-side on desktop)
//       */}
//       <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-between gap-16 lg:flex-row">
//         {/* Text Content */}
//         <motion.div
//           initial={{ opacity: 0, x: -50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ amount: 0.3 }}
//           transition={{ duration: 0.8, ease: "easeOut" }}
//           // Center text on mobile, left-align on desktop
//           className="flex-1 text-center lg:text-left"
//         >
//           <h2 className="mb-6 font-['Inter',_sans-serif] text-5xl font-black leading-tight tracking-tight md:text-7xl">
//             Let’s Create Something Cinematic
//           </h2>

//           <p className="mx-auto mb-10 max-w-xl text-lg text-gray-700 lg:mx-0">
//             Available for freelance projects, creator collaborations, motion
//             graphics, and premium editing work.
//           </p>
//           <a
//             href="https://cal.com/sujal-gupta-6vhzvx/project-call "
//             target="_blank"
//           >
//             <motion.button
//               whileHover={{ scale: 1.05 }}
//               whileTap={{ scale: 0.95 }}
//               className="mb-12 rounded-full bg-[#111111] px-10 py-5 text-lg font-medium text-white shadow-xl transition-colors hover:bg-black cursor-pointer"
//             >
//               Contact
//             </motion.button>
//           </a>

//           {/* Icons: Centered on mobile, left-aligned on desktop */}
//           <div className="flex justify-center gap-8 text-3xl text-gray-800 lg:justify-start">
//             <motion.a
//               whileHover={{ y: -5, color: "#d96561" }}
//               href="#"
//               className="cursor-pointer transition-colors"
//             >
//               <FaInstagram />
//             </motion.a>
//             <motion.a
//               whileHover={{ y: -5, color: "#d96561" }}
//               href="#"
//               className="cursor-pointer transition-colors"
//             >
//               <FaYoutube />
//             </motion.a>
//             <motion.a
//               whileHover={{ y: -5, color: "#d96561" }}
//               href="#"
//               className="cursor-pointer transition-colors"
//             >
//               <FaEnvelope />
//             </motion.a>
//           </div>
//         </motion.div>

//         {/* Image Container */}
//         <motion.div
//           initial={{ opacity: 0, x: 50 }}
//           whileInView={{ opacity: 1, x: 0 }}
//           viewport={{ amount: 0.3 }}
//           transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
//           className="flex w-full max-w-md flex-1 justify-center lg:max-w-lg"
//         >
//           <img
//             src={sujal}
//             alt="Sujal Portrait"
//             // Fixed the image sizing so it scales proportionally
//             className="h-auto w-full rounded-[2rem] object-cover drop-shadow-2xl  contrast-110"
//           />
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React from "react";
import { FaInstagram, FaBehance, FaEnvelope } from "react-icons/fa";
import { motion } from "framer-motion";
import sujal from "../assets/sujal.png";

const Contact = () => {
  const socials = [
    {
      icon: FaInstagram,
      link: "https://www.instagram.com/_sujal.aep?utm_source=qr&igsh=MTB5ZWhtNnNrOGl5bQ==",
    },
    { icon: FaBehance, link: "https://www.behance.net/" },
  ];
  return (
    <section
      id="contact"
      className="
        relative
        overflow-hidden
        bg-[#00181C]
        px-6
        py-24

        lg:px-20
      "
    >
      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.04] bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />

      {/* Pink Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4E75]/10 blur-[140px]" />

      {/* Container */}
      <div
        className="
          relative
          z-10
          mx-auto
          flex
          max-w-7xl
          flex-col
          items-center
          justify-between
          gap-20

          lg:flex-row
        "
      >
        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            flex-1
            text-center

            lg:text-left
          "
        >
          {/* Small Tag */}
          <p
            className="
              mb-5
              text-[11px]
              uppercase
              tracking-[5px]
              text-[#FF4E75]
            "
          >
            Contact
          </p>

          {/* Heading */}
          <h2
            className="
              mb-8
              font-['Bebas_Neue',_sans-serif]
              text-5xl
              leading-[0.9]
              tracking-tight
              text-white

              sm:text-6xl

              md:text-7xl

              lg:text-8xl
            "
          >
            LET’S CREATE
            <br />
            SOMETHING
            <span className="text-[#FF4E75]"> CINEMATIC</span>
          </h2>

          {/* Description */}
          <p
            className="
              mx-auto
              mb-10
              max-w-xl
              text-sm
              leading-relaxed
              text-white/60

              sm:text-base

              md:text-lg

              lg:mx-0
            "
          >
            Available for freelance projects, creator collaborations, cinematic
            editing, motion graphics, and premium digital experiences.
          </p>

          {/* Button */}
          <a
            href="https://cal.com/sujal-gupta-6vhzvx/project-call"
            target="_blank"
            rel="noreferrer"
          >
            <motion.button
              whileHover={{
                scale: 1.05,
                y: -4,
              }}
              whileTap={{ scale: 0.96 }}
              className="
                group
                relative
                overflow-hidden
                rounded-full
                border
                border-[#FF4E75]/30
                bg-[#FF4E75]
                px-10
                py-5
                text-sm
                font-medium
                uppercase
                tracking-[3px]
                text-white

                shadow-[0_20px_50px_rgba(255,78,117,0.35)]

                transition-all
                duration-500

                hover:shadow-[0_25px_60px_rgba(255,78,117,0.5)]
              "
            >
              <span className="relative z-10">Start A Project</span>

              {/* Shine Effect */}
              <div
                className="
                  absolute
                  left-[-120%]
                  top-0
                  h-full
                  w-[80px]
                  rotate-12
                  bg-white/20
                  blur-2xl
                  transition-all
                  duration-1000
                  group-hover:left-[120%]
                "
              />
            </motion.button>
          </a>

          {/* Social Icons */}
          <div
            className="
              mt-12
              flex
              justify-center
              gap-5

              lg:justify-start
            "
          >
            {socials.map((social, index) => (
              <motion.a
                key={index}
                href={social.link}
                target="_blank"
                rel="noreferrer"
                whileHover={{
                  y: -8,
                  scale: 1.08,
                }}
                className="
                  flex
                  h-14
                  w-14
                  items-center
                  justify-center
                  rounded-full

                  border
                  border-white/10

                  bg-white/[0.03]

                  text-xl
                  text-white/70

                  backdrop-blur-xl

                  transition-all
                  duration-500

                  hover:border-[#FF4E75]/40
                  hover:bg-[#FF4E75]
                  hover:text-white

                  shadow-[0_10px_30px_rgba(0,0,0,0.25)]
                "
              >
                <social.icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            flex
            w-full
            max-w-sm
            flex-1
            justify-center

            md:max-w-md

            lg:max-w-lg
          "
        >
          {/* Glow */}
          <div className="absolute bottom-0 h-[300px] w-[300px] rounded-full bg-[#FF4E75]/20 blur-[100px]" />

          {/* Image */}
          <motion.img
            whileHover={{
              scale: 1.02,
            }}
            src={sujal}
            alt="Sujal Portrait"
            className="
              relative
              z-10
              h-auto
              w-full
              rounded-[32px]
              object-cover

              border
              border-white/10

              shadow-[0_40px_100px_rgba(0,0,0,0.45)]

              contrast-110
            "
          />

          {/* Floating Card */}
          <motion.div
            animate={{
              y: [0, -12, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -bottom-8
              left-1/2
              z-20
              -translate-x-1/2

              rounded-2xl
              border
              border-white/10

              bg-white/[0.04]

              px-6
              py-4

              backdrop-blur-xl

              shadow-[0_20px_50px_rgba(0,0,0,0.35)]
            "
          >
            <p className="text-xs uppercase text-center tracking-[4px] text-[#FF4E75]">
              Available For Work
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;
