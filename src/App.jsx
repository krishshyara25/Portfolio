import { useState } from "react";
import { useEffect, useRef } from "react";
import "./App.css";
import { LoadingScreen } from "./components/LoadingScreen";
import { Navbar } from "./components/Navbar";
import { MobileMenu } from "./components/MobileMenu";
import { Home } from "./components/sections/Home";
import { About } from "./components/sections/About";
import { Projects } from "./components/sections/Projects";
import "./index.css";
import { Contact } from "./components/sections/Contact";

function App() {
  const [isContentLoaded, setContentLoaded] = useState(false);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const iframeRef = useRef(null);

  useEffect(() => {
    const iframe = iframeRef.current;

    if (iframe) {
      window.addEventListener("message", (event) => {
        if (event.data === "play") {
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"playVideo","args":""}',
            "*"
          );
        }
        if (event.data === "pause") {
          iframe.contentWindow.postMessage(
            '{"event":"command","func":"pauseVideo","args":""}',
            "*"
          );
        }
      });
    }

    return () => {
      window.removeEventListener("message", () => { });
    };
  }, []);

  return (
    <>
      {!isContentLoaded && (
        <LoadingScreen onComplete={() => setContentLoaded(true)} />
      )}
      <div
        className={`min-h-screen transition-opacity duration-700 ${isContentLoaded ? "opacity-100" : "opacity-0"
          } bg-black text-gray-100`}
      >
        <Navbar menuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <section className="my-16 text-center">
          <h2 className="text-3xl font-bold mb-6">Project Showcase</h2>
          <div className="max-w-7xl mx-auto">
            <iframe
              width="100%"
              height="600"
              src="https://www.youtube.com/embed/t9ce_9I34D0?autoplay=1&loop=1&playlist=t9ce_9I34D0&enablejsapi=1"
              title="Arcade Array Showcase"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              className="rounded-lg shadow-lg border border-gray-800"
            ></iframe>
            <p className="mt-4 text-lg">
              This is a demo of my latest project <strong>Arcade Array</strong>, featuring game store functionality with online payments.
            </p>
          </div>
        </section>


        <Contact />
        <footer className="text-center mt-8">Portfolio by Krish Shyara</footer>
      </div>
    </>
  );
}

export default App;
