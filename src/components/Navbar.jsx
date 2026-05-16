const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/20 border-b border-white/20">
      <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
        <h1 className="text-4xl font-bold">SUJAL</h1>

        <div className="hidden md:flex gap-10 text-sm font-medium">
          <a href="#work">Work</a>
          <a href="#longform">Longform</a>
          <a href="#motion">Motion</a>
          <a href="#contact">Contact</a>
        </div>

        <button className="bg-black text-white px-6 py-3 rounded-full hover:scale-105 duration-300">
          Hire Me
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
