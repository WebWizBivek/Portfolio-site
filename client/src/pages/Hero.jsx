import React from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const handleType = (count) => {
    console.log(count); // word count
  };

  const handleDone = () => {
    console.log(`Done after 5 loops!`);
  };

  return (
    <div className="App h-screen flex items-center justify-center">
      <div>
        <h1 className="text-4xl md:text-6xl font-bold text-center">
          Hi , I am Bivek Singha
        </h1>
        <span style={{ color: "red", fontWeight: "bold" }}></span>
        <div>
          {" "}
          <h1 className="text-5xl font-semibold text-[#6E07F3]-400">
            {" "}
            <Typewriter
              words={[
                "Full-Stack Developer",
                "MERN Stack Enthusiast",
                "Creative Coder",
              ]}
              loop={true}
              cursor
              cursorStyle="|"
              typeSpeed={80}
              deleteSpeed={50}
              delaySpeed={1500}
            />
          </h1>
        </div>
      </div>
      <div>
        <img
          src="https://thumbs.dreamstime.com/b/cartoon-character-programmer-working-desk-d-rendered-seated-laptop-computer-378303757.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Hero;
