import { AnimatePresence, motion } from "framer-motion";

const Hero = () => {
  return (
    <AnimatePresence>
      <motion.Div
        className="bg-black text-white text-center px-6 py-24"
        id="hero"
      >
        <motion.Div initial={{opacity: 0, scale:0}}
          animate={{opacity:1, scale: 1}}
          exit={{opacity:0, scale:0}}
          transition={{duration: 1}}>
        <img
          className="rounded-full mx-auto mb-8 w-48 h-48 object-cover transform transition-transform duration-300 hover:scale-105"
          src="./ezgif.com-resize.png"
          alt="hero-image"
        /></motion.Div>
        <motion.Div
          initial={{ x: "-100%", opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          exit={{ x: "100%", opacity: 0 }}
          transition={{ duration: 1.5 }}
        >
          <h1 className="text-4xl font-bold mb-8">
            I'm{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
              Srishylam
            </span>
            , Full Stack Developer
          </h1>
        
        <p className="text-lg mb-6 text-gray-400">
          I specialize in building modern and responsive web applications
        </p>
        <div className="space-x-4">
          <a href="#contact">
            <button
              className="btn btn-block text-white bg-gradient-to-r
             from-green-400 to-blue-500 px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
            >
              Contact Me
            </button>
          </a>
          <a
            href="/Srishylam-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <button
              className="btn btn-block text-white bg-gradient-to-r
             from-pink-400 to-yellow-500 px-4 py-2 rounded-full transform transition-transform duration-300 hover:scale-105"
            >
              Resume
            </button>
          </a>
        </div></motion.Div>
      </motion.Div>
    </AnimatePresence>
  );
};

export default Hero;
