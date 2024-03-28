import { ArticlePage, generateArticleMetadata } from '@/components/Article';

export default function Page({ params }: { params: { slug: string } }) {
  return <ArticlePage slug={params.slug} />;
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
  return await generateArticleMetadata(slug);
}

export async function generateStaticParams() {
  // const posts = await fetch('https://.../posts').then((res) => res.json())
  // return posts.map((post) => ({
  //   slug: post.slug,
  // }))
  return [{ slug: 'javascript' }, { slug: 'css' }, { slug: 'html' }, { slug: 'react' }];
}
