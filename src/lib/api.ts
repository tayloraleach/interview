import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import { unified } from 'unified';
import remarkGfm from 'remark-gfm';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypePrettyCode from 'rehype-pretty-code';
import { readdir } from 'fs/promises';
import { SectionTopicParams } from '@/app/[section]/[topic]/page';
import addClasses from 'rehype-class-names';
// import rehypeWrap from 'rehype-wrap-all';

export type Post = {
  id: string;
  title: string;
  metaTitle?: string;
  sections: any[]; // fix me
  date?: string;
  overline?: string;
  html?: string;
};

function getParser() {
  return (
    unified()
      .use(remarkParse)
      .use(remarkRehype)
      .use(remarkGfm)
      .use(rehypePrettyCode, { theme: 'one-dark-pro' })
      .use(rehypeStringify)
      // .use(rehypeWrap, { selector: 'pre', wrapper: 'div.mockup-code' })
      .use(addClasses, { code: 'whitespace-break-spaces' })
      .use(rehypeSlug)
      .use(rehypeAutolinkHeadings, {
        content: ({ properties }) => ({
          type: 'element',
          tagName: 'a',
          properties: {
            href: `#${String(properties?.id)}`,
            class: 'mr-2',
          },
          children: [{ type: 'text', value: '#' }],
        }),
      })
  );
}

const parser = getParser();
const postsDirectory = path.join(process.cwd(), '/src/_posts/');

export async function getPostById(id: string): Promise<Post | undefined> {
  try {
    const realId = id.replace(/\.md$/, '');
    const fullPath = path.join(postsDirectory, `${realId}.md`);
    const { data, content } = matter(await fs.promises.readFile(fullPath, 'utf8'));

    const html = await parser.process(content);
    const date = data.date as Date;

    // Sketchy for sure, but works for now with a SINGLE level directory structure of topics
    const section = realId.substring(0, realId.indexOf('/'));
    const sectionTitle = (data?.metaTitle as string) || (data.title as string);
    const sections: { link?: string; label: string }[] = [{ link: '/', label: 'Home' }];

    if (section) {
      const sectionPath = path.join(postsDirectory, `${section}.md`);
      const { data: sectionData } = matter(await fs.promises.readFile(sectionPath, 'utf8'));
      sections.push({ link: `/${section}`, label: sectionData.title });
      sections.push({ label: sectionTitle });
    } else {
      sections.push({ label: sectionTitle });
    }

    return {
      ...data,
      title: data.title as string,
      overline: data?.overline as string,
      sections,
      id: realId,
      date: `${date.toISOString().slice(0, 10)}`,
      html: html.value.toString(),
    };
  } catch (err) {
    console.log(err);
  }
}

export async function getSectionPostFiles(dir?: string) {
  try {
    const files = await readdir(dir ? postsDirectory + dir : postsDirectory);
    return files.filter((file) => file.endsWith('.md')).map((file) => file.replace(/\.md$/, ''));
  } catch (err) {
    console.error(err);
  }
}

export function getFilesInOneLevelDeep(
  directoryPath: string,
  callback: (e: any, x?: SectionTopicParams[]) => void
) {
  fs.readdir(directoryPath, (err, files) => {
    if (err) {
      callback(err);
      return;
    }

    const filesInOneLevelDeep: SectionTopicParams[] = [];

    files.forEach((file) => {
      const filePath = path.join(directoryPath, file);
      const stats = fs.statSync(filePath);
      if (stats.isDirectory()) {
        const subFiles = fs.readdirSync(filePath);
        subFiles.forEach((subFile) => {
          const subFilePath = path.join(filePath, subFile);
          const relativePath = subFilePath.replace(directoryPath, '');
          filesInOneLevelDeep.push({
            section: relativePath.substring(0, relativePath.indexOf('/')),
            topic: subFile.replace(/\.md$/, ''),
          });
        });
      }
    });

    callback(undefined, filesInOneLevelDeep);
  });
}

export async function getSectionTopicPostFiles() {
  const files: SectionTopicParams[] = await new Promise((resolve, reject) => {
    getFilesInOneLevelDeep(postsDirectory, (error, files) => {
      if (error) {
        reject(error);
      } else if (files) {
        resolve(files);
      }
    });
  });
  return files || [];
}
