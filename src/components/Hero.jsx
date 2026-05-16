import { motion } from "framer-motion";
// import { SiAdobe, SiAdobepremierepro, SiAdobephotoshop } from "react-icons/si";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center pt-28 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* LEFT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-6xl md:text-8xl font-black leading-none mb-4">
            Sujal
          </h1>

          <h2 className="text-2xl md:text-3xl mb-6 font-medium">
            Motion Graphics Designer & Video Editor
          </h2>

          <p className="text-gray-700 text-lg leading-relaxed max-w-xl mb-8">
            I create cinematic edits, engaging short-form content, and modern
            motion graphics that help creators and brands grow online.
          </p>

          <div className="flex gap-4 text-5xl mb-10">
            <div className="w-14 h-14 rounded-2xl bg-purple-200"></div>
            <div className="w-14 h-14 rounded-2xl bg-indigo-200"></div>
            <div className="w-14 h-14 rounded-2xl bg-blue-200"></div>
          </div>
          <button className="bg-red-500 hover:bg-red-600 text-white px-10 py-4 rounded-full text-lg font-semibold transition-all duration-300 hover:scale-105">
            Contact Me
          </button>
        </motion.div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <div className="bg-white/40 backdrop-blur-xl p-5 rounded-[40px] border border-white/20 shadow-2xl">
            <img
              src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200"
              alt=""
              className="rounded-[30px] h-[500px] w-full object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
