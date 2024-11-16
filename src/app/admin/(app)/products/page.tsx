import { PlusIcon } from 'lucide-react';
import Link from 'next/link';

import { Button } from '@/components/ui/button';
import { ProductsTable } from './products-table';

import { getAllProducts } from '@/api/products';

async function ProductsPage() {
  const products = await getAllProducts();

  return (
    <div className='py-10 px-6'>
      <div className='flex justify-between items-center'>
        <h1 className='text-3xl font-semibold'>Products</h1>

        <Button size='sm' className='rounded-xl tracking-wide' asChild>
          <Link href='/admin/products/create'>
            <PlusIcon /> Create
          </Link>
        </Button>
      </div>

      <span className='text-sm text-muted-foreground mt-10 inline-block'>
        Total Products: {products.products.length}
      </span>

      <ProductsTable products={products.products} />
    </div>
  );
}

export default ProductsPage;
