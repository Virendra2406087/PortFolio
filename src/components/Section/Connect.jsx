import React from "react";
import ContactForm from "../../ui/ContactForm";
import { HugeiconsIcon } from "@hugeicons/react";
import { GithubIcon, Linkedin02Icon, Mail01Icon } from "@hugeicons/core-free-icons";

function Connect() {
  return (
    <section
    id="connect"
    className="w-full bg-white px-2 py-10 dark:bg-gray-600">
      <div
      className='w-[90%] lg:w-[80%] grid grid-cols-1 gap-12 mx-auto '
      >

      <h1
      className='bg-gradient-to-bl md:text-center from-violet-500 via-pink-500 to-violet-500 bg-clip-text text-transparent text-4xl text-center font-bold'
      >Connect with Me</h1>
      <div className='md:grid-cols-2 grid grid-cols-1 gap-7 lg:gap-12 justify-center items-center'>
        <div
        className='shadow-xl/20 border-t-2  dark:border-none border-gray-100 px-6 lg:px-10 py-7 md:py-10 lg:py-12 grid grid-cols-1 bg-white gap-8 rounded-lg dark:bg-gray-800'
        >
          <h1 className='dark:text-gray-300 text-gray-700 text-3xl font-semibold'>Want to Build ?</h1>
          <p
            className="text-justify text-gray-700 font-sans dark:text-gray-300 md:text-md lg:text-lg"
          >
            Have an idea, a project, or an opportunity in mind? I’d love to hear about
            it. Whether you’re looking to collaborate, discuss technology, or simply
            connect, feel free to reach out. I’m always open to meaningful conversations
            and exciting ideas. Let’s create something impactful together.
          </p>

          <div className='grid grid-cols-1 gap-6'>
            <div
            className='flex flex-row gap-5 items-center'
            >
              <div
              className='bg-gray-500 px-2 py-2 rounded-lg flex justify-center items-center'
              >
                <HugeiconsIcon icon={GithubIcon} color='white' strokeWidth={2}/>
              </div>
              <a 
              target="_blank"
              className='text-gray-900 text-[16px] lg:text-lg dark:text-gray-200'
              href="https://github.com/Virendra2406087">
              github.com/Virendra2406087
              </a>
            </div>

            <div className='flex flex-row gap-5 items-center'>
              <div className='bg-gray-500 px-2 py-2 rounded-lg flex justify-center items-center'>
                <HugeiconsIcon icon={Linkedin02Icon} color='white' strokeWidth={2}/>
              </div>
              <a
                target="_blank"
                className='text-gray-900 text-[16px] lg:text-lg dark:text-gray-200'
                href="https://www.linkedin.com/in/virendra-kumar-1bb615325/"
              >
                linkedin.com/in/virendra-kumar-1bb615325/
              </a>
            </div>
            <div className='flex flex-row gap-5 items-center'>
              <div className='justify-center items-center flex bg-gray-500 px-2 py-2 rounded-lg'>
                <HugeiconsIcon icon={Mail01Icon} color='white' strokeWidth={2}/>
              </div>
              <p
              className='text-gray-900 text-[16px] lg:text-lg dark:text-gray-200'
              >
                virendrakumar993177@gmail.com
              </p>
            </div>
          </div>
        </div>
        <div>
          <ContactForm/>
        </div>
      </div>
      </div>
    </section>
  );
}

export default Connect;
