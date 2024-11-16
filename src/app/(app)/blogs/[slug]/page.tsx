import { compileMDX } from 'next-mdx-remote/rsc';
import Link from 'next/link';
import { notFound } from 'next/navigation';

import { getBlogBySlug } from '@/api/blogs';

async function BlogPage({
  params,
}: {
  params: { slug: string; [key: string]: unknown };
}) {
  const { blog } = await getBlogBySlug(params.slug);
  if (!blog) return notFound();

  const { content, frontmatter: metaData } = await compileMDX({
    source: blog.content,
    options: { parseFrontmatter: true },
  });

  console.log(metaData, params);

  return (
    <main className='p-10'>
      <Link
        className='group inline-flex gap-x-1 mb-10 underline-offset-4 hover:underline hover:text-blue-400'
        href='.'
      >
        <span className='group-hover:-translate-x-1 transition-transform'>
          &larr;
        </span>
        Go back
      </Link>

      <article className='prose mx-auto'>{content}</article>
    </main>
  );
}

export default BlogPage;
