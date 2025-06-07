import React from "react";

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
    <section className="min-h-screen bg-gray-900 text-white px-4 py-16">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">My Skills</h2>
        <p className="text-gray-400 mb-12">
          These are the technologies I’ve worked with so far.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-gray-800 p-4 rounded-xl shadow-md hover:shadow-blue-500/40 transition duration-300"
            >
              <img
                src={skill.image}
                alt={skill.name}
                className="w-16 h-16 mx-auto mb-4"
              />
              <p className="text-lg font-semibold">{skill.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsPage;
