'use client';

import Link from 'next/link';
import React, { useEffect } from 'react';
import { usePathname } from 'next/navigation';

const LOCAL_STORAGE_KEY = 'fe-interview-prep';

export default function PageNavigation() {
  const pathname = usePathname();

  async function handleGoToRandomQuestion() {
    const randomPost = await fetch('/api/random-post').then((res) => res.json());
    const currentPost = window.localStorage.getItem(LOCAL_STORAGE_KEY);

    if (randomPost.href === currentPost) {
      handleGoToRandomQuestion();
    } else {
      window.location = randomPost.href;
    }
  }

  useEffect(() => {
    window.localStorage.setItem(LOCAL_STORAGE_KEY, new URL(window.location.href).pathname);
  }, []);

  return (
    <div
      key={pathname}
      className='navbar bg-base-100 sticky top-0 z-10 border-solid border-b border-base-300 shadow-lg'>
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
            className='menu menu-sm dropdown-content mt-5 z-10 p-2 shadow-xl bg-base-100 rounded-box w-52'>
            <MenuItems />
          </ul>
        </div>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <MenuItems />
        </ul>
      </div>
      <div className='navbar-end'>
        <button onClick={handleGoToRandomQuestion} className='btn btn-primary btn-sm mr-1'>
          Random Question
        </button>
      </div>
    </div>
  );
}

const links = [
  { href: '/', label: 'Home' },
  { href: '/javascript', label: 'JavaScript' },
  { href: '/css', label: 'CSS' },
  { href: '/html', label: 'HTML' },
  { href: '/react', label: 'React' },
];

function MenuItems() {
  return (
    <>
      {links.map(({ href, label }) => (
        <li className={'p-1'} key={label}>
          <Link href={href}>{label}</Link>
        </li>
      ))}
    </>
  );
}
