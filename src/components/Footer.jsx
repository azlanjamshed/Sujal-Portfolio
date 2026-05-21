// const Footer = () => {
//   return (
//     <footer className="py-10 text-center border-t border-gray-300 text-gray-600">
//       © 2026 Sujal Portfolio. All rights reserved.
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="
        relative
        overflow-hidden
        border-t
        border-white/10
        bg-[#00181C]
        px-6
        py-12
      "
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-0 h-[300px] w-[300px] -translate-x-1/2 rounded-full bg-[#FF4E75]/10 blur-[100px]" />

      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />

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
          gap-8

          md:flex-row
        "
      >
        {/* LEFT */}
        <div className="text-center md:text-left">
          <h2
            className="
              font-['Bebas_Neue',_sans-serif]
              text-3xl
              tracking-wide
              text-white
            "
          >
            SUJAL
          </h2>

          <p className="mt-2 text-sm text-white/50">
            Cinematic Motion Designer & Creative Developer
          </p>
        </div>

        {/* CENTER */}
        {/* <div className="flex items-center gap-5">
          {[FaInstagram, FaYoutube, FaEnvelope].map((Icon, index) => (
            <a
              key={index}
              href="#"
              className="
                flex
                h-12
                w-12
                items-center
                justify-center
                rounded-full

                border
                border-white/10

                bg-white/[0.03]

                text-lg
                text-white/60

                backdrop-blur-xl

                transition-all
                duration-500

                hover:-translate-y-1
                hover:border-[#FF4E75]/40
                hover:bg-[#FF4E75]
                hover:text-white

                shadow-[0_10px_30px_rgba(0,0,0,0.25)]
              "
            >
              <Icon />
            </a>
          ))}
        </div> */}

        {/* RIGHT */}
        <div className="text-center md:text-right">
          <p className="text-sm text-white/40">© 2026 Sujal Portfolio</p>

          <p className="mt-1 text-xs uppercase tracking-[3px] text-[#FF4E75]">
            All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
