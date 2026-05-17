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
    title: "2y+",
    subtitle: "Experience",
  },
];

// 1. Container variants to stagger the cards one by one
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // 0.2 seconds between each card appearing
    },
  },
};

// 2. Individual card variants (starts invisible and lower down)
const cardVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15,
    },
  },
};

const Stats = () => {
  return (
    <section className="py-20 px-6 lg:px-20">
      <motion.div
        // 3. Connect the variants and viewport trigger
        variants={containerVariants}
        initial="hidden"
        whileInView="show"
        // amount: 0.3 means the animation triggers when 30% of the grid is on screen.
        // Because we DO NOT have 'once: true' here, it will vanish when you scroll away.
        viewport={{ amount: 0.3 }}
        className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6"
      >
        {stats.map((item, index) => (
          <motion.div
            key={index}
            variants={cardVariants}
            // 4. Swapped Tailwind hover for Framer whileHover for smoother physics
            whileHover={{ y: -10 }}
            className="bg-white/40 backdrop-blur-xl border border-white/20 rounded-[35px] p-10 text-center shadow-lg cursor-default"
          >
            <h2 className="text-5xl font-black mb-2">{item.title}</h2>
            <p className="text-gray-700">{item.subtitle}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default Stats;
