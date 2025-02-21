import { RevealOnScroll } from "../RevealOnScroll";

export const Projects = () => {
  const projects = [
    {
      title: "Gaming Website",
      description:
        "Developed a dynamic platform utilizing the MERN stack which offers popular games, incorporating both free and paid options",
      techStack: ["React", "Node.js", "MongoDB"],
      link: "https://arcadearray.netlify.app/",
    },
    {
      title: "JBL Clone",
      description:
        "Developed a pixel-perfect clone of the JBL website's frontend using HTML and CSS.",
      techStack: ["HTML", "CSS"],
      link: "https://jblclone1.netlify.app/",
    },
    {
      title: "Meals Cocktails website",
      description:
        "Developed a modern frontend application built using React that integrates with various APIs to deliver dynamic and interactive user experiences.",
      techStack: ["React", "HTML", "CSS", "RESTAPIs"],
      link: "https://reactmealproject.onrender.com/",
    },
    {
      title: "Pharmeasy Clone",
      description:
        "Developed a pixel-perfect clone of the Pharmeasy website's frontend using HTML and CSS.",
      techStack: ["React" , "HTML", "CSS"],
      link: "https://pharmeasybykrish.netlify.app/",
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-5xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
            Featured Projects
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div
                key={index}
                className="p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all bg-white/5 backdrop-blur-sm"
              >
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.techStack.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex justify-between items-center">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors my-4"
                  >
                    View Project →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
