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

// import React from "react";
// import { motion } from "framer-motion";
// import { Link } from "react-scroll";

// const Navbar = () => {
//   // Container variants to control the staggered reveal of the links
//   const navContainerVariants = {
//     hidden: { opacity: 0 },
//     visible: {
//       opacity: 1,
//       transition: {
//         staggerChildren: 0.1, // Time between each link dropping in
//         delayChildren: 0.3, // Wait a moment before the links start appearing
//       },
//     },
//   };

//   // Individual link variants
//   const linkVariants = {
//     hidden: { opacity: 0, y: -15 },
//     visible: {
//       opacity: 1,
//       y: 0,
//       transition: { type: "spring", stiffness: 100, damping: 15 },
//     },
//   };

//   const items = [
//     { index: 1, name: "Works", id: "work" },
//     { index: 2, name: "Conatct", id: "contact" },
//   ];
//   return (
//     // 1. The whole nav bar drops down smoothly from the top
//     <motion.nav
//       initial={{ y: -100 }}
//       animate={{ y: 0 }}
//       transition={{ type: "spring", stiffness: 70, damping: 15 }}
//       className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 border-b border-white/20"
//     >
//       <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
//         {/* 2. Logo slides in from the left */}
//         <motion.h1
//           initial={{ opacity: 0, x: -20 }}
//           href={`#${"home"}`}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.5, delay: 0.2 }}
//           className="text-4xl font-bold cursor-pointer"
//         >
//           <Link to="home" smooth={true} duration={300} spy={true} offset={-70}>
//             SUJAL
//           </Link>
//         </motion.h1>
//         {/* 3. Links use the staggered container variants */}
//         <motion.div
//           variants={navContainerVariants}
//           initial="hidden"
//           animate="visible"
//           className="hidden md:flex gap-10 text-sm font-medium"
//         >
//           {items.map((item) => (
//             <motion.a
//               key={item.index}
//               // href={`#${item.toLowerCase()}`}
//               variants={linkVariants}
//               whileHover={{ y: -2, color: "#666" }} // Subtle lift on hover
//               className="cursor-pointer transition-colors duration-300"
//             >
//               <Link
//                 to={item.id}
//                 smooth={true}
//                 duration={300}
//                 spy={true}
//                 offset={-70}
//                 activeClass="text-[#d96561]"
//               >
//                 {item.name}
//               </Link>
//             </motion.a>
//           ))}
//         </motion.div>
//         {/* 4. Button pops in, replacing Tailwind hover with Framer physics */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.8 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5, delay: 0, type: "spring" }}
//           whileHover={{ scale: 1.05 }} // Framer handles the hover scale smoother than Tailwind
//           whileTap={{ scale: 0.95 }} // Satisfying click effect
//           className="bg-black text-white px-6 py-3 rounded-full cursor-pointer"
//         >
//           <Link
//             to="contact"
//             smooth={true}
//             duration={300}
//             spy={true}
//             offset={-70}
//           >
//             Hire Me
//           </Link>
//         </motion.div>
//       </div>
//     </motion.nav>
//   );
// };

