'use client';
import React from 'react';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import { Navbar } from '../common';

const TransitionProvider = ({ 
  children,
}) => {
  
  const pathName = usePathname().substring(1);
  let path = pathName.charAt(0).toUpperCase() + pathName.slice(1);

  return (
    <AnimatePresence mode="wait">
      <div key={pathName} className="w-screen h-screen bg-gradient-to-b from-blue-100 to-red-100">
        <motion.div 
          className='h-screen w-screen fixed bg-black rounded-b-[100px] z-30'
          animate={{ height: 0 }}
          exit={{ height: '140vh' }}
          transition={{ duration: 0.5, ease: 'easeInOut' }}
        />
        <motion.div 
          className='fixed m-auto top-0 bottom-0 left-0 right-0 text-8xl text-white cursor-default z-40 w-fit h-fit'
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
        >
          {path}
        </motion.div>
        <motion.div 
          className='h-screen w-screen fixed bg-black rounded-t-[100px] bottom-0 z-30'
          initial={{ height: '140vh' }}
          animate={{ height: '0vh', transition: { delay: 0.5, ease: 'easeInOut' }}}
        />
        <div className='h-24'>
          <Navbar />
        </div>
        <div className='h-[calc(100vh-6rem)]'>
          {children}
        </div>
      </div>
    </AnimatePresence>
  );
};

export default TransitionProvider;