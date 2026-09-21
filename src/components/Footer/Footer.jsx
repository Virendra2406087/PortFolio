import React from 'react'
import { ArrowUp } from 'lucide-react';
import SocialIcon from '../../ui/SocialIcon';

function Footer() {
  return (
    <footer
    className='w-full bg-gray-900 px-2 py-5 grid grid-cols-1 gap-4 justify-center items-center mx-auto'
    >
    
    <div
    className='flex justify-center'
    >
       <a
       href='#home'
       className='flex gap-2 max-w-fit items-center px-2 rounded-lg text-gray-200 text-lg py-2 bg-violet-500'
       >
       Back to Top <ArrowUp 
       strokeWidth={2}
       />
       </a>
    </div>
    <div className='flex justify-center items-center'>
    <SocialIcon/>
    </div>
    
    <div>
        <p className='text-gray-200 text-center'>&copy; 2025 Virendra Kumar. All rights reserved.</p>
    </div>

    </footer>
  )
}

export default Footer