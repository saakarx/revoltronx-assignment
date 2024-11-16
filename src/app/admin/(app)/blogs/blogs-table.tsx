'use client';

import {
  ExternalLinkIcon,
  MoreHorizontal,
  PencilIcon,
  Trash2Icon,
  WandSparklesIcon,
} from 'lucide-react';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';

import type { Blog } from '@/types.type';

export function BlogsTable({ blogs }: { blogs: Blog[] }) {
  return (
    <Table className='mt-2'>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Excerpt</TableHead>
          <TableHead>Keywords</TableHead>
          <TableHead>Tags</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>

      <TableBody>
        {blogs.map(blog => (
          <TableRow key={blog.id}>
            <TableCell className='font-medium'>{blog.title}</TableCell>
            <TableCell>{blog.excerpt}</TableCell>
            <TableCell>
              <div className='flex flex-wrap gap-1'>
                {blog.keywords.map((keyword, idx) => (
                  <Badge
                    key={`${blog.slug}-${keyword}-${idx}`}
                    variant='secondary'
                  >
                    {keyword}
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell>
              <div className='flex flex-wrap gap-1'>
                {blog.tags.map((tag, idx) => (
                  <Badge key={`${blog.slug}-${tag}-${idx}`} variant='secondary'>
                    {tag}
                  </Badge>
                ))}
              </div>
            </TableCell>
            <TableCell className='text-end'>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant='ghost' className='h-8 w-8 p-0'>
                    <span className='sr-only'>Open menu</span>
                    <MoreHorizontal />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align='end'>
                  <DropdownMenuLabel>Actions</DropdownMenuLabel>
                  <DropdownMenuItem asChild className='focus:bg-blue-400/5'>
                    <Link href={`/blogs/${blog.slug}`}>
                      <ExternalLinkIcon className='text-blue-400' /> Visit
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem className='focus:bg-indigo-500/5'>
                    <WandSparklesIcon className='text-indigo-500' /> Make
                    Featured
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    className='focus:bg-green-500/5'
                    onClick={() => {
                      navigator.clipboard.writeText(blog.id);
                    }}
                  >
                    <PencilIcon className='text-emerald-500' /> Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    asChild
                    className='focus:bg-destructive/5'
                    onClick={() => {
                      navigator.clipboard.writeText(blog.id);
                    }}
                  >
                    <button className='w-full'>
                      <Trash2Icon className='text-destructive' /> Delete
                    </button>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
