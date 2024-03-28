import React from 'react';

export default function GlobalLayout({ children }: { children: React.ReactNode }) {
  return <main className='max-w-2xl m-auto min-h-screen p-4'>{children}</main>;
}
