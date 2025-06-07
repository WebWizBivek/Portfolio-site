import React from "react";

const projects = [
  {
    title: "E-Commerce Website",
    description:
      "Full-stack MERN e-commerce app with user auth, admin dashboard, and Razorpay integration.",
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    link: "https://your-ecommerce-link.com",
  },
  {
    title: "Chat App",
    description:
      "Real-time chat application with private messaging and file sharing.",
    techStack: ["React", "Socket.io", "MongoDB", "Tailwind CSS"],
    link: "https://your-chatapp-link.com",
  },
  {
    title: "Online Exam Portal",
    description:
      "Developed during college to support remote exams with timer and live result generation.",
    techStack: ["React", "Firebase", "Tailwind"],
    link: "#",
  },
  {
    title: "Smart Home Dashboard UI",
    description:
      "Interactive dashboard showing temperature, control cards, and energy graphs.",
    techStack: ["React", "Tailwind CSS", "Chart.js"],
    link: "#",
  },
];

const Projects = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 border-b-2 border-pink-500 inline-block">
          Projects
        </h2>
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-pink-500/50 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-pink-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.techStack.map((tech, i) => (
                  <span
                    key={i}
                    className="bg-pink-500 text-xs px-2 py-1 rounded-full text-white"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-pink-300 hover:text-white transition"
                >
                  🔗 View Project
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
