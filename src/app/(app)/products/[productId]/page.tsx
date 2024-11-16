import Link from 'next/link';
import { notFound } from 'next/navigation';

import { Card, CardContent } from '@/components/ui/card';
import { Images } from './images';

import { getProductById } from '@/api/products';
import { Badge } from '@/components/ui/badge';
import { WandSparklesIcon } from 'lucide-react';

async function ProductPage({
  params,
}: {
  params: { productId: string; [key: string]: unknown };
}) {
  const { product } = await getProductById(params.productId);

  if (!product) return notFound();

  return (
    <main className='p-10'>
      <Link
        className='flex mb-16 group hover:text-indigo-400 underline-offset-4 hover:underline'
        href='.'
      >
        <span className='group-hover:-translate-x-1.5 transition-transform duration-150 ease-in-out mr-1'>
          &larr;
        </span>
        Go back
      </Link>

      <div className='container mx-auto px-4 py-8'>
        <div className='grid md:grid-cols-2 gap-8'>
          <Images
            images={[
              'https://plus.unsplash.com/premium_photo-1667250493220-d154cebdfc68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eW9nYSUyMHByb2R1Y3RzfGVufDB8fDB8fHww',
            ]}
            productName={product.name}
          />

          <div className='space-y-6'>
            {product.isFeatured && (
              <Badge className='gap-1 pointer-events-none'>
                <WandSparklesIcon size={16} /> Featured
              </Badge>
            )}

            <h1 className='text-3xl font-bold'>{product.name}</h1>
            <p className='text-gray-600'>{product.description}</p>

            <Card>
              <CardContent className='p-6'>
                <div className='flex items-baseline mb-4'>
                  <span className='text-3xl font-bold text-primary'>
                    $
                    {(((100 - product.discount) * product.price) / 100).toFixed(
                      2
                    )}
                  </span>
                  {product.discount > 0 && (
                    <>
                      <span className='ml-2 text-lg text-gray-500 line-through'>
                        ${product.price.toFixed(2)}
                      </span>
                      <span className='ml-2 text-sm text-green-600 font-semibold'>
                        {product.discount}% OFF
                      </span>
                    </>
                  )}
                </div>

                <p className='text-sm text-gray-500 mb-4'>
                  Free shipping on orders over $50
                </p>

                <button className='w-full'>Add to Cart</button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ProductPage;
