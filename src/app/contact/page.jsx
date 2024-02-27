'use client';
import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';

import { PageAnimation } from '@/components/common';

const ContactPage = () => {

  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState(null);

  const sayHello = 'Say Hello';

  const form = useRef();

  const sendEmail = e => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);
    setIsSuccess(false);


    const userMessage = form.current['user_message'].value;
    const userEmail = form.current['user_email'].value;

    if (!userMessage.trim() || !userEmail.trim()) {
      setError('Please fill out all fields');
      setIsLoading(false);
      return;
    }

    emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
    .then(result => {
      setIsSuccess(true);
      form.current.reset();
    }, error => {
      setError('There was an error sending your message');
    }).finally(() => {
      setIsLoading(false);
    });
  };


  return (
    <PageAnimation>
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        <div className="h-1/2 lg:h-full lg:w-1/2 flex items-center justify-center text-6xl">
          <div>
            {sayHello.split('').map((letter, idx) => (
              <motion.span 
                key={idx} 
                initial={{ opacity: 1 }} 
                animate={{ opacity: 0 }} 
                transition={{ duration: 3, repeat: Infinity, delay: idx * 0.1 }}
              >
                {letter}
              </motion.span>
            ))}
            <span>{' '}</span>
            <span>😏</span>
          </div>
        </div>
        <form onSubmit={sendEmail} ref={form} className="h-1/2 lg:h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col gap-8 justify-center p-24">
          <span>Dear Hernán Cote</span>
          <textarea 
            rows={6} 
            className='bg-transparent border-b-2 border-b-black outline-none resize-none'
            name="user_message"/>
          <span>My Email address is:</span>
          <input type='text' className='bg-transparent border-b-2 border-b-black outline-none' name="user_email"/>
          <span>Regards</span>
          <button className='bg-purple-200 rounded font-semibold text-gray-600 p-4 flex justify-center items-center'>
            <span className='pr-3'>Send</span>
            {isLoading && (
              <motion.div 
                className="h-4 w-4 bg-green-50 ring-1 ring-blue-400" 
                animate={{
                  scale: [1, 1.5, 1.5, 1, 1],
                  rotate: [0, 0, 270, 270, 0],
                  borderRadius: ['20%', '20%', '50%', '50%', '20%'],
                }}
                transition={{
                  duration: 2,
                  ease: 'easeInOut',
                  times: [0, 0.2, 0.5, 0.8, 1],
                  repeat: Infinity,
                  repeatDelay: 1,
                }}
              />
            )}
          </button>
          {isSuccess && <span className='text-green-600 font-semibold'>Your message was sent successfully</span>}
          {error && <span className='text-red-600 font-semibold'>{error}</span>}
        </form>
      </div>
    </PageAnimation>
  );
};

export default ContactPage;
