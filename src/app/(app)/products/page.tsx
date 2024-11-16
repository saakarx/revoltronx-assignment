import { ProductCard } from '@/components/product-card';

import { getAllProducts } from '@/api/products';

async function ProductsPage() {
  const { products } = await getAllProducts();

  return (
    <main>
      <div className='container mx-auto py-12 px-5'>
        <h1 className='text-3xl font-bold mb-6'>Our Products</h1>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
}

export default ProductsPage;
