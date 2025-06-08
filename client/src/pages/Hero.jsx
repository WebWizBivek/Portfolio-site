import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  return (
    <>
      <section className="h-screen w-full bg-white flex flex-col-reverse md:flex-row items-center justify-center px-6 md:px-16 gap-10">
        {/* Left Content */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-6 max-w-xl">
          <h1 className="text-4xl md:text-6xl font-bold font-poppin leading-tight">
            Hi, I am <span className="text-red-500">Bivek Singha</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-bold font-bivek ">
            <Typewriter
              words={[
                "Full-Stack Developer",
                "Building Scalable Web Apps",
                "Creative Coder",
                "Adaptable Problem Solver",
                "Tech Enthusiast",
              ]}
              loop
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h2>
          <p className="text-sm md:text-xl font-bold  text-gray-700">
            I design and code beautifully simple things, and I love what I do.
          </p>
        </div>

        {/* Right Image */}
        <div className="w-60 md:w-80">
          <img
            src="https://thumbs.dreamstime.com/b/cartoon-character-programmer-working-desk-d-rendered-seated-laptop-computer-378303757.jpg"
            alt="Programmer"
            className="w-full h-auto rounded-xl shadow-lg"
          />
        </div>
      </section>
      <div className="flex justify-center items-center">
        <img src="devices.svg" alt="" className="w-[50%]" />
      </div>
    </>
  );
};

export default Hero;
