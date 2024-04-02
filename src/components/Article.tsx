import { Post, getPostById, getSectionPostFiles } from '@/lib/api';
import { notFound } from 'next/navigation';
import React from 'react';
import { Breadcrumbs } from './BreadCrumbs';

export async function ArticlePage({ slug }: { slug: string }) {
  const post = await getPostById(slug);

  if (!post) return notFound();

  const sectionPostFiles = await getSectionPostFiles(slug);

  let posts;

  if (sectionPostFiles && sectionPostFiles?.length > 0) {
    posts = await Promise.all(
      sectionPostFiles.map((fileName) => getPostById(`${slug}/${fileName}`))
    );
    posts = posts.filter((post): post is Post => post !== undefined);
  }

  const { title, html: __html, overline, sections } = post;

  return (
    <>
      {sections && <Breadcrumbs sections={sections} />}
      <h1 className='text-center'>
        {overline && <span className='block mb-8'>{overline}</span>}
        {title}
      </h1>
      {__html && <div dangerouslySetInnerHTML={{ __html }} />}
      {Array.isArray(posts) && (
        <ul>
          {posts.map(({ title }, x) => (
            <li key={title}>
              <a href={`${slug}/${sectionPostFiles?.[x]}`}>{title}</a>
            </li>
          ))}
        </ul>
      )}
    </>
  );
}

export async function generateArticleMetadata(slug: string) {
  const post = await getPostById(slug);
  if (!post) return notFound();
  const { title } = post;
  return { title };
}
