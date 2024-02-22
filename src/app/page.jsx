/* eslint-disable react/no-unescaped-entities */
import Image from 'next/image';

const Homepage = () => {
  return (
    <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
      <div className="h-1/2 lg:h-full lg:w-1/2 relative">
        <Image src="/hero.png" alt="Hernán Cote" layout="fill" className="object-contain"/>
      </div>
      <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
        <h1 className="text-4xl md:text-6xl font-bold">Architecting Digital Worlds, from backend to beyond.</h1>
        <p className="md:text-xl">
          Code my canvas, craft your vision. I'm not just a developer, I'm a <strong>Software Craftsman</strong>, Architect, and Full-Stack Developer, building the hidden magic that powers captivating experiences. Front-end finesse meets back-end brilliance, weaving seamless interactions with user delight in mind. Let's push the boundaries, together.
        </p>
        <div className="w-full flex gap-4">
          <button className="p-4 rounded-lg ring-1 ring-black bg-black text-white">View My Work</button>
          <button className="p-4 rounded-lg ring-1 ring-black">Contact Me</button>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
