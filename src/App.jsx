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
import { Showcase } from "./components/sections/Showcase";

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
        <Showcase/>
        <Projects />
        <Contact />
        <footer className="text-center mt-8">Portfolio by Krish Shyara</footer>
      </div>
    </>
  );
}

export default App;
