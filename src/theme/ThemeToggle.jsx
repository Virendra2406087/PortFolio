import React from 'react'
import {Moon, SunMedium} from 'lucide-react'
import { useTheme } from '../customProps/useTheme'

function ThemeToggle() {

  const [theme, themeToggle] = useTheme();
  return (
    <>
    <div>
        <button
        className='bg-neutral-300 dark:bg-gray-600 border-none rounded-lg outline-none justify-center items-center px-1.5 py-1.5'
        onClick={themeToggle}
        aria-label="Toggle theme"
        >
           {/*Dark theme */}
           {theme ? <SunMedium className='text-orange-600 w-6 h-6 transform duration-200 ease-in-out active:rotate-360'
           /> : <Moon className='text-blue-500 w-6 h-6 transform duration-200 ease-in-out active:rotate-360'/>}

        </button>
    </div>
    </>
  )
}

export default ThemeToggle