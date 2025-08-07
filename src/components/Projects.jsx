import ProjectCard from "./ProjectCard";
import ScrollFadeIn from "./ScrollInFade";

const Projects = () => {
  const projects = [
    {
      id: "1",
      name: "Property-pulse",
      image: "Screenshot 2025-07-31 230039.png",
      description:
        "A web application to help you find your next rental property.",
      TechStack: "ReactJS | NextJS | MongoDB",
      url: "https://property-pulse-green-pi.vercel.app",
      github: "https://github.com/SrishylamBurla/property-pulse.git",
    },
    {
      id: "2",
      name: "Proshop-eCommerce",
      image: "Screenshot 2025-07-25 153902.png",
      description: "A complete online shopping platform.",
      TechStack: "ReactJS | ExpressJS | MongoDB | JavaScript | NodeJS",
      url: "https://proshop-7fr5.onrender.com",
      github: "https://github.com/SrishylamBurla/proshop-ecommerce.git",
    },
  ];

  return (
    <div className="bg-black text-white py-2 md:py-24">
      <div className="container px-8 md:px-10 lg:px-24 mx-auto" id="projects">
        <ScrollFadeIn direction="up">
          <h1 className="text-3xl text-center font-bold mb-20">My Projects</h1>
        </ScrollFadeIn>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 justify-items-center">
          {projects.map((project) => (
            <ScrollFadeIn direction="up">
              <ProjectCard key={project.id} project={project} />
            </ScrollFadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
