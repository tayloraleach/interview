import { generateArticleMetadata } from '@/components/Article';
import { getPostById } from '@/lib/api';
import { notFound } from 'next/navigation';

// Not sure this page is connected to the statically generated homepage
async function Home() {
  const post = await getPostById('homepage');

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

export async function generateMetadata() {
  return await generateArticleMetadata('homepage');
}

export default Home;
