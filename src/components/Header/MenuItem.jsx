import React from 'react'
import { MoveRight } from 'lucide-react';

function MenuItem() {

    const menuContents = [
        {label: "Home", href: '#home'},
        {label: "About", href: '#about'},
        {label: "Skills", href: '#skills'},
        {label: "Education", href: '#education'},
        {label: "Projects", href: '#projects'},
        {label: "DSA", href: '#dsa'},
      ];
  return (
    <div className='translate-x-2 dark:bg-gray-600 bg-blue-100 rounded-lg shadow-xl py-6 grid grid-cols-1 gap-2'>
        <div className='grid grid-cols-1 gap-2 justify-center items-center'>
          { menuContents.map((menu, index) => (
            <span className='text-center'>
            <a
            key={index}
            href={menu.href}
            className='hover:border-b-[3px] text-center px-2 py-1 transition-all duration-200 dark:text-gray-300 text-gray-900 hover:border-violet-600 hover:text-purple-600 rounded-t-full'
            >
                {menu.label}
            </a>
            </span>
          ))
          }
          
        </div>  
        <span className='text-center'>
          <a
          href='#connect'
          className="w-[80%] mx-auto flex-nowrap bg-gradient-to-br from-pink-500 to-violet-600 text-white text-md outline-none
          hover:scale-x-95 duration-200 ease-in-out flex flex-row gap-2 justify-center items-center px-2 py-1 rounded-lg"
              >
                Let's Connect <MoveRight />
        </a>
        </span>
    </div>

  )
}

export default MenuItem