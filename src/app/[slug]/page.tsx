import { ArticlePage, generateArticleMetadata } from '@/components/Article';

export default function Page({ params }: { params: { slug: string } }) {
  return <ArticlePage slug={params.slug} />;
}

export async function generateMetadata({ params: { slug } }: { params: { slug: string } }) {
  return await generateArticleMetadata(slug);
}
