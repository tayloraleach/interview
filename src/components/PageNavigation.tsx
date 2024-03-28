'use client';

import Link from 'next/link';
import React from 'react';
import { usePathname } from 'next/navigation';

export default function PageNavigation() {
  const pathname = usePathname();

  return (
    <div key={pathname} className='navbar bg-base-300'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'>
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-300 rounded-box w-52'>
            <MenuItems />
          </ul>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <MenuItems />
        </ul>
      </div>
      <div className='navbar-end'></div>
    </div>
  );
}

function MenuItems() {
  return (
    <>
      <li>
        <Link href='/'>Home</Link>
      </li>
      <li>
        <Link href='/javascript'>JavaScript</Link>
      </li>
      <li>
        <Link href='/css'>CSS</Link>
      </li>
      <li>
        <Link href='/html'>HTML</Link>
      </li>
      <li>
        <Link href='/react'>React</Link>
      </li>
    </>
  );
}
