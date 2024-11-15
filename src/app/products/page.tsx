import Link from 'next/link';
import Image from 'next/image';

import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';

import { getAllProducts } from '@/api/products';

async function ProductsPage() {
  const { products } = await getAllProducts();

  return (
    <main>
      <div className='container mx-auto py-12 px-5'>
        <h1 className='text-3xl font-bold mb-6'>Our Products</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {products.map(product => (
            <Link
              href={`/products/${product.id}`}
              key={product.id}
              className='flex'
            >
              <Card className='flex flex-col'>
                <CardContent className='p-4'>
                  <div className='aspect-square relative mb-4'>
                    <Image
                      // src={product.images[0]}
                      src='https://plus.unsplash.com/premium_photo-1667250493220-d154cebdfc68?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8eW9nYSUyMHByb2R1Y3RzfGVufDB8fDB8fHww'
                      alt={product.name}
                      layout='fill'
                      objectFit='cover'
                      draggable={false}
                      className='rounded-md'
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
                        ${product.price.toFixed(2)}
                      </span>
                      {product.discount > 1 && (
                        <span className='text-muted-foreground line-through ml-2'>
                          ${product.originalPrice.toFixed(2)}
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
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProductsPage;
