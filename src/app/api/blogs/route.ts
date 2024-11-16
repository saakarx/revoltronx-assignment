import { NextRequest } from 'next/server';
import { randomUUID } from 'crypto';
import { SortOrder } from 'mongoose';

import { BlogModel, connectDB } from '@/db';

import type { Blog } from '@/types.type';
import { blogCreateSchema } from '@/schema/blog';

export async function GET(req: NextRequest) {
  await connectDB();

  const searchParams = req.nextUrl.searchParams;
  const filter = searchParams.get('filter');
  const sort = searchParams.get('sort');

  const queryFilter: { [key: string]: unknown } = {};
  const sortFilter: { [key: string]: SortOrder } = {};

  if (filter && filter === 'featured-only') {
    queryFilter.isFeatured = true;
  }
  if (sort) {
    if (sort === 'asc') sortFilter.createdAt = 'asc';
    else if (sort === 'desc') sortFilter.createdAt = 'desc';
  }

  const dbBlogs = await BlogModel.find(queryFilter).sort(sortFilter);
  const blogs = dbBlogs.map(
    blog =>
      ({
        id: blog.id,
        slug: blog.slug,
        title: blog.title,
        excerpt: blog.excerpt,
        content: blog.content,
        // image: blog.image,
        keywords: blog.keywords,
        tags: blog.tags,
        isFeatured: blog.isFeatured || false,
        createdAt: new Date(blog.createdAt),
        updatedAt: new Date(blog.updatedAt),
      } satisfies Blog)
  );

  return Response.json(
    { message: 'Success', blogs: blogs, dbBlogs },
    { status: 200 }
  );
}

const slugify = (str: string) =>
  str
    .toLowerCase() // Convert to lowercase
    .trim() // Trim leading and trailing whitespace
    .replace(/[^a-z0-9\s-]/g, '') // Remove special characters
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-'); // Replace multiple hyphens with a single one

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();
  const parsedBody = blogCreateSchema.parse(body);

  let slug = slugify(parsedBody.title);

  // check if the slug is already is in use
  const hasSlug = await BlogModel.findOne({ slug: slug });
  if (hasSlug !== null) slug = `${slug}-${randomUUID()}`;

  const keywords = parsedBody.keywords
    .split(',')
    .map(key => key.trim().toLowerCase());
  const tags = parsedBody.tags.split(',').map(tag => tag.trim().toLowerCase());

  const dbBlog = await BlogModel.create({
    slug: slug,
    title: parsedBody.title,
    excerpt: parsedBody.excerpt,
    content: parsedBody.content,
    image: '',
    keywords: keywords,
    tags: tags,
    isFeatured: parsedBody.isFeatured,
  });

  const blog: Blog = {
    id: dbBlog.id,
    slug: dbBlog.slug,
    title: dbBlog.title,
    excerpt: dbBlog.excerpt,
    content: dbBlog.content,
    isFeatured: dbBlog.isFeatured,
    keywords: dbBlog.keywords,
    tags: dbBlog.tags,
    createdAt: dbBlog.createdAt,
    updatedAt: dbBlog.updatedAt,
  };

  return Response.json({ message: 'Success', blog: blog }, { status: 201 });
}
