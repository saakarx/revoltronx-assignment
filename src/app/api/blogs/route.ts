import { NextRequest } from 'next/server';

import { BlogModel, connectDB } from '@/db';

import type { Blog } from '@/types.type';
import { blogCreateSchema } from '@/schema/blog';

export async function GET(req: NextRequest) {
  await connectDB();

  // const searchParams = req.nextUrl.searchParams;
  // const filter = searchParams.get('filter');
  // const sort = searchParams.get('sort');

  // const queryFilter: { [key: string]: unknown } = {};
  // const sortFilter: { [key: string]: SortOrder } = {};

  // if (filter && filter === 'featured-only') {
  //   queryFilter.isFeatured = true;
  // }
  // if (sort) {
  //   if (sort === 'asc') sortFilter.createdAt = 'asc';
  //   else if (sort === 'desc') sortFilter.createdAt = 'desc';
  // }

  const dbBlogs = await BlogModel.find();
  const blogs = dbBlogs.map(
    blog =>
      ({
        id: blog._id,
        slug: blog.slug,
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content,
        image: blog.image,
        keywords: blog.keywords,
        tags: blog.tags,
        isFeatured: blog.isFeatured,
        createdAt: new Date(blog.createdAt),
        updatedAt: new Date(blog.updatedAt),
      } as Blog)
  );

  return Response.json({ message: 'Success', blogs: blogs }, { status: 200 });
}

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();
  const parsedBody = blogCreateSchema.parse(body);

  console.log(`src/app/api/blogs ~ POST : Line 28;`, parsedBody);

  const blog = {};

  return Response.json({ message: 'Success', blog: blog }, { status: 201 });
}
