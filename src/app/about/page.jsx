'use client';
import React, { useRef } from 'react';
import Link from 'next/link';
import { motion, useInView, useScroll } from 'framer-motion';


import { PageAnimation } from '@/components/common';

import { experiences, skills } from './data';
import Brain from '@/components/Brain';


const AboutPage = () => {

  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  const isSkillRefInView = useInView(skillRef, { once: true, margin: '100px' });


  const experienceRef = useRef();
  const isExperienceRefRefInView = useInView(experienceRef, { once: true, margin: '100px' });

  const Experience = ({ 
    title, company, description, date, link, 
  }) => (
    <>
      <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>{title}</div>
      <div className='p-3 text-sm italic' dangerouslySetInnerHTML={{ __html: description }} />
      <div className='p-3 text-red-400 text-sm font-semibold'>{date}</div>
      <Link className='p-2 rounded bg-white text-sm font-semibold px-2' href={link} target='_blank'>{company}</Link>
    </>
  );

  return (
    <PageAnimation>
      <div className='h-full overflow-scroll lg:flex' ref={containerRef}>
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-2/3">
          <div className='flex flex-col gap-12 justify-center'>
            <h1 className='font-bold text-2xl'>BIOGRAPHY</h1>
            <p className='text-lg'>
              Remember those childhood days spent taking apart electronics, 
              fascinated by the inner workings? That curiosity propelled me on a path that merges 
              engineering ingenuity with software artistry. My Bachelor&rsquo;s in Electronics Engineering laid 
              the foundation, while courses in Software Architecture and Building Smart Contracts deepened 
              my understanding of complex systems. But the thrill comes in crafting user-friendly experiences.
              My Master&rsquo;s in Full-Stack Web Development from OBS Business School equipped me with the tools, 
              while projects in .NET, React, and NextJS ignited my passion for building intuitive, 
              responsive interfaces. Beyond technical expertise, I value collaboration. As a co-founder, 
              I led the development of the uHub Mobile App, fostering a team environment that thrived on 
              best practices and innovation. My fluency in English, Spanish, and German allows me to connect with 
              diverse audiences. With a keen eye for detail, a relentless pursuit of knowledge, and a hunger for challenges.
            </p> 
            <span className='italic'>
            Building the future, one line of code at a time (with a smile).
            </span>
            <div className="self-end">
              <svg 
                width="220" 
                height="110" 
                viewBox="0 0 258 134" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg"
              >
                <path 
                  d="M20.9157 36.3851C23.864 36.3851 33.3482 37.4039 40.2649 36.9799M40.2649 36.9799C44.6509 36.711 48.0046 35.862 48.0046 33.8052C48.0046 26.4992 50.8977 12.4399 47.3596 6.07134C46.0726 3.75477 45.2357 1.18443 41.5548 3.13313C38.3239 4.84363 40.2649 18.2271 40.2649 21.1924V36.9799ZM40.2649 36.9799V70.5686C40.2649 76.1679 41.5548 81.4893 41.5548 86.9796C41.5548 90.2234 40.8101 92.49 39.4837 94.3312M39.4837 94.3312C37.6765 96.8396 34.7897 98.5583 31.2353 100.882C25.3871 104.706 1.56653 114.142 1.56653 100.237C1.56653 89.2467 21.665 91.286 39.4837 94.3312ZM39.4837 94.3312C43.7118 95.0538 47.8117 95.8331 51.4841 96.5083M51.4841 96.5083C57.0018 97.5228 61.5548 98.3025 64.1289 98.3025C74.9116 98.3025 77.6733 70.7474 77.6733 63.4739C77.6733 55.3132 78.5575 46.6073 76.3834 38.6783C74.8382 33.0431 71.8655 26.6825 71.2236 20.9057C69.5256 5.6241 68.6862 51.7991 64.1289 66.4838C61.3489 75.4415 57.804 87.7022 51.4841 96.5083ZM51.4841 96.5083C49.0531 99.8956 46.2114 102.772 42.8448 104.752C35.054 109.335 25.0315 116.362 15.2543 116.362C7.58628 116.362 30.5906 116.424 38.2583 116.362C60.2053 116.183 82.0675 113.782 104.046 113.782C134.255 113.782 164.255 111.202 194.413 111.202C209.3 111.202 224.132 108.622 238.917 108.622M72.5135 100.882C76.9443 100.882 75.0934 91.0562 75.0934 87.4812C75.0934 81.424 75.6033 99.7763 77.6733 105.469C79.6662 110.949 85.413 116.516 85.413 107.332V97.0125C85.413 95.6518 85.1362 86.8708 85.413 91.8527C85.5204 93.7856 93.9341 107.189 96.3775 107.189C97.5387 107.189 97.0225 100.569 97.0225 99.5924C97.0225 98.3411 96.7613 95.9839 96.4739 94.023M96.4739 94.023C96.1228 91.6265 95.7326 89.8218 95.7326 91.3511C95.7326 91.7563 96.0034 92.7256 96.4739 94.023ZM96.4739 94.023C98.8251 100.505 106.164 115.179 109.635 108.622C111.617 104.878 109.922 96.1033 109.922 91.8527M126.691 87.9829C126.916 87.0856 130.817 83.9859 131.851 82.8231C134.135 80.2537 135.091 76.8004 136.438 73.7218C138.454 69.1135 141.234 62.631 138.946 57.5975C137.952 55.4112 132.168 43.9837 128.626 45.558C120.533 49.1549 118.952 66.9821 118.952 73.8652C118.952 86.9347 117.675 100.941 120.528 113.782C122.362 122.034 125.881 124.234 131.851 129.261C134.753 131.705 147.209 134.016 149.91 130.264C153.424 125.384 155.091 118.9 157.65 113.782M143.461 90.5628C143.461 92.6038 142.316 99.288 144.751 99.5924C146.269 99.7822 151.2 103.232 151.2 100.237V92.641C151.2 96.3919 153.911 97.9909 155.357 100.882C156.183 102.536 161.31 105.738 161.52 102.172C161.68 99.4537 160.843 91.3841 161.591 94.0026C163.27 99.8786 174.419 108.962 174.419 98.3025M174.419 81.5332C174.419 86.1827 178.289 99.5838 178.289 94.9343C178.289 88.0075 180.603 83.1021 181.872 76.3734C184.303 63.4895 184.739 50.8028 184.739 37.7467C184.739 30.1601 187.319 37.8799 187.319 40.8999C187.319 52.2153 194.089 63.2804 197.352 73.7935C199.969 82.2261 206.668 107.418 206.668 98.5891C206.668 84.2806 204.218 71.0242 201.795 57.0242C201.396 54.723 197.437 39.7305 200.505 47.7079C205.25 60.0458 210.233 72.4424 215.053 84.758C217.019 89.7833 220.227 96.813 220.857 102.172C221.247 105.488 225.155 108.291 225.945 111.847C227.435 118.55 229.349 116.362 221.216 116.362C185.154 116.362 149.199 119.478 113.218 121.808C105.758 122.291 98.0808 124.101 90.6444 124.101C89.9621 124.101 85.2294 125.984 87.4196 126.61C89.4402 127.187 92.3735 126.681 94.4426 126.681C107.037 126.681 119.566 125.836 132.138 125.105C173.447 122.703 214.294 121.521 255.686 121.521" 
                  stroke="gray" 
                  stroke-width="2" 
                  stroke-linecap="round"/>
              </svg>
            </div>
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
          <motion.div className='flex flex-col gap-12 justify-center' ref={skillRef} initial={{x: '-300px', opacity: 0 }} animate={isSkillRefInView ? { x: 0, opacity: 1 } : {}} transition={{duration: 0.5, delay: 0.2}}>
            <h1 className='font-bold text-2xl'>SKILLS</h1>
            <div className='flex gap-4 flex-wrap'>
              {skills.map((skill, index) => (
                <div key={index} className='rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black'>
                  {skill}
                </div>
              ))}
            </div>
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
          </motion.div>
          <motion.div className='flex flex-col gap-8 justify-center pb-48' initial={{x: '-300px', opacity: 0 }} animate={isExperienceRefRefInView ? { x: 0, opacity: 1 }: {}} transition={{delay: 0.2, duration: 0.5}} ref={experienceRef}>
            <h1 className='font-bold text-2xl'>EXPERIENCE</h1>
            <div>
              {experiences.map((experience, idx) => {
                const side = idx % 2 === 0 ? 'left' : 'right';
                return (
                  <div className='flex justify-around h-fit' key={idx}>
                    <div className='w-1/3'>
                      {side === 'left' && (
                        <Experience {...experience} />
                      )}  
                    </div>
                    <div className='w-1/6 flex justify-center'>
                      <div className='w-1 h-full bg-gray-600 rounded relative'>
                        <div className='absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2'></div>
                      </div>
                    </div>
                    <div className='w-1/3'>
                      {side === 'right' && (
                        <Experience {...experience} />
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress}/>
        </div>
      </div>
    </PageAnimation>
  );
};

export default AboutPage;