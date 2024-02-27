'use client';
import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';

import { PageAnimation } from '@/components/common';
import { useScroll, useTransform } from 'framer-motion';

import projectsData from './data';


const ProjectImage = ({imageUrl, alt = 'image'}) => {
  const [isLoading, setIsLoading] = useState(true);

    return (
        <Image 
            src={imageUrl} 
            alt={alt}
            fill
            className={`
                object-cover 
                group-hover:opacity-75 
                duration-700 
                ease-in-out 
                rounded-lg
                ${isLoading ? 'grayscale blur-2xl scale-110' : 'grayscale-0 blur-0 scale-100'}`}
            onLoad={() => setIsLoading(false)}
        />
    );
};

const Projects = ({ projects }) => {
  if (!projects) return;

  return (
    <>
      <div className='h-screen w-screen flex items-center justify-center gap-0 bg-gradient-to-r from-purple-300 to-red-300'/>
      {projects.map(({ id, color, title, desc, img, link }) => (
        <div className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${color}`} key={id}>
          <div className='flex flex-col gap-8 text-white'>
            <h1 className='text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl'>{title}</h1>
            <div className='relative w-80 h-56 md:w-96 md:h-64 lg:2-[500px] lg:h-[350px] xl:w-[600px] xl:h-[420px]'>
              <ProjectImage imageUrl={img} />
            </div>
            <p className='w-80 md:w-96 lg:w-[500px] lg:text-xl xl:w-[600px]'>{desc}</p>
            {link && 
              <Link className='flex justify-end' href={link}>
                <button className='p-2 text-sm md:p-4 md:text-md lg:pd-8 lg:text-lg bg-white text-gray-600 font-semibold m-4 rounded'>See More</button>
              </Link>
            }
          </div>
        </div>
      ))}
      <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-blue-300 to-purple-300'/>
    </>
  );
};

const PortfolioPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const ref = useRef();
  const { scrollYProgress } = useScroll(ref);

  const x = useTransform(scrollYProgress, [0, 1], ['0%', '-80%']);

  return (
    <PageAnimation>
      <div className="h-[600vh] relative" ref={ref}>
        <div className='flex flex-col'>
          <div className='w-screen h-[calc(100vh-6rem)] flex flex-col items-center justify-center text-8xl text-center'>
            My Works
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: '10px' }}
              transition={{ repeat: Infinity, duration: 3, ease: 'easeInOut' }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#000000"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#000000"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
        </div>
        {projectsData && (
          <div className='sticky top-0 flex h-screen gap-4 items-center overflow-hidden'>
            <motion.div style={{ x }} className='flex'>
              <Projects projects={projectsData}/>
            </motion.div>
          </div>
        )}
      </div>
      <div className='w-screen h-screen flex flex-col gap-16 items-center justify-center text-center'>
          <h1 className='text-8xl'>Do you have a project in mind?</h1>
          <div className='relative'>
            <motion.svg animate={{rotate: 360}} transition={{duration: 8, ease: 'linear', repeat: Infinity }} viewBox='0 0 300 300' className='w-64 h-64 md:w-[500px] md:h-[500px]'>
              <defs>
                <path 
                  id='circle'
                  d="M 150, 150 m -60, 0 a 60,60 0 1, 1 120,0 a 60,60 0 1,1 -120,0"
                />
              </defs>
              <text fill="#000">
                <textPath xlinkHref="#circle" className='text-xl'>Software Craftsman and Architect</textPath>
              </text>
            </motion.svg>
            <Link href="/contact" className='flex justify-center items-center w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 bottom-0 right-0 m-auto bg-black text-white rounded-full'>Hire Me</Link>
          </div>
        </div>
    </PageAnimation>
  );
};

export default PortfolioPage;