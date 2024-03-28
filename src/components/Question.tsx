import { getPostById } from '@/lib/api';
import { notFound } from 'next/navigation';

export async function QuestionPage({ slug }: { slug: string }) {
  const post = await getPostById(slug);

  if (!post) return notFound();

  const { title, html: __html, section } = post;

  return (
    <>
      <div className='text-sm breadcrumbs'>
        <ul>
          <li>
            <a href='/'>Home</a>
            {/* // add section data, grab from api? */}
          </li>
          <li>{section}</li>
        </ul>
      </div>
      <div className='collapse collapse-arrow bg-base-300'>
        <input type='radio' name='question' />
        <h1 className='collapse-title text-center mb-0'>{title}</h1>
        <div className='collapse-content' dangerouslySetInnerHTML={{ __html }}></div>
      </div>
    </>
  );
}
