import { WandSparklesIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

import { Badge } from '@/components/ui/badge';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

import type { Blog } from '@/types.type';

export function BlogCard({ post }: { post: Blog }) {
  return (
    <Link href={`/blogs/${post.slug}`}>
      <Card className='overflow-hidden h-full flex flex-col'>
        <div className='aspect-video relative'>
          <Image
            // src={post.image}
            src='https://plus.unsplash.com/premium_photo-1683133543401-edc31ed41140?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzN8fHlvZ2F8ZW58MHx8MHx8fDA%3D'
            alt={post.title}
            fill
            className='object-cover'
          />
          {post.isFeatured && (
            <Badge className='absolute top-2 right-2 gap-1'>
              <WandSparklesIcon size={14} /> Featured
            </Badge>
          )}
        </div>
        <CardHeader>
          <h2 className='text-2xl font-bold line-clamp-1' title={post.title}>
            {post.title}
          </h2>
        </CardHeader>
        <CardContent className='flex-1'>
          <p className='text-muted-foreground line-clamp-2'>{post.excerpt}</p>
          <div className='mt-4 flex flex-wrap gap-2'>
            {post.tags.map(tag => (
              <Badge key={tag} variant='outline' className='capitalize'>
                {tag}
              </Badge>
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <p className='group inline-flex gap-1 hover:underline underline-offset-4 hover:text-blue-400'>
            Read more
            <span className='group-hover:translate-x-1 transition-transform'>
              &rarr;
            </span>
          </p>
        </CardFooter>
      </Card>
    </Link>
  );
}
