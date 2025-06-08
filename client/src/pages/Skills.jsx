import React from "react";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP); // re
const skills = [
  { name: "HTML", image: "html.png" },
  { name: "CSS", image: "css.png" },
  //   { name: "JavaScript", image: "js.png" },
  { name: "React", image: "/skills/react.png" },
  { name: "Node.js", image: "/skills/node.png" },
  { name: "MongoDB", image: "/skills/mongodb.png" },
  { name: "Tailwind CSS", image: "tailwind.png" },
  { name: "Git", image: "/skills/git.png" },
  // Add more skills as needed
];

const SkillsPage = () => {
  return (
    <div className="bg-red-500 h-screen w-screen">
      <h1>SKILLS</h1>
    </div>
  );
};

export default SkillsPage;
