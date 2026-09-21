import React from "react";
import { Agreement02Icon, Files01Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react";

function About() {
  return (
    <>
      <section 
      id='about'
      className='py-20 px-4 dark:bg-gray-900 bg-white text-black dark:text-white w-full min-h-screen flex items-center'
      >
        <div className='w-[90%] mx-auto grid grid-cols-1 md:grid-cols-2 gap-10'>
          {/* Profile Photo */}
          <div className='flex flex-row justify-center items-center'>
            <img
            src='/assets/pp.png'
            className="w-[50%] md:w-[70%]"
            />
          </div>

          {/* About Section */}
          <div className='flex flex-col gap-5'>
            <h1 className='bg-gradient-to-bl from-violet-500 via-pink-500 to-violet-500 bg-clip-text text-transparent text-5xl font-bold'>About Me</h1>
            <div className='flex flex-col gap-8 justify-center items-center'>
              <p>
                Hey 👋, I’m{" "}
                <b className="text-2xl text-violet-500">Virendra Kumar</b>, a Computer Science undergraduate at{" "}
                <b>National Institute of Technology, Patna</b> who enjoys turning ideas into real products with code.
              </p>

              <p>
                I love building{" "}
                <b className="text-lg font-semibold">full-stack web applications</b>,exploring new technologies, and solving challenging problems. Whether I'm designing a clean interface, debugging a tricky issue, or working through a complex algorithm, I enjoy finding better ways to make things work.
              </p>

              <p>
                I’m constantly learning, experimenting, and pushing myself to become a better developer. For me, every project is another opportunity to learn something new and build something meaningful.
              </p>

              <p className="text-center">
                <i className="bg-gradient-to-br from-pink-400 via-purple-500 to-pink-400 bg-clip-text text-transparent font-semibold">
                 "Code. Solve. Build. Learn. Repeat."
                 </i>
              </p>
              <div className='flex gap-5 items-center'>
              <a
                href='#connect'
                className='flex gap-3 bg-purple-500 text-white px-4 py-2 text-center rounded-lg hover:opacity-70 duration-500'
              ><HugeiconsIcon 
              icon={Agreement02Icon}
              color="white"
              strokeWidth={2} />
                Connect</a>
              <a
              href='#projects'
              className='flex gap-3 text-purple-500 border-3 border-purple-600 bg-transparent text-center px-2 py-1.5 rounded-lg hover:bg-purple-500 hover:text-white hover:border-none hover:py-2 duration-500 transition-all ease-in-out'>
                <HugeiconsIcon icon={Files01Icon} strokeWidth={2}/>
               Projects
              </a>
              </div>
              
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
