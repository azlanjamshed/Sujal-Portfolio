const stats = [
  {
    title: "100+",
    subtitle: "Projects",
  },
  {
    title: "50M+",
    subtitle: "Views",
  },
  {
    title: "20+",
    subtitle: "Clients",
  },
];

const Stats = () => {
  return (
    <section className="py-20 px-6 lg:px-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-white/40 backdrop-blur-xl border border-white/20 rounded-[35px] p-10 text-center hover:-translate-y-2 transition-all duration-300 shadow-lg"
          >
            <h2 className="text-5xl font-black mb-2">{item.title}</h2>

            <p className="text-gray-700">{item.subtitle}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Stats;
