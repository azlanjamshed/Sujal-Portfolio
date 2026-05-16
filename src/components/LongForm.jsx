const LongForm = () => {
  return (
    <section id="longform" className="py-32 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-6">Longform</h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Premium YouTube edits and podcast storytelling.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <img
            src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200"
            alt=""
            className="rounded-[35px] shadow-2xl hover:scale-[1.02] duration-500"
          />

          <div>
            <h2 className="text-5xl font-black mb-6">
              Cinematic Podcast Editing
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              Complete end-to-end podcast production with storytelling,
              retention editing, pacing, transitions, motion graphics, and sound
              design.
            </p>

            <button className="bg-orange-400 px-8 py-4 rounded-full font-semibold hover:scale-105 duration-300">
              Watch Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LongForm;
