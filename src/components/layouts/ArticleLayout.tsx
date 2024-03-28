import React from 'react';

export default function ArticleLayout({ children }: { children: React.ReactNode }) {
  return <article className='prose lg:prose-xl'>{children}</article>;
}
