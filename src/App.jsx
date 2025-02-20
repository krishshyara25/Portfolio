import { useState } from "react";
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

  return (
    <>
      {!isContentLoaded && (
        <LoadingScreen onComplete={() => setContentLoaded(true)} />
      )}
      <div
        className={`min-h-screen transition-opacity duration-700 ${
          isContentLoaded ? "opacity-100" : "opacity-0"
        } bg-black text-gray-100`}
      >
        <Navbar menuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <MobileMenu menuOpen={isMenuOpen} setMenuOpen={setMenuOpen} />
        <Home />
        <About />
        <Projects />
        <Contact />
        <footer className="text-center mt-8">Portfolio by Krish Shyara</footer>
      </div>
    </>
  );
}

export default App;
