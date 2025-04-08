import { motion } from "framer-motion";
import { RevealOnScroll } from "../RevealOnScroll";
import { FaReact, FaHtml5, FaCss3Alt, FaNodeJs, FaGit } from "react-icons/fa";
import { SiMongodb, SiExpress, SiFigma, SiVite, SiGithub, SiC, SiCplusplus } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const About = () => {
  const skills = [
    { name: "MongoDB", icon: <SiMongodb className="text-green-400 text-2xl" /> },
    { name: "Express", icon: <SiExpress className="text-gray-400 text-2xl" /> },
    { name: "React", icon: <FaReact className="text-blue-400 text-2xl" /> },
    { name: "Node.js", icon: <FaNodeJs className="text-green-500 text-2xl" /> },
    { name: "HTML", icon: <FaHtml5 className="text-orange-500 text-2xl" /> },
    { name: "CSS", icon: <FaCss3Alt className="text-blue-500 text-2xl" /> },
    { name: "Git", icon: <FaGit className="text-red-500 text-2xl" /> },
    { name: "Vite", icon: <SiVite className="text-purple-500 text-2xl" /> },
    { name: "Figma", icon: <SiFigma className="text-pink-500 text-2xl" /> },
    { name: "Github", icon: <SiGithub className="text-grey-500 text-2xl" /> },
    { name: "VScode", icon: <VscVscode className="text-blue-500 text-2xl" /> },
    { name: "C", icon: <SiC className="text-orange-500 text-2xl" /> },
    { name: "C++", icon: <SiCplusplus className="text-purple-500 text-2xl" /> },
  ];

  const education = [
    {
      level: "BTech in Computer Science",
      institution: "Rai University X Coding Gita",
      year: "2024 - Present",
      details: "Currently pursuing a BTech in Computer Science, focusing on software development, algorithms, and web technologies.",
    },
    {
      level: "12th Standard (GSEB)",
      institution: "P.P Savani Cheitanya Vidhya Sankul",
      year: "2024",
      details: "Completed Science stream (PCM with Computer Science).",
    },
  ];

  return (
    <section id="about" className="min-h-screen flex items-center justify-center py-20">
      <RevealOnScroll>
        <motion.div 
          className="max-w-4xl mx-auto px-4"
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

          {/* Skills Section */}
          <motion.h3 
            className="text-2xl font-semibold mb-4 text-gray-100 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.7 }}
          >
            Skills
          </motion.h3>
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

          {/* Education Section */}
          <motion.h3 
            className="text-2xl font-semibold mb-4 mt-12 text-gray-100 text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.9 }}
          >
            Education
          </motion.h3>
          <div className="space-y-6">
            {education.map((edu, index) => (
              <motion.div
                key={index}
                className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:border-blue-500/30 hover:shadow-[0_4px_20px_rgba(59,130,246,0.1)] transition-all"
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 1 + index * 0.2 }}
              >
                <h4 className="text-xl font-bold text-gray-100">{edu.level}</h4>
                <p className="text-gray-400 text-sm mt-1">{edu.institution}</p>
                <p className="text-gray-400 text-sm">{edu.year}</p>
                <p className="text-gray-300 mt-2">{edu.details}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </RevealOnScroll>
    </section>
  );
};