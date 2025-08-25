const Navbar = () => {
  return (
    <nav className="text-white bg-slate-950 px-8 md:px-10 flex justify-center shadow-lg sticky top-0 z-50">
      <div className="container flex justify-center md:justify-between items-center py-3">
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-600">
          <a href="/">SRISHYLAM</a>
        </div>
        <div className="space-x-6 hidden md:flex">
          <a
            href="#Hero"
            className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:text-red-500"
          >
            Home
          </a>
          <a
            href="#about"
            className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:text-red-500"
          >
            About
          </a>
          <a
            href="#projects"
            className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:text-red-500"
          >
            Projects
          </a>
          <a
            href="#contact"
            className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:text-red-500"
          >
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
