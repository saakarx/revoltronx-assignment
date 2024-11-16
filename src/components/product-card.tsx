import { type HTMLAttributes } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { SparklesIcon } from 'lucide-react';

import { Card, CardContent } from './ui/card';
import { Badge } from './ui/badge';

import type { Product } from '@/types.type';
import { cn } from '@/lib/utils';

type ProductCardProps = {
  product: Product;
  className?: HTMLAttributes<HTMLAnchorElement>['className'];
};

export function ProductCard({ product, className }: ProductCardProps) {
  return (
    <Link
      href={`/products/${product.id}`}
      className={cn('flex group', className)}
    >
      <Card className='flex flex-col rounded-2xl group-hover:shadow-md'>
        <CardContent className='p-4'>
          <div
            className='aspect-square relative mb-4'
            title={product.isFeatured ? 'Featured Product' : ''}
          >
            {product.isFeatured && (
              <span aria-hidden={true}>
                <SparklesIcon
                  className='absolute stroke-purple-600 -top-[3px] -right-[26px] rotate-12'
                  size={14}
                />
                <SparklesIcon
                  className='absolute stroke-purple-600 -top-6 -right-6 rotate-12'
                  size={20}
                />
                <SparklesIcon
                  className='absolute stroke-purple-600 -top-[22px] right-0 rotate-12'
                  size={15}
                />
              </span>
            )}

            <Image
              // src={product.images[0]}
              src='https://plus.unsplash.com/premium_photo-1667250493220-d154cebdfc68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eW9nYSUyMHByb2R1Y3RzfGVufDB8fDB8fHww'
              alt={product.name}
              layout='fill'
              objectFit='cover'
              draggable={false}
              className={cn(
                'rounded-md',
                product.isFeatured &&
                  'ring-2 ring-offset-4 ring-offset-white ring-purple-400'
              )}
            />
          </div>

          <h2
            className='text-xl font-semibold mb-2 line-clamp-1'
            title={product.name}
          >
            {product.name}
          </h2>
          <p className='text-muted-foreground mb-4 line-clamp-1'>
            {product.description}
          </p>
          <div className='flex justify-between items-center'>
            <div>
              <span className='text-2xl font-bold'>
                ${(((100 - product.discount) * product.price) / 100).toFixed(2)}
              </span>
              {product.discount > 1 && (
                <span className='text-muted-foreground line-through ml-2'>
                  ${product.price.toFixed(2)}
                </span>
              )}
            </div>
            {product.discount > 1 && (
              <Badge variant='secondary' className='text-sm'>
                {product.discount}% OFF
              </Badge>
            )}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
