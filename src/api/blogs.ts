import { z } from 'zod';

import { getURI } from '.';

import type { MultipleBlogsResponse, SingleBlogResponse } from '@/types.type';
import { blogCreateSchema } from '@/schema/blog';

export async function getAllBlogs() {
  return fetch(getURI('/api/blogs'), { cache: 'no-cache' }).then(
    res => res.json() as Promise<MultipleBlogsResponse>
  );
}

export async function getBlogBySlug(slug: string) {
  return fetch(getURI(`/api/blogs/${slug}`), { cache: 'no-cache' }).then(
    res => res.json() as Promise<SingleBlogResponse>
  );
}

export async function getLatestBlogs({ asc = false }: { asc: boolean }) {
  return fetch(getURI('/api/blogs', { sort: asc ? 'asc' : 'desc' }), {
    cache: 'no-cache',
  }).then(res => res.json() as Promise<MultipleBlogsResponse>);
}

export async function createBlog(values: z.infer<typeof blogCreateSchema>) {
  return fetch(getURI('/api/blogs'), {
    method: 'POST',
    body: JSON.stringify(values),
    cache: 'no-cache',
  }).then(res => res.json() as Promise<SingleBlogResponse>);
}
