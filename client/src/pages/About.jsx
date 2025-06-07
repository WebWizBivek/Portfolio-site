import React from "react";

const AboutMe = () => {
  return (
    <section
      id="about"
      className="bg-gray-100 dark:bg-gray-900 h-[80vh]  py-16 px-4 sm:px-8"
    >
      {/* <img src="bg.png" alt="" /> */}
      <div className="max-w-4xl relative left-[10%]">
        {" "}
        <h2 className="text-7xl font-extrabold text-gray-800 font-bivek  dark:text-white mb-6">
          About Me
        </h2>
        <p className="text-lg text-gray-600 font-bivek relative left-12 dark:text-gray-300 leading-relaxed">
          Hi! I’m{" "}
          <span className="font-semibold text-indigo-600 dark:text-indigo-400">
            Bivek Singha
          </span>
          , a passionate full-stack developer with a strong foundation in the
          MERN stack and experience in building scalable web applications.
          Currently working at Xeotec E-Services Private Limited, I specialize
          in building seamless user experiences and efficient backend services.
          I love learning new technologies, solving real-world problems, and
          turning ideas into code.
        </p>
        <p className="mt-4 text-lg text-gray-600 relative left-12 dark:text-gray-300 leading-relaxed">
          With a background in both development and DevOps, I’ve worked on
          everything from integrating external APIs like Bharat Connect to
          deploying real-time applications. Whether it’s building a portfolio, a
          CRM, or a smart home dashboard, I strive to deliver clean,
          maintainable code and intuitive UI designs.
        </p>
      </div>
    </section>
  );
};

export default AboutMe;
