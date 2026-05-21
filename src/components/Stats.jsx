// import React from "react";
// import { motion } from "framer-motion";

// const stats = [
//   {
//     title: "100+",
//     subtitle: "Projects",
//   },
//   {
//     title: "20+",
//     subtitle: "Clients",
//   },
//   {
//     title: "2y+",
//     subtitle: "Experience",
//   },
// ];

// // 1. Container variants to stagger the cards one by one
// const containerVariants = {
//   hidden: { opacity: 0 },
//   show: {
//     opacity: 1,
//     transition: {
//       staggerChildren: 0.2, // 0.2 seconds between each card appearing
//     },
//   },
// };

// // 2. Individual card variants (starts invisible and lower down)
// const cardVariants = {
//   hidden: { opacity: 0, y: 50 },
//   show: {
//     opacity: 1,
//     y: 0,
//     transition: {
//       type: "spring",
//       stiffness: 100,
//       damping: 15,
//     },
//   },
// };

// const Stats = () => {
//   return (
//     <section className="py-20 px-6 lg:px-20">
//       <motion.div
//         // 3. Connect the variants and viewport trigger
//         variants={containerVariants}
//         initial="hidden"
//         whileInView="show"
//         // amount: 0.3 means the animation triggers when 30% of the grid is on screen.
//         // Because we DO NOT have 'once: true' here, it will vanish when you scroll away.
//         viewport={{ amount: 0.3 }}
//         className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6"
//       >
//         {stats.map((item, index) => (
//           <motion.div
//             key={index}
//             variants={cardVariants}
//             // 4. Swapped Tailwind hover for Framer whileHover for smoother physics
//             whileHover={{ y: -10 }}
//             className="bg-white/40 backdrop-blur-xl border border-white/20 rounded-[35px] p-10 text-center shadow-lg cursor-default"
//           >
//             <h2 className="text-5xl font-black mb-2">{item.title}</h2>
//             <p className="text-gray-700">{item.subtitle}</p>
//           </motion.div>
//         ))}
//       </motion.div>
//     </section>
//   );
// };

// export default Stats;

import React from "react";
import { motion } from "framer-motion";

const stats = [
  {
    title: "100+",
    subtitle: "Projects",
  },
  {
    title: "20+",
    subtitle: "Clients",
  },
  {
    title: "2Y+",
    subtitle: "Experience",
  },
];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.18,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 80,
    filter: "blur(10px)",
  },
  show: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: {
      duration: 1,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const Stats = () => {
  return (
    <section className="relative overflow-hidden bg-[#00181C] px-6 py-24 lg:px-20">
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[400px] w-[400px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4E75]/10 blur-[120px]" />

      {/* Grid */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        viewport={{
          amount: 0.2,
          once: false,
        }}
        className="
          relative
          z-10
          mx-auto
          grid
          max-w-6xl
          gap-6

          sm:grid-cols-2

          lg:grid-cols-3
        "
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            whileHover={{
              y: -12,
              scale: 1.02,
            }}
            transition={{
              type: "spring",
              stiffness: 180,
              damping: 15,
            }}
            className="
              group
              relative
              overflow-hidden
              rounded-[32px]
              border
              border-white/10
              bg-white/[0.03]
              p-10
              backdrop-blur-2xl
              cursor-default

              shadow-[0_10px_50px_rgba(0,0,0,0.35)]
            "
          >
            {/* Hover Glow */}
            <div
              className="
                absolute
                inset-0
                opacity-0
                transition
                duration-500
                group-hover:opacity-100
                bg-gradient-to-br
                from-[#FF4E75]/10
                to-transparent
              "
            />

            {/* Top Border Glow */}
            <div
              className="
                absolute
                left-0
                top-0
                h-[2px]
                w-0
                bg-[#FF4E75]
                transition-all
                duration-700
                group-hover:w-full
              "
            />

            {/* Number */}
            <h2
              className="
                relative
                z-10
                mb-3
                font-['Bebas_Neue',_sans-serif]
                text-6xl
                tracking-tight
                text-white

                md:text-7xl
              "
            >
              {item.title}
            </h2>

            {/* Subtitle */}
            <p
              className="
                relative
                z-10
                text-sm
                uppercase
                tracking-[4px]
                text-white/50
              "
            >
              {item.subtitle}
            </p>

            {/* Corner Blur */}
            <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#FF4E75]/10 blur-3xl" />
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
