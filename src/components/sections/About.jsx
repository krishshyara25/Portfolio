import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGit } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFigma, SiVite } from "react-icons/si";

export const About = () => {
  const skills = [
    { name: "React", icon: <FaReact className="text-blue-400 text-2xl" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
    { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-2xl" /> },
    { name: "Express", icon: <SiExpress className="text-gray-400 text-2xl" /> },
    { name: "Git", icon: <FaGit className="text-red-500 text-2xl" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500 text-2xl" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500 text-2xl" /> },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <motion.div 
          className="max-w-3xl mx-auto px-4"
          initial={{ opacity: 0, y: 50 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 1 }}
        >
          <motion.h2 
            className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            About Me
          </motion.h2>

          <motion.p 
            className="text-gray-300 mb-6 text-center"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
          >
            👋 Hi, I'm Krish Shyara, a passionate Full Stack Web Developer with a knack for building dynamic, user-friendly, and responsive websites...
          </motion.p>

          <div className="grid grid-cols-3 md:grid-cols-4 gap-6 mt-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                className="flex flex-col items-center p-4 border border-white/10 rounded-xl bg-white/10 shadow-md"
                whileHover={{ scale: 1.1, boxShadow: "0px 0px 10px rgba(0, 255, 255, 0.5)" }}
                transition={{ type: "spring", stiffness: 200 }}
              >
                {skill.icon}
                <span className="text-sm text-gray-300 mt-2">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};
