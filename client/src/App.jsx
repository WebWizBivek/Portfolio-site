import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Header from "./components/Header";
import Contact from "./pages/Contact";
import Hero from "./pages/Hero";
import PortfolioLoader from "./components/Loading";
import Footer from "./components/Footer";
import AboutMe from "./pages/About";
import ContactPage from "./pages/Contact";
import SkillsPage from "./pages/Skills";
import Education from "./pages/Education";
import Projects from "./pages/Projects";
import Gsap from "./Gsap";
import gsap from "gsap";

import { useGSAP } from "@gsap/react";
function App() {
  const [loading, setLoading] = useState(true);
  const handleLoadingComplete = () => {
    setLoading(false);
  };
  const cursorRef = useRef(null);

  useGSAP(() => {
    const cursor = cursorRef.current;

    // Example of using gsap to animate the cursor
    const handleMouseMove = (event) => {
      gsap.to(cursor, {
        x: event.clientX,
        y: event.clientY,
        duration: 0.3,
        ease: "power1.out",
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
  // console.log(window);

  return (
    <>
      <div
        ref={cursorRef}
        className="cursor bg-pink-500 w-[100px] h-[100px] opacity-30 rounded-full fixed pointer-events-none z-50"
      ></div>
      <div
        className="  font-Oswald
h-screen"
      >
        <Header />
        <Hero />
        <AboutMe />
        <Education />
        <SkillsPage />
        <Projects />
        <ContactPage />
        <Gsap />

        <Footer />
      </div>
    </>
  );
}

export default App;
