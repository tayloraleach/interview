import { getSectionTopicPostFiles } from '@/lib/api';
import { NextResponse } from 'next/server';

export async function GET(_request: Request) {
  const posts = await getSectionTopicPostFiles();
  const randomIndex = Math.floor(Math.random() * posts.length);
  const randomPost = posts[randomIndex];
  return NextResponse.json({ href: `/${randomPost.section}/${randomPost.topic}` });
}
