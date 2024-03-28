import { ArticlePage, generateArticleMetadata } from '@/components/Article';
import { getSectionTopicPostFiles } from '@/lib/api';

export type SectionTopicParams = { section: string; topic: string };

const getPathFromParams = (params: SectionTopicParams) => `${params.section}/${params.topic}`;

export default function Page({ params }: { params: SectionTopicParams }) {
  return <ArticlePage slug={getPathFromParams(params)} />;
}

export async function generateMetadata({ params }: { params: SectionTopicParams }) {
  return await generateArticleMetadata(getPathFromParams(params));
}

export async function generateStaticParams() {
  const sectionTopicPosts = await getSectionTopicPostFiles();
  console.log(sectionTopicPosts);
  if (sectionTopicPosts && sectionTopicPosts?.length > 0) {
    const staticPages = sectionTopicPosts.map((post) => ({
      section: post.section,
      topic: post.topic,
    }));
    return staticPages;
  }
  return [];
}