// export default Navbar;
// //--------------------------------------------------------//
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-scroll";
import { HiOutlineMenuAlt4, HiX } from "react-icons/hi";
import { HashLink } from "react-router-hash-link";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const items = [
    { id: "home", name: "Home" },
    { id: "about", name: "About" },
    { id: "work", name: "Works" },
    { id: "faq", name: "FAQ" },
    { id: "contact", name: "Contact" },
  ];
  // const items = [
  //   { id: "home", name: "Home", type: "scroll" },
  //   { id: "about", name: "About", type: "scroll" },
  //   { id: "work", name: "Works", type: "scroll" },
  //   { id: "faq", name: "FAQ", type: "scroll" },
  //   { id: "contact", name: "Contact", type: "scroll" },

  //   // separate page
  //   { path: "/projects", name: "Projects", type: "route" },
  // ];
  const navContainerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const linkVariants = {
    hidden: {
      opacity: 0,
      y: -20,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <>
      {/* NAVBAR */}
      <motion.nav
        initial={{
          y: -100,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 1,
          ease: [0.16, 1, 0.3, 1],
        }}
        className="
          fixed
          left-0
          top-0
          z-50
          w-full

          border-b
          border-white/10

          bg-[#00181C]/70

          backdrop-blur-2xl
        "
      >
        {/* Glow */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF4E75]/5 to-transparent" />

        <div
          className="
            relative
            z-10
            mx-auto
            flex
            max-w-7xl
            items-center
            justify-between

            px-6
            py-5

            lg:px-10
          "
        >
          {/* LOGO */}
          <motion.div
            initial={{
              opacity: 0,
              x: -20,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              delay: 0.2,
            }}
          >
            {/* <Link
              to="home"
              smooth={true}
              duration={500}
              offset={-70}
              className="
                cursor-pointer

                font-['Bebas_Neue',_sans-serif]
                text-4xl
                tracking-tight
                text-white
              "
            >
              SUJAL
            </Link> */}
            <HashLink
              smooth
              to="/#home"
              className="
                cursor-pointer

                font-['Bebas_Neue',_sans-serif]
                text-4xl
                tracking-tight
                text-white
              "
            >
              SUJAL
            </HashLink>
          </motion.div>

          {/* DESKTOP MENU */}
          <motion.div
            variants={navContainerVariants}
            initial="hidden"
            animate="visible"
            className="
              hidden
              items-center
              gap-10

              md:flex
            "
          >
            {items.map((item) => (
              <motion.div key={item.id} variants={linkVariants}>
                <Link
                  to={item.id}
                  smooth={true}
                  duration={500}
                  spy={true}
                  offset={-70}
                  activeClass="active"
                  className="
                    relative
                    cursor-pointer

                    text-sm
                    uppercase
                    tracking-[3px]
                    text-white/70

                    transition-all
                    duration-500

                    hover:text-[#FF4E75]
                  "
                >
                  {item.name}
                </Link>
              </motion.div>
            ))}
            {/* {items.map((item) => (
              <motion.div key={item.name} variants={linkVariants}>
                {item.type === "scroll" ? (
                  <HashLink
                    smooth
                    to={`/#${item.id}`}
                    activeClass="active"
                    className="
          relative
          cursor-pointer

          text-sm
          uppercase
          tracking-[3px]
          text-white/70

          transition-all
          duration-500

          hover:text-[#FF4E75]
        "
                  >
                    {item.name}
                  </HashLink>
                ) : (
                  <NavLink
                    to={item.path}
                    className="
          relative
          cursor-pointer

          text-sm
          uppercase
          tracking-[3px]
          text-white/70

          transition-all
          duration-500

          hover:text-[#FF4E75]
        "
                  >
                    {item.name}
                  </NavLink>
                )}
              </motion.div>
            ))}*/}
          </motion.div>

          {/* RIGHT BUTTON */}
          <div className="hidden md:block">
            <motion.div
              whileHover={{
                scale: 1.05,
                y: -2,
              }}
              whileTap={{
                scale: 0.95,
              }}
            >
              <Link
                to="contact"
                smooth={true}
                duration={500}
                offset={-70}
                className="
                  group
                  relative
                  cursor-pointer
                  overflow-hidden

                  rounded-full

                  border
                  border-[#FF4E75]/30

                  bg-[#FF4E75]

                  px-7
                  py-3

                  text-sm
                  font-medium
                  uppercase
                  tracking-[3px]
                  text-white

                  shadow-[0_15px_40px_rgba(255,78,117,0.35)]

                  transition-all
                  duration-500
                "
              >
                <span className="relative z-10">Hire Me</span>

                {/* Shine */}
                <div
                  className="
                    absolute
                    left-[-120%]
                    top-0
                    h-full
                    w-[70px]
                    rotate-12

                    bg-white/20
                    blur-2xl

                    transition-all
                    duration-1000

                    group-hover:left-[120%]
                  "
                />
              </Link>
            </motion.div>
          </div>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="
              flex
              items-center
              justify-center

              rounded-full

              border
              border-white/10

              bg-white/[0.03]

              p-3

              text-white

              md:hidden
            "
          >
            {isOpen ? <HiX size={24} /> : <HiOutlineMenuAlt4 size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* BACKDROP */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="
                fixed
                inset-0
                z-40

                bg-black/50
                backdrop-blur-sm

                md:hidden
              "
            />

            {/* MENU */}
            <motion.div
              initial={{
                x: "100%",
              }}
              animate={{
                x: 0,
              }}
              exit={{
                x: "100%",
              }}
              transition={{
                duration: 0.5,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="
                fixed
                right-0
                top-0
                z-50

                flex
                h-screen
                w-[85%]
                flex-col

                border-l
                border-white/10

                bg-[#00181C]

                p-8

                md:hidden
              "
            >
              {/* TOP */}
              <div className="mb-16 flex items-center justify-between">
                <h2
                  className="
                    font-['Bebas_Neue',_sans-serif]
                    text-4xl
                    tracking-tight
                    text-white
                  "
                >
                  MENU
                </h2>

                <button
                  onClick={() => setIsOpen(false)}
                  className="
                    rounded-full
                    border
                    border-white/10

                    bg-white/[0.03]

                    p-3

                    text-white
                  "
                >
                  <HiX size={22} />
                </button>
              </div>

              {/* LINKS */}
              <div className="flex flex-col gap-8">
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{
                      opacity: 0,
                      x: 50,
                    }}
                    animate={{
                      opacity: 1,
                      x: 0,
                    }}
                    transition={{
                      delay: index * 0.1,
                    }}
                  >
                    <Link
                      to={item.id}
                      smooth={true}
                      duration={500}
                      offset={-70}
                      onClick={() => setIsOpen(false)}
                      className="
                        cursor-pointer

                        font-['Bebas_Neue',_sans-serif]
                        text-5xl
                        tracking-tight
                        text-white/80

                        transition-all
                        duration-500

                        hover:text-[#FF4E75]
                      "
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* BUTTON */}
              <div className="mt-auto">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="
                    flex
                    items-center
                    justify-center

                    rounded-full

                    bg-[#FF4E75]

                    px-8
                    py-5

                    text-sm
                    font-medium
                    uppercase
                    tracking-[3px]
                    text-white

                    shadow-[0_20px_50px_rgba(255,78,117,0.35)]
                  "
                >
                  Start A Project
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
