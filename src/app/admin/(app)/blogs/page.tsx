import { PlusIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { BlogsTable } from './blogs-table';

import { getLatestBlogs } from '@/api/blogs';

async function AdminBlogsPage() {
  const blogs = await getLatestBlogs({ asc: false });

  return (
    <main className='py-10 px-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-semibold'>Blogs</h1>

        <Button size='sm' className='rounded-xl tracking-wide' asChild>
          <Link href='/admin/blogs/create'>
            <PlusIcon /> Create
          </Link>
        </Button>
      </div>

      <span className='text-sm text-muted-foreground mt-10 inline-block'>
        Total Blogs: {blogs.blogs.length}
      </span>

      <BlogsTable blogs={blogs.blogs} />
    </main>
  );
}

export default AdminBlogsPage;
