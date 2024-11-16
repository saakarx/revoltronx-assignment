import { BlogCard } from './blog-card';

import { getLatestBlogs } from '@/api/blogs';

async function Blogs() {
  const { blogs } = await getLatestBlogs({ asc: false });

  return (
    <main className='p-10 container mx-auto'>
      <h1 className='text-3xl font-bold mb-6'>Blogs Page</h1>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {blogs.map(blog => (
          <BlogCard key={blog.slug} post={blog} />
        ))}
      </div>
    </main>
  );
}

export default Blogs;
