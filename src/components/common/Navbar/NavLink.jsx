'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const NavLink = ({ title, url }) => {
  const pathName = usePathname();

  return (
    <Link 
      className={`
        rounded p-1 
        ${pathName === url ? 'bg-black text-white' : 'hover:text-gray-400 transition-all duration-300 ease-in-out'}`} 
        href={url}
      >
        {title}
      </Link>
  );
};

export default NavLink;