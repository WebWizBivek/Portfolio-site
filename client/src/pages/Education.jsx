import React from "react";

const Education = () => {
  const educationData = [
    {
      degree: "Master of Business Administration (MBA)",
      institution: "XYZ University",
      year: "2021 - 2023",
      img: "xeotec.png",
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
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold mb-16 text-center border-b-2 border-pink-500 inline-block">
          What i have done so Far
        </h2>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-pink-500"></div>

          {/* Timeline items */}
          <div className="space-y-20">
            {educationData.map((edu, index) => {
              const isLeft = index % 2 === 0;

              return (
                <div
                  key={index}
                  className={`relative flex items-center w-full ${
                    isLeft ? "justify-start" : "justify-end"
                  }`}
                >
                  <div className="w-1/2 px-4">
                    <div
                      className={`bg-gray-800 p-6 rounded-xl shadow-lg transition-all duration-300 hover:shadow-pink-500 ${
                        isLeft ? "ml-auto" : "mr-auto"
                      }`}
                    >
                      <div className="text-pink-400 text-xl font-semibold">
                        {edu.degree}
                      </div>
                      <img
                        src={edu.img}
                        alt={edu.degree}
                        className="w-16 mt-2"
                      />
                      <div className="text-lg">{edu.institution}</div>
                      <div className="text-sm italic text-gray-400">
                        {edu.year}
                      </div>
                      <div className="mt-2 text-gray-300">
                        {edu.description}
                      </div>
                    </div>
                  </div>

                  {/* Dot on the center line */}
                  <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-pink-500 rounded-full border-4 border-white z-10"></div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
