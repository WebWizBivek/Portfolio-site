import { useState } from "react";
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
function App() {
  const [loading, setLoading] = useState(true);
  const handleLoadingComplete = () => {
    setLoading(false);
  };
  return (
    <>
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
        <Footer />
      </div>
    </>
  );
}

export default App;
