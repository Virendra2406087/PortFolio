import React from "react";
import { ExternalLink, GithubIcon  } from "lucide-react";
import githubProjects from "../../ui/githubProjects.js";

function Projects() {
  const projects = githubProjects; // imported the object

  return (
    <>
      <section
        id="projects"
        className="w-full py-12 px-5 bg-gradient-to-br from-purple-100 to-purple-300 dark:from-gray-700 dark:to-gray-800 flex flex-col gap-10"
      >
        <h1 className=" text-center bg-gradient-to-bl md:text-center from-violet-500 via-pink-500 to-violet-500 bg-clip-text text-transparent text-5xl font-bold">
          Projects
        </h1>
        <p className="text-center text-violet-500 dark:text-gray-200 md:text-lg w-[80%] mx-auto">
          A collection of real-world projects showcasing my skills, creativity,
          and problem-solving abilities. Each project reflects my commitment to
          clean code, user-centric design, and impactful solutions.
        </p>

        {/* project div */}
        <div className="md:w-[80%] w-[90%] mx-auto grid lg:grid-cols-2 grid-cols-1 gap-10 my-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="rounded-2xl shadow-xl/10 bg-purple-500/60 dark:bg-gray-900 flex flex-col gap-5 pb-15"
            >
              {/* IMAGE DIV WITH HOVER REVEAL FEATURE */}
              <div className="w-full h-70 mx-auto relative group overflow-hidden rounded-t-2xl">
                <img
                  src={project.image}
                  className="w-full h-full object-cover group-hover:scale-[1.02]"
                />

                {/* Content reveal on hover*/}
                <div className="absolute inset-0 bg-white/10 backdrop-blur-[2px] rounded-t-2xl flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition duration-300">
                  <a 
                  target='_blank'
                  href={project.deploymentLink}>
                    <ExternalLink color="white" strokeWidth={2} size={28} />
                  </a>
                  <a 
                  target="_blank"
                  href={project.githubUrl}>
                    <GithubIcon color="white" size={28} />
                  </a>
                </div>
              </div>

              <div className="w-[90%] mx-auto flex flex-col gap-6">
                {/* heading */}
                <div>
                  <h1 className="text-3xl font-semibold text-white dark:text-purple-500">
                    {project.name}
                  </h1>
                </div>

                <div className="flex gap-3 flex-wrap">
                  {/* tag divs */}
                  {project.techStack.map((tech, index) => (
                    <div
                      key={index}
                      className="px-3 py-1 text-sm rounded-full bg-purple-950/40 dark:bg-purple-800/20 text-gray-200 dark:text-purple-300 border border-gray-200/60 dark:border-purple-500/40 shadow-sm hover:scale-105 transition transform duration-200"
                    >
                      {tech}
                    </div>
                  ))}
                </div>

                {/* description div */}
                <p className="dark:text-gray-300 text-purple-950">
                  {project.description}
                </p>

                {/* project url ang github for mobile view */}
                <div className='flex justify-end md:hidden px-5'>
                <div className='flex gap-5'>
                <a 
                  target='_blank'
                  href={project.deploymentLink}>
                    <ExternalLink color="white" strokeWidth={2} size={28} />
                  </a>
                  <a 
                  target="_blank"
                  href={project.githubUrl}>
                    <GithubIcon color="white" size={28} />
                  </a>
                </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center flex-row">
          <h1 className="text-xl font-semibold lg:text-2xl text-center dark:text-gray-300 text-gray-900">
            Explore more of my works on{" "}
            <a
              className="inline-flex gap-1 text-purple-800 dark:text-purple-400 font-semibold hover:scale-[1.02] transition-all duration-300 items-center"
              href="https://github.com/Virendra2406087"
              target="_blank"
              rel="noopener noreferrer"
            >
              Github <GithubIcon  />
            </a>
          </h1>
        </div>
      </section>
    </>
  );
}

export default Projects;
