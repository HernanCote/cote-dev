'use client';
import React from 'react';
import { motion } from 'framer-motion';

const PageAnimation = ({ 
  children,
}) => (
  <motion.div className='h-full' initial={{ y: '-200vh' }} animate={{ y: '0%' }} transition={{ duration: 1 }}>
    {children}
  </motion.div>
);

export default PageAnimation;
