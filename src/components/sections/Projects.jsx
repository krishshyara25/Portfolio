import { RevealOnScroll } from "../RevealOnScroll";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiExpress } from "react-icons/si";
import { useState } from "react";

export const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const projects = [
    {
      title: "Gaming Website",
      description:
        "Developed a dynamic platform utilizing the MERN stack which offers popular games, incorporating both free and paid options.",
      techStack: ["React", "Node.js", "MongoDB"],
      link: "https://arcadearray.netlify.app/",
      category: "Full Stack Development",
      image: "https://res.cloudinary.com/drno4r3vd/image/upload/v1742794931/arcadearray.netlify.app_home_praxz9.png",
      video: "https://res.cloudinary.com/drno4r3vd/video/upload/v1754384184/Untitled_video_-_Made_with_Clipchamp_1_ulaa8k.mp4", // your actual video
    },
    {
      title: "JBL Clone",
      description:
        "Developed a pixel-perfect clone of the JBL website's frontend using HTML and CSS.",
      techStack: ["HTML", "CSS"],
      link: "https://jblclone1.netlify.app/",
      category: "Frontend Development",
      image: "https://res.cloudinary.com/drno4r3vd/image/upload/v1742795240/localhost_5174__cfq5uo.png",
      video: "https://res.cloudinary.com/drno4r3vd/video/upload/v1750497455/JBL_clone_video_e5fvcv.mp4",
    },
    {
      title: "Meals Cocktails website",
      description:
        "A modern frontend app built using React that integrates with various APIs to deliver dynamic and interactive user experiences.",
      techStack: ["React", "HTML", "CSS", "RESTAPIs"],
      link: "https://reactmealproject.onrender.com/",
      category: "Full Stack Development",
      image: "https://res.cloudinary.com/drno4r3vd/image/upload/v1742795394/Screenshot_2025-03-24_111846_skk12h.png",
      video: "https://res.cloudinary.com/drno4r3vd/video/upload/v1750493884/Untitled_video_-_Made_with_Clipchamp_bvlnje.mp4", // no video
    },
    {
      title: "Pharmeasy Clone",
      description:
        "Developed a pixel-perfect clone of the Pharmeasy website's frontend using HTML and CSS.",
      techStack: ["React", "HTML", "CSS"],
      link: "https://pharmeasybykrish.netlify.app/",
      category: "Frontend Development",
      image: "https://res.cloudinary.com/drno4r3vd/image/upload/v1742795737/Screenshot_2025-03-24_112511_yngkth.png",
      video: "",
    },
    {
      title: "Trend Setter",
      description:
        "Sleek e-commerce UI/UX design with a trendy fashion store layout, minimalist visuals, and intuitive user flow.",
      techStack: ["Figma"],
      link: "https://www.figma.com/design/EaciITpEb7Gyau4l5l2Eb8/Trend-Setter?node-id=0-1&t=SFBI6ll67STZiOI4-1",
      category: "UI/UX Design",
      image: "https://res.cloudinary.com/drno4r3vd/image/upload/v1742796132/Screenshot_2025-03-24_113141_d7oluw.png",
      video: "https://res.cloudinary.com/drno4r3vd/video/upload/v1750493123/Trend_Setter_c6eiyi.mp4",
    },
    {
      title: "IPL 2024 Points Table",
      description:
        "Designed a clean and visually appealing IPL 2024 Points Table in Figma, with vibrant UI.",
      techStack: ["Figma"],
      link: "https://www.figma.com/design/mFh47Pq1BTXn3cL1L5ojL2/Untitled?node-id=1-2&t=qFxZioUT5ESSVB38-1",
      category: "UI/UX Design",
      image: "https://res.cloudinary.com/drno4r3vd/image/upload/v1742796253/Desktop_-_1_kzfb4l.png",
    },
    {
      title: "Instagram Clone",
      description:
        "Designed a sleek Instagram clone in Figma, replicating key features like login, feed, and profile.",
      techStack: ["Figma"],
      link: "https://www.figma.com/design/QERB3XKPXF4HkA5r5CJIrJ/Untitled?node-id=0-1&t=bFADzjb26rYqy6OH-1",
      category: "UI/UX Design",
      image: "https://res.cloudinary.com/drno4r3vd/image/upload/v1742796747/Screenshot_2025-03-24_114032_qpdpqe.png",
    },
  ];

  const techIcons = {
    React: <FaReact className="text-blue-400" />,
    HTML: <FaHtml5 className="text-orange-500" />,
    CSS: <FaCss3Alt className="text-blue-500" />,
    "Node.js": <FaNodeJs className="text-green-500" />,
    MongoDB: <SiMongodb className="text-green-400" />,
    Express: <SiExpress className="text-gray-400" />,
  };

  const categories = [
    "All",
    "Frontend Development",
    "UI/UX Design",
    "Full Stack Development",
  ];

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section
      id="projects"
      className="min-h-screen flex items-center justify-center py-20"
    >
      <RevealOnScroll>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
  <h2 className="text-3xl font-bold mb-8 text-center bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent">
            Featured Projects
          </h2>

          {/* Category Filters */}
  <div className="flex justify-center flex-wrap gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedCategory === category
                    ? "bg-blue-500 text-white shadow-[0_2px_8px_rgba(59,130,246,0.3)]"
                    : "bg-white/5 text-gray-400 hover:bg-white/10"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-2">
            {filteredProjects.length > 0 ? (
              filteredProjects.map((project, index) => (
                <div
                  key={index}
                  className="p-4 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all bg-white/5 backdrop-blur-sm"
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  {/* Project Image or Video */}
                  <div className="mb-4 overflow-hidden rounded-lg">
                    {hoveredIndex === index && project.video ? (
                      <video
                        src={project.video}
                        autoPlay
                        muted
                        loop
                        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105 rounded-lg"
                      />
                    ) : (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-64 object-cover transition-transform duration-300 hover:scale-105 rounded-lg"
                      />
                    )}
                  </div>

                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-400 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.techStack.map((tech, i) => (
                      <span
                        key={i}
                        className="flex items-center gap-2 bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow-[0_2px_8px_rgba(59,130,246,0.1)] transition-all"
                      >
                        {techIcons[tech]} {tech}
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
              ))
            ) : (
              <p className="text-gray-400 text-center col-span-full">
                No projects found in this category yet.
              </p>
            )}
          </div>
        </div>
      </RevealOnScroll>
    </section>
  );
};
