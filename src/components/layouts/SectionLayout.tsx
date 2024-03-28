import React from 'react';

export default function SectionLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className='max-w-2xl m-auto min-h-screen p-2'>
      <article className='prose lg:prose-xl'>{children}</article>
    </main>
  );
}
