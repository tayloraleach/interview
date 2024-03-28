import { getPostById } from '@/lib/api';
import { notFound } from 'next/navigation';

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
        <div className='collapse-content' dangerouslySetInnerHTML={{ __html }}></div>
      </div>
    </>
  );
}

function Breadcrumbs({ sections }: { sections: { link?: string; label: string }[] }) {
  return (
    <div className='text-sm breadcrumbs pb-4 pt-0'>
      <ul className='lg:m-0 lg:p-0 p-0 m-0'>
        {sections.map(({ link, label }) => {
          return <li key={label}>{link ? <a href={link}>{label}</a> : label}</li>;
        })}
      </ul>
    </div>
  );
}
