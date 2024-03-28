import { getPostById } from '@/lib/api';
import { notFound } from 'next/navigation';
import React from 'react';

export async function ArticlePage({ slug }: { slug: string }) {
  const post = await getPostById(slug);

  if (!post) return notFound();

  const { title, html: __html, overline } = post;

  return (
    <>
      <h1 className='text-center'>
        {overline && <span className='block mb-8'>{overline}</span>}
        {title}
      </h1>
      <div dangerouslySetInnerHTML={{ __html }} />
    </>
  );
}

export async function generateArticleMetadata(slug: string) {
  const post = await getPostById(slug);
  if (!post) return notFound();
  const { title } = post;
  return { title };
}
