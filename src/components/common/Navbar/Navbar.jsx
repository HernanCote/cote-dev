'use client';
import Link from 'next/link';
import Image from 'next/image';
import React, { useState } from 'react';
import { motion } from 'framer-motion';

import NavLink from './NavLink';

import links from './links';
import { 
  topVariants, 
  centerVariants, 
  bottomVariants, 
  listVariants, 
  listItemVariants,
} from './animationVariants';

const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48 text-xl">
      <div className="hidden md:flex gap-4 xl:gap-8 w-1/3">
        {links.map((link, idx) => (
          <NavLink {...link} key={idx}/>
        ))}
      </div>
      <div className="md:hidden lg:flex xl:w-1/3 xl:justify-center">
        <Link href="/" className="text-sm bg-black rounded-md p-1 font-semibold flex justify-center items-center"> 
          <span className="text-white mr-1">Cote</span>
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
          <motion.div 
            variants={topVariants} 
            animate={isOpen ? 'opened' : 'closed'} 
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
          <motion.div 
            variants={centerVariants} 
            animate={isOpen ? 'opened' : 'closed'} 
            className="w-10 h-1 bg-black rounded"
          ></motion.div>
          <motion.div 
            variants={bottomVariants} 
            animate={isOpen ? 'opened' : 'closed'} 
            className="w-10 h-1 bg-black rounded origin-left"
          ></motion.div>
        </button>
        {isOpen && (
          <motion.div 
            className="absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40"
            variants={listVariants}
            initial="closed"
            animate="opened"
          >
            {links.map(({ title, url }, idx) => (
              <motion.div 
                key={idx}
                variants={listItemVariants}
              >
                <Link 
                  key={idx}
                  href={url} 
                  className="hover:text-gray-400 transition-all duration-300 ease-in-out"
                >
                  {title}
                </Link>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default Navbar;