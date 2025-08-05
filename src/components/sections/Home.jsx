import { RevealOnScroll } from "../RevealOnScroll";
import krishImage from "../../assets/krish.jpg"; // Correct relative path

export const Home = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 md:px-16 bg-black"
    >
      <RevealOnScroll>
        <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">
          
          {/* Left side – Text */}
          <div className="text-center md:text-left md:w-1/2 z-10">
            <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent leading-tight">
              Hi, I'm Krish Shyara
            </h1>
            <p className="text-gray-400 text-lg mb-8 max-w-md mx-auto md:mx-0">
              I’m a full-stack developer who loves crafting clean, scalable web
              applications. My goal is to build solutions that offer both
              exceptional performance and a delightful user experience.
            </p>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="#projects"
                className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="border border-blue-500/50 text-blue-500 py-3 px-6 rounded font-medium transition-all duration-200 
               hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/10"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Right side – Image */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src={krishImage}
              alt="Krish Shyara"
              className="rounded-2xl shadow-lg w-64 h-80 object-cover border border-gray-700"
            />
          </div>

        </div>
      </RevealOnScroll>
    </section>
  );
};
