import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const ProjectCard = ({ project }) => {
  return (
    <div className={`bg-black border border-gray-800 rounded-2xl shadow-lg ${project.shadowColor} overflow-hidden 
    w-full max-w-md transition-transform hover:scale-105`}>
      <img
        src={project.image}
        alt="Project-img"
        className="w-full h-52 object-cover p-4"
      />

      <div className="p-4 text-white">
        <h2 className="text-2xl font-semibold text-emerald-400">
          {project.name}
        </h2>
        <p className="text-sm text-gray-300 mt-2">
          {project.description}
        </p>

        <p className="mt-3 text-xs text-gray-400">
          <span className="font-bold text-white">TechStack:</span> {project.TechStack}
        </p>
        <div className="grid grid-cols-2 mt-4">
        <a
      href={project.url}
      target="_blank"
      rel="noopener noreferrer"
      className="px-2 py-1 rounded-lg m-2 text-sm flex justify-center items-center 
      font-semibold bg-gradient-to-r from-green-400 to-blue-500 hover:scale-105"
      >Url: <FaExternalLinkAlt className="inline-block ml-2 text-white" /></a>
      <a
      href={project.github}
      target="_blank"
      rel="noopener noreferrer"
      className="px-2 py-1 rounded-lg m-2 text-sm flex justify-center items-center 
      font-semibold bg-gradient-to-r from-red-400 to-yellow-500 hover:scale-105"
      >Github: <FaGithub className="inline-block ml-2 text-white" /></a>
      </div>
      </div>
    </div>
    
  );
};

export default ProjectCard;

