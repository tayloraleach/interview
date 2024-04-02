import { getPostById } from '@/lib/api';
import { notFound } from 'next/navigation';
import { Breadcrumbs } from './BreadCrumbs';

export async function QuestionPage({ slug }: { slug: string }) {
  const post = await getPostById(slug);

  if (!post) return notFound();

  const { title, html: __html, sections } = post;

  return (
    <>
      {sections && <Breadcrumbs sections={sections} />}
      <div className='collapse collapse-arrow bg-base-300'>
        <input type='radio' name='question' />
        <h1 className='collapse-title text-center mb-0 sm:mb-0 py-8 lg:py-16'>{title}</h1>
        {__html && <div className='collapse-content' dangerouslySetInnerHTML={{ __html }}></div>}
      </div>
    </>
  );
}
