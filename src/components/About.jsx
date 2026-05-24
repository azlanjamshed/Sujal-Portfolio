// import React from "react";
// import { motion } from "framer-motion";

// const About = () => {
//   return (
//     <section
//       id="about"
//       className="
//         relative
//         overflow-hidden
//         bg-[#00181C]
//         px-6
//         py-24

//         lg:px-20
//       "
//     >
//       {/* Background Glow */}
//       <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4E75]/10 blur-[140px]" />

//       {/* Texture */}
//       <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />

//       <div
//         className="
//           relative
//           z-10
//           mx-auto
//           flex
//           max-w-7xl
//           flex-col
//           gap-16

//           lg:flex-row
//           lg:items-center
//           lg:justify-between
//         "
//       >
//         {/* LEFT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ amount: 0.3 }}
//           transition={{
//             duration: 1,
//             ease: [0.16, 1, 0.3, 1],
//           }}
//           className="w-full lg:w-[45%]"
//         >
//           {/* Small Label */}
//           <p
//             className="
//               mb-5
//               text-[11px]
//               uppercase
//               tracking-[5px]
//               text-[#FF4E75]
//             "
//           >
//             About
//           </p>

//           {/* Main Heading */}
//           <h2
//             className="
//               font-['Bebas_Neue',_sans-serif]
//               text-5xl
//               leading-[0.9]
//               tracking-tight
//               text-white

//               sm:text-6xl

//               md:text-7xl
//             "
//           >
//             CREATIVE
//             <br />
//             VIDEO EDITOR &
//             <br />
//             <span className="text-[#FF4E75]">DESIGNER</span>
//           </h2>
//         </motion.div>

//         {/* RIGHT SIDE */}
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ amount: 0.3 }}
//           transition={{
//             duration: 1,
//             delay: 0.2,
//             ease: [0.16, 1, 0.3, 1],
//           }}
//           className="
//             w-full

//             lg:w-[45%]
//           "
//         >
//           {/* Description */}
//           <p
//             className="
//               text-base
//               leading-relaxed
//               text-white/60

//               sm:text-lg

//               md:text-xl
//             "
//           >
//             I create cinematic digital experiences through motion design,
//             premium editing, and immersive visual storytelling. My work blends
//             modern aesthetics with smooth interactions to craft impactful
//             content for brands, creators, and startups.
//           </p>

//           {/* Divider */}
//           <div className="my-10 h-[1px] w-full bg-white/10" />

//           {/* Stats */}
//           <div
//             className="
//               grid
//               grid-cols-2
//               gap-8

//               sm:grid-cols-3
//             "
//           >
//             {[
//               {
//                 number: "100+",
//                 label: "Projects",
//               },
//               {
//                 number: "20+",
//                 label: "Clients",
//               },
//               {
//                 number: "2Y+",
//                 label: "Experience",
//               },
//             ].map((item, index) => (
//               <motion.div
//                 key={index}
//                 whileHover={{
//                   y: -5,
//                 }}
//                 className="
//                   rounded-2xl
//                   border
//                   border-white/10

//                   bg-white/[0.03]

//                   p-5

//                   backdrop-blur-xl

//                   shadow-[0_10px_30px_rgba(0,0,0,0.2)]
//                 "
//               >
//                 <h3
//                   className="
//                     font-['Bebas_Neue',_sans-serif]
//                     text-4xl
//                     tracking-tight
//                     text-[#FF4E75]
//                   "
//                 >
//                   {item.number}
//                 </h3>

//                 <p
//                   className="
//                     mt-1
//                     text-xs
//                     uppercase
//                     tracking-[3px]
//                     text-white/50
//                   "
//                 >
//                   {item.label}
//                 </p>
//               </motion.div>
//             ))}
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// };

// export default About;

import React from "react";
import { motion } from "framer-motion";
import profile from "../assets/sujal.png";

const About = () => {
  return (
    <section
      id="about"
      className="
        relative
        overflow-hidden
        bg-[#00181C]
        px-6
        py-24

        lg:px-20
      "
    >
      {/* Glow */}
      <div className="absolute left-1/2 top-1/2 h-[450px] w-[450px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4E75]/10 blur-[140px]" />

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
          gap-20

          lg:flex-row
          lg:justify-between
        "
      >
        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{
            duration: 1,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            relative
            flex
            w-full
            justify-center

            lg:w-[42%]
          "
        >
          {/* Glow Behind Image */}
          <div className="absolute bottom-0 h-[250px] w-[250px] rounded-full bg-[#FF4E75]/20 blur-[100px]" />

          {/* Image */}
          <motion.img
            whileHover={{
              scale: 1.02,
            }}
            src={profile}
            alt="Profile"
            className="
              relative
              z-10

              h-[420px]
              w-[300px]

              object-cover

              rounded-[32px]

              border
              border-white/10

              shadow-[0_30px_80px_rgba(0,0,0,0.45)]

              sm:h-[500px]
              sm:w-[360px]

              lg:h-[600px]
              lg:w-[420px]
            "
          />

          {/* Floating Card */}
          <motion.div
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="
              absolute
              -bottom-6
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
              Video Editor
            </p>
          </motion.div>
        </motion.div>

        {/* CONTENT SIDE */}
        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ amount: 0.3 }}
          transition={{
            duration: 1,
            delay: 0.2,
            ease: [0.16, 1, 0.3, 1],
          }}
          className="
            w-full

            lg:w-[48%]
          "
        >
          {/* Small Label */}
          <p
            className="
              mb-5
              text-[11px]
              uppercase
              tracking-[5px]
              text-[#FF4E75]
            "
          >
            About Me
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
            "
          >
            CREATING
            <br />
            CINEMATIC
            <br />
            DIGITAL
            <span className="text-[#FF4E75]"> EXPERIENCES</span>
          </h2>

          {/* Description */}
          <p
            className="
              text-base
              leading-relaxed
              text-white/60

              sm:text-lg

              md:text-xl
            "
          >
            I specialize in motion graphics, cinematic editing, UI animations,
            and immersive visual storytelling. My goal is to craft premium
            digital experiences that combine creativity, emotion, and modern
            design aesthetics.
          </p>

          {/* Divider */}
          <div className="my-10 h-[1px] w-full bg-white/10" />

          {/* Stats */}
          <div
            className="
              grid
              grid-cols-2
              gap-5

              sm:grid-cols-3
            "
          >
            {[
              {
                number: "100+",
                label: "Projects",
              },
              {
                number: "20+",
                label: "Clients",
              },
              {
                number: "2Y+",
                label: "Experience",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                whileHover={{
                  y: -5,
                }}
                className="
                  rounded-2xl
                  border
                  border-white/10

                  bg-white/[0.03]

                  p-5

                  backdrop-blur-xl

                  shadow-[0_10px_30px_rgba(0,0,0,0.2)]
                "
              >
                <h3
                  className="
                    font-['Bebas_Neue',_sans-serif]
                    text-4xl
                    tracking-tight
                    text-[#FF4E75]
                  "
                >
                  {item.number}
                </h3>

                <p
                  className="
                    mt-1
                    text-xs
                    uppercase
                    tracking-[3px]
                    text-white/50
                  "
                >
                  {item.label}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
