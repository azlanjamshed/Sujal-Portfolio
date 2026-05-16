import { FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  return (
    <section
      id="contact"
      className="py-32 px-6 lg:px-20 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-r from-red-200/40 to-orange-200/40 blur-3xl"></div>

      <div className="max-w-5xl mx-auto text-center relative z-10">
        <h2 className="text-6xl md:text-8xl font-black mb-6">
          Let’s Create Something Cinematic
        </h2>

        <p className="text-lg text-gray-700 max-w-2xl mx-auto mb-10">
          Available for freelance projects, creator collaborations, motion
          graphics, and premium editing work.
        </p>

        <button className="bg-black text-white px-10 py-5 rounded-full text-lg hover:scale-105 duration-300 mb-10">
          hello@email.com
        </button>

        <div className="flex justify-center gap-6 text-3xl">
          <FaInstagram />
          <FaYoutube />
          <FaEnvelope />
        </div>
      </div>
    </section>
  );
};

export default Contact;
