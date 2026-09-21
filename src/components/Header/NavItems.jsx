import React from 'react'

function NavItems() {
  const navContents = [
    {label: "Home", href: '#home'},
    {label: "About", href: '#about'},
    {label: "Skills", href: '#skills'},
    {label: "Education", href: '#education'},
    {label: "Projects", href: '#projects'},
    {label: "DSA", href: '#dsa'},

  ];


  return (
    <div className='flex flex-row gap-2 py-1'>
      {navContents.map((item, index) => (
        <a 
          key={index}
          href={item.href}
          className="dark:text-gray-300 px-2 py-1 text-black hover:text-violet-600  transition-all duration-100 ease-in-out hover:border-b-[3px] border-violet-600 rounded-t-full pb-0.5
          "
        >
          {item.label}
          
        </a>
        
      ))}
    </div>
  );
}

export default NavItems;
