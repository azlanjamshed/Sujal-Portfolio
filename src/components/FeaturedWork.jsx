import VideoCard from "./VideoCard";

const videos = [
  {
    image:
      "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&w=1200",
    views: "1.6M+ Views",
  },

  {
    image:
      "https://images.unsplash.com/photo-1521737604893-d14cc237f11d?q=80&w=1200",
    views: "503K+ Views",
  },

  {
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
    views: "270K+ Views",
  },
];

const FeaturedWork = () => {
  return (
    <section id="work" className="py-32 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        {/* <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-6">
            Featured Work
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Viral short-form edits crafted for storytelling, retention, and
            engagement.
          </p>
        </div> */}

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video, index) => (
            <VideoCard key={index} {...video} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;
