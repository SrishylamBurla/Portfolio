// const Navbar = () => {
//   return (
//     <nav className="text-white bg-slate-950 px-8 md:px-10 flex justify-center shadow-lg sticky top-0 z-50">
//       <div className="container flex justify-center md:justify-between items-center py-3">
//         <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-600">
//           <a href="/">SRISHYLAM</a>
//         </div>
//         <div className="space-x-6 hidden md:flex">
//           <a
//             href="#Hero"
//             className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:text-red-500"
//           >
//             Home
//           </a>
//           <a
//             href="#about"
//             className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:text-red-500"
//           >
//             About
//           </a>
//           <a
//             href="#projects"
//             className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:text-red-500"
//           >
//             Projects
//           </a>
//           <a
//             href="#contact"
//             className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 hover:text-red-500"
//           >
//             Contact
//           </a>
//         </div>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;

import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="text-white bg-slate-950 px-8 md:px-10 flex justify-center shadow-lg sticky top-0 z-50">
      <div className="container flex justify-between items-center py-3">
        {/* Logo */}
        <div className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-red-600">
          <a href="/">SRISHYLAM</a>
        </div>

        {/* Desktop Links */}
        <div className="space-x-6 hidden md:flex">
          <a href="#Hero" className="hover:text-red-500">Home</a>
          <a href="#about" className="hover:text-red-500">About</a>
          <a href="#projects" className="hover:text-red-500">Projects</a>
          <a href="#contact" className="hover:text-red-500">Contact</a>
        </div>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-2xl z-50"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="absolute top-full right-4 mt-2 w-48 bg-slate-900 rounded-xl shadow-lg flex flex-col items-start p-4 space-y-4 md:hidden"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            <a
              href="#Hero"
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-red-500"
            >
              Home
            </a>
            <a
              href="#about"
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-red-500"
            >
              About
            </a>
            <a
              href="#projects"
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-red-500"
            >
              Projects
            </a>
            <a
              href="#contact"
              onClick={() => setIsOpen(false)}
              className="text-lg hover:text-red-500"
            >
              Contact
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
