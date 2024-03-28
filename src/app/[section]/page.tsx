import { ArticlePage, generateArticleMetadata } from '@/components/Article';
import { getSectionPostFiles } from '@/lib/api';

export default function Page({ params: { section } }: { params: { section: string } }) {
  return <ArticlePage slug={section} />;
}

export async function generateMetadata({ params: { section } }: { params: { section: string } }) {
  return await generateArticleMetadata(section);
}

export async function generateStaticParams() {
  const sectionPosts = await getSectionPostFiles();
  if (sectionPosts && sectionPosts?.length > 0) {
    const staticPages = sectionPosts.map((post) => ({
      section: post,
    }));
    return staticPages;
  }
  return [];
}
