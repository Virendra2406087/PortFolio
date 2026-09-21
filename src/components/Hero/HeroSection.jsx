import React from "react";
import { HugeiconsIcon } from "@hugeicons/react";
import {
  Mail01Icon,
  Home09Icon,
  Files01Icon,
  SourceCodeIcon,
} from "@hugeicons/core-free-icons";
import Typewriter from "typewriter-effect";
import SocialIcon from "../../ui/SocialIcon";

function HeroSection() {
  return (
    <>
      <div className="w-full min-h-screen flex px-6 py-10 mt-10 overflow-auto mx-auto">
        <div className="flex justify-center items-center mx-auto">
          <div className="flex flex-col justify-center items-center w-[80%] md:w-full gap-4">
            <div className="flex flex-col gap-5">
              <h1 className="dark:text-white text-4xl text-gray-900 text-center flex flex-wrap gap-2 justify-center">
                {" "}
                I'm{" "}
                <span className="text-5xl bg-gradient-to-r from-[#4b53c5] via-[#5e28b4] to-[#6A20E0] bg-clip-text text-transparent text-center font-bold max-w-max">
                  Virendra Kumar
                </span>{" "}
              </h1>

              <h2
                className=" font-bold text-2xl md:text-3xl
              min-h-[2rem] text-center"
              >
                <span className="bg-gradient-to-r from-pink-400 via-purple-600 to-pink-500 bg-clip-text text-transparent inline-block">
                  <Typewriter
                    options={{
                      strings: [
                        "MERN Stack Developer",
                        "DSA enthusiast",
                        "Open Source Contributor",
                        "Problem Solver",
                        "Creative Thinker",
                        "Quick Learner",
                      ],
                      cursor: "|",
                      delay: 75,
                      deleteSpeed: 50,
                      loop: true,
                      autoStart: true,
                    }}
                  />
                </span>
              </h2>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center ">
              <p className="flex gap-3 dark:text-white text-black  text-[16px]">
                <HugeiconsIcon
                  icon={Mail01Icon}
                  color="#3DB4F8"
                  strokeWidth={2}
                />{" "}
                virendrakumar993177@gmail.com
              </p>
              <p className="dark:text-white flex gap-3 text-black text-[16px]">
                <HugeiconsIcon
                  icon={Home09Icon}
                  strokeWidth={2}
                  color="#3DB4F8"
                />
                Jamui, Bihar, India{" "}
              </p>
              <p></p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 py-2 md:gap-6">
              <a
              href="https://drive.google.com/file/d/1WE73TPtLttGbCevTr_3EKTvcuwlkNUQE/view?usp=sharing"
                className="rounded-lg bg-purple-500 px-2 py-2 text-white flex gap-2
              hover:opacity-80"
              >
                <HugeiconsIcon icon={Files01Icon} />
                View Resume
              </a>

              <a 
              href="#projects"
              className="rounded-lg bg-purple-500 px-2 py-2 text-white flex gap-2 hover:opacity-80"
              >
                <HugeiconsIcon icon={SourceCodeIcon} />
               Explore Projects
              </a>
            </div>
            <SocialIcon/>
          </div>
        </div>
      </div>
    </>
  );
}

export default HeroSection;
