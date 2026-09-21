import React from "react";
import { GraduationCap,Award } from "lucide-react";

function Education() {
  const educationInfo = [
    {
      year: "2024 - 2028",
      institute: "National Institute of Technology, Patna",
      degree: "B.Tech in Computer Science and Engineering",
      grade: "6.9/10",
    },
    {
      year: "2021 - 2023",
      institute: "S.K. College Lohanda, Jamui, Bihar",
      degree: "Higher Secondary School Certificate",
      grade: "88.4%",
    },
    {
      year: "2020 - 2021",
      institute: "J.S.P.S High School Lachhuar, Jamui, Bihar",
      degree: "Secondary School Certificate",
      grade: "89.2%",
    },
  ];

  return (
    <section
      id="education"
      className="[clip-path:polygon(80%_0,100%_4%,100%_100%,1%_100%,0_3%)]
      dark:[clip-path:none] transition-all duration-300
      px-2 pt-12 py-12 w-full dark:bg-gray-800 dark:text-white
      bg-purple-100 min-h-screen"
    >
      <div className="w-[90%] mx-auto flex flex-col gap-8">
        <div className="flex flex-col gap-6">
          <h1 className="bg-gradient-to-bl md:text-center from-violet-500 via-pink-500 to-violet-500 bg-clip-text text-transparent text-5xl font-bold">
            Education
          </h1>

          <p className="text-center text-violet-500 dark:text-gray-300 md:text-lg">
            My continuous pursuit of education highlights my perseverance and
            knack for mastering new skills efficiently.
          </p>
        </div>

        <div className="w-[90%] md:w-[80%] mx-auto py-5">
          <div className="flex flex-row gap-x-12">
            {/* Education Info Cards */}
            <div className="flex flex-col gap-8 py-2 w-full">
              {educationInfo.map((education, index) => (
                <div
                  key={index}
                  className="flex flex-col gap-3 bg-purple-200 dark:bg-gray-700 px-4 py-5 md:p-6 rounded-lg border border-transparent hover:border-violet-700 hover:dark:border-violet-400 hover:-translate-y-1.5 transition-all duration-400 ease-linear"
                >
                  <p className="flex flex-row gap-2 bg-purple-500 text-white max-w-max items-center justify-center rounded-xl px-3 py-2 font-semibold">
                    <GraduationCap
                      color="white"
                      strokeWidth={2}
                    />
                    {education.year}
                  </p>

                  <p className="md:text-2xl text-lg font-semibold text-gray-800 dark:text-white">
                    {education.degree}
                  </p>

                  <p className="md:text-lg text-md dark:text-purple-400 text-purple-600 font-medium">
                    {education.institute}
                  </p>

                  <p className="flex items-center gap-2 dark:text-white text-black">
                    <Award strokeWidth={2} />
                    {`Grade: ${education.grade}`}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Education;