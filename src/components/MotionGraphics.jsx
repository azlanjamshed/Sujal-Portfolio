const motionItems = [
  "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=1200",

  "https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200",

  "https://images.unsplash.com/photo-1507146426996-ef05306b995a?q=80&w=1200",

  "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1200",
];

const MotionGraphics = () => {
  return (
    <section id="motion" className="py-32 px-6 lg:px-20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-6xl md:text-7xl font-black mb-6">
            Motion Graphics
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-gray-700">
            Modern motion design crafted for creators and digital brands.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {motionItems.map((item, index) => (
            <div
              key={index}
              className="overflow-hidden rounded-[35px] bg-black shadow-2xl"
            >
              <img
                src={item}
                alt=""
                className="h-[320px] w-full object-cover hover:scale-110 duration-700 opacity-90 hover:opacity-100"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MotionGraphics;
