import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What services do you provide?",
    answer:
      "I specialize in cinematic video editing, motion graphics, creative direction, UI animations, and premium web experiences.",
  },
  {
    question: "Do you work with international clients?",
    answer:
      "Yes, I collaborate with creators, startups, and brands worldwide through remote communication and online meetings.",
  },
  {
    question: "What software and tools do you use?",
    answer:
      "I mainly use After Effects, Premiere Pro, Blender, React, Tailwind CSS, Framer Motion, and modern creative tools.",
  },
  {
    question: "How long does a project usually take?",
    answer:
      "Project timelines vary depending on complexity, but most projects are completed within 1–3 weeks.",
  },
  {
    question: "Can I request revisions?",
    answer:
      "Absolutely. Revisions are included to ensure the final work perfectly matches your vision and expectations.",
  },
];

const FAQ = () => {
  const [openIndexes, setOpenIndexes] = useState([]);

  const toggleFAQ = (index) => {
    setOpenIndexes((prev) =>
      prev.includes(index)
        ? prev.filter((item) => item !== index)
        : [...prev, index],
    );
  };

  return (
    <section
      id="faq"
      className="
        relative
        overflow-hidden
        bg-[#00181C]
        px-6
        py-24

        lg:px-20
      "
    >
      {/* Background Glow */}
      <div className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#FF4E75]/10 blur-[140px]" />

      {/* Texture */}
      <div className="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/concrete-wall.png')]" />

      <div className="relative z-10 mx-auto max-w-5xl">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-xs uppercase tracking-[5px] text-[#FF4E75]">
            FAQ
          </p>

          <h2
            className="
              font-['Bebas_Neue',_sans-serif]
              text-5xl
              leading-[0.9]
              tracking-tight
              text-white

              sm:text-6xl

              md:text-7xl
            "
          >
            FREQUENTLY
            <br />
            ASKED QUESTIONS
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => {
            const isOpen = openIndexes.includes(index);

            return (
              <motion.div
                key={index}
                layout
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                }}
                className="
                  overflow-hidden
                  rounded-[28px]

                  border
                  border-white/10

                  bg-white/[0.03]

                  backdrop-blur-xl

                  shadow-[0_15px_40px_rgba(0,0,0,0.25)]
                "
              >
                {/* Question */}
                <button
                  onClick={() => toggleFAQ(index)}
                  className="
                    flex
                    w-full
                    items-center
                    justify-between
                    gap-5

                    px-6
                    py-6

                    text-left

                    md:px-8
                  "
                >
                  <h3
                    className="
                      text-base
                      font-medium
                      text-white

                      sm:text-lg

                      md:text-xl
                    "
                  >
                    {faq.question}
                  </h3>

                  <div
                    className="
                      flex
                      h-11
                      w-11
                      items-center
                      justify-center
                      rounded-full

                      border
                      border-white/10

                      bg-[#FF4E75]/10

                      text-[#FF4E75]

                      shrink-0
                    "
                  >
                    {isOpen ? <FiMinus size={20} /> : <FiPlus size={20} />}
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{
                        height: 0,
                        opacity: 0,
                      }}
                      animate={{
                        height: "auto",
                        opacity: 1,
                      }}
                      exit={{
                        height: 0,
                        opacity: 0,
                      }}
                      transition={{
                        duration: 0.35,
                        ease: "easeInOut",
                      }}
                    >
                      <div className="px-6 pb-6 md:px-8">
                        <div className="mb-5 h-[1px] w-full bg-white/10" />

                        <p
                          className="
                            text-sm
                            leading-relaxed
                            text-white/60

                            sm:text-base
                          "
                        >
                          {faq.answer}
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
