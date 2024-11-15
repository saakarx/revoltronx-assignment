import { NextRequest } from 'next/server';

import { BlogModel, connectDB } from '@/db';
import type { Blog } from '@/types.type';

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ slug: string }>;
  }
) {
  await connectDB();

  const slug = (await params).slug;

  const dbBlog = await BlogModel.findOne({ slug: slug });
  const blog: Blog = {
    id: dbBlog._id,
    slug: dbBlog.slug,
    title: dbBlog.title,
    excerpt: dbBlog.excerpt,
    content: dbBlog.content,
    image: dbBlog.image,
    keywords: dbBlog.keywords,
    tags: dbBlog.tags,
    isFeatured: dbBlog.isFeatured || false,
    createdAt: new Date(dbBlog.createdAt),
    updatedAt: new Date(dbBlog.updatedAt),
  };

  return Response.json({ message: 'Success', blog: blog }, { status: 200 });
}
