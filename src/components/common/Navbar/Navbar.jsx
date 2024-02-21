'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import NavLink from './NavLink';

const links = [
  {
    url: '/',
    title: 'Home',
  },
  {
    url: '/about',
    title: 'About',
  },
  {
    url: '/portfolio',
    title: 'Portfolio',
  },
  {
    url: '/contact',
    title: 'Contact',
  },
];

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="hidden md:flex gap-8 w-1/3">
        {links.map((link, idx) => (
          <NavLink {...link} key={idx}/>
        ))}
      </div>
      <div className="md:hidden lg:flex md:w-1/3 justify-center">
        <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex justify-center items-center"> 
          <span className="text-white mr-1">hc</span>
          <span className="w-12 h-8 rounded bg-white text-black flex justify-center items-center">.dev</span>
        </Link>
      </div>
      <div className='hidden md:flex gap-4 w-1/3 justify-end'>
        <Link href="https://github.com/hernancote" target="_blank">
          <Image src="/github.png" alt="Hernán Cote GitHub" width={24} height={24}/>
        </Link>
        <Link href="https://instagram.com/hcote77" target="_blank">
          <Image src="/instagram.png" alt="Hernán Cote Instagram" width={24} height={24}/>
        </Link>
        <Link href="https://linkedin.com/in/hernancote" target="_blank">
          <Image src="/linkedin.png" alt="Hernán Cote Instagram" width={24} height={24}/>
        </Link>
      </div>
      <div className="md:hidden">
        <button 
          onClick={() => setIsOpen(prev => !prev)}
          className="w-10 h-8 flex flex-col justify-between z-50 relative"
        >
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
          <div className="w-10 h-1 bg-black rounded"></div>
        </button>
        {isOpen && (
          <div className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl">
            {links.map(({ title, url }, idx) => (
              <Link 
                href={url} 
                key={idx}
                className="hover:text-gray-400 transition-all duration-300 ease-in-out"
              >
                {title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;