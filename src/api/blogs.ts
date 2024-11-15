import { getURI } from '.';

import type { MultipleBlogsResponse, SingleBlogResponse } from '@/types.type';

export async function getAllBlogs() {
  return fetch(getURI('/api/blogs')).then(
    res => res.json() as Promise<MultipleBlogsResponse>
  );
}

export async function getBlogBySlug(slug: string) {
  return fetch(getURI(`/api/blogs/${slug}`)).then(
    res => res.json() as Promise<SingleBlogResponse>
  );
}

export async function getLatestBlogs({ asc = false }: { asc: boolean }) {
  return fetch(getURI('/api/blogs', { sort: asc ? 'asc' : 'desc' })).then(
    res => res.json() as Promise<MultipleBlogsResponse>
  );
}
