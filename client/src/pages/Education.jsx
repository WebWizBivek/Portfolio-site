import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "XYZ University",
      year: "2021 - 2023",
      img: "astu.png",
      description:
        "Specialized in Human Resource Management and Business Analytics.",
    },
    {
      degree: "Bachelor of Technology (B.Tech) in Computer Science",
      institution: "ABC Institute of Technology",
      year: "2017 - 2021",
      img: "astu.png",

      description:
        "Focused on software engineering, data structures, and web development.",
    },
    {
      degree: "Higher Secondary (12th Grade)",
      institution: "DEF Senior Secondary School",
      year: "2015 - 2017",
      img: "aps.png",

      description: "Studied Physics, Chemistry, and Mathematics.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold mb-10 border-b-2 border-pink-500 inline-block">
          Education
        </h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-pink-500 transition-all duration-300"
            >
              <h3 className="text-2xl font-semibold text-pink-400">
                {edu.degree}
              </h3>
              <img src={edu.img} alt="" />
              <p className="text-lg">{edu.institution}</p>
              <p className="text-sm text-gray-400 italic">{edu.year}</p>
              <p className="mt-2 text-gray-300">{edu.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;
