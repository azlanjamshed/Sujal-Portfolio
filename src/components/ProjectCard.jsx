import React from "react";
import { motion } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <motion.div
      whileHover={{
        y: -10,
      }}
      transition={{
        duration: 0.4,
        ease: "easeOut",
      }}
      className="
        group
        relative
        overflow-hidden
        rounded-[28px]

        border
        border-white/10

        bg-[#071f24]

        shadow-[0_20px_50px_rgba(0,0,0,0.35)]

        backdrop-blur-xl
      "
    >
      {/* IMAGE / VIDEO */}
      <div className="relative overflow-hidden">
        {product.video ? (
          <video
            src={product.video}
            autoPlay
            muted
            loop
            playsInline
            className="
              h-[260px]
              w-full
              object-cover

              transition-all
              duration-700

              group-hover:scale-105
            "
          />
        ) : (
          <img
            src={product.image}
            alt={product.title}
            className="
              h-[260px]
              w-full
              object-cover

              transition-all
              duration-700

              group-hover:scale-105
            "
          />
        )}

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#00181C]/90 via-transparent to-transparent" />

        {/* Category */}
        <div
          className="
            absolute
            left-4
            top-4

            rounded-full

            border
            border-white/10

            bg-black/20

            px-4
            py-2

            text-[10px]
            uppercase
            tracking-[3px]
            text-[#FF4E75]

            backdrop-blur-xl
          "
        >
          {product.category}
        </div>
      </div>

      {/* CONTENT */}
      <div className="p-6">
        {/* TITLE */}
        <div className="mb-4 flex items-start justify-between gap-4">
          <h3
            className="
              font-['Bebas_Neue',_sans-serif]
              text-3xl
              leading-[0.9]
              tracking-tight
              text-white
            "
          >
            {product.title}
          </h3>

          {/* ICON */}
          <motion.div
            whileHover={{
              rotate: 45,
            }}
            className="
              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-full

              border
              border-white/10

              bg-white/[0.03]

              text-white/60

              transition-all
              duration-500

              group-hover:border-[#FF4E75]/40
              group-hover:bg-[#FF4E75]
              group-hover:text-white
            "
          >
            <FiArrowUpRight size={20} />
          </motion.div>
        </div>

        {/* DESCRIPTION */}
        <p
          className="
            text-sm
            leading-relaxed
            text-white/60
          "
        >
          {product.description}
        </p>

        {/* FOOTER */}
        <div
          className="
            mt-6
            flex
            items-center
            justify-between
          "
        >
          {/* TAG */}
          <span
            className="
              text-xs
              uppercase
              tracking-[3px]
              text-white/40
            "
          >
            {product.year || "2026"}
          </span>

          {/* BUTTON */}
          <button
            className="
              text-xs
              uppercase
              tracking-[3px]
              text-[#FF4E75]

              transition-all
              duration-300

              hover:text-white
            "
          >
            View Project
          </button>
        </div>
      </div>

      {/* Glow */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-[#FF4E75]/10 blur-3xl" />
    </motion.div>
  );
};

export default ProductCard;
