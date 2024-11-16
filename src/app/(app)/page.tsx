import Link from 'next/link';

import { getFeaturedProducts } from '@/api/products';
import { ProductCard } from '@/components/product-card';

export default async function LandingPage() {
  const { products: featuredProducts } = await getFeaturedProducts();

  return (
    <div className='flex flex-col min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 dark:from-gray-900 dark:to-indigo-900 transition-colors duration-500'>
      <main className='flex-grow'>
        <section
          className='relative bg-cover bg-center py-32 overflow-hidden'
          style={{
            backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
          }}
        >
          <div className='absolute inset-0 bg-gradient-to-tl from-white to-gray-50' />

          <div className='relative max-w-3xl mx-auto px-4 text-center text-black'>
            <h1 className='text-4xl md:text-6xl font-bold mb-8 animate-fade-in-up'>
              Transform Your Practice with{' '}
              <span className='text-transparent bg-clip-text bg-gradient-to-tl from-purple-500 to-pink-400'>
                Yoga Bliss
              </span>
            </h1>
            <p className='text-lg mb-16 animate-fade-in-up animation-delay-200'>
              Smart yoga products, like intelligent mats and wearable devices,
              offer real-time feedback on posture and alignment, enhancing the
              quality of practice. They provide personalized guidance, track
              progress, and help prevent injuries, making yoga accessible for
              all levels from beginners to experts. These products combine
              technology with wellness for a more effective and engaging yoga
              experience.
            </p>
            <button className='animate-fade-in-up animation-delay-400 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105'>
              <Link href='/products'>Explore Products</Link>
            </button>
          </div>
        </section>

        <section className='py-16 bg-white dark:bg-gray-800 transition-colors duration-500'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400'>
              Featured Products
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
              {featuredProducts.map(product => (
                <ProductCard
                  key={product.id}
                  product={product}
                  className='hover:-translate-y-1 transition-all'
                />
              ))}
            </div>
          </div>
        </section>

        <section className='py-16 bg-gradient-to-r from-purple-100 to-indigo-100 dark:from-gray-800 dark:to-indigo-900 transition-colors duration-500'>
          <div className='container mx-auto px-4 text-center'>
            <h2 className='text-3xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400'>
              Why Choose Yoga Bliss?
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
              {[
                {
                  title: 'Expert Guidance',
                  description: 'Learn from experienced yoga instructors',
                },
                {
                  title: 'Flexible Practice',
                  description: 'Access our resources anytime, anywhere',
                },
                {
                  title: 'Community Support',
                  description: 'Join a vibrant community of yoga enthusiasts',
                },
              ].map((item, index) => (
                <div
                  key={index}
                  className='bg-white dark:bg-gray-700 p-6 rounded-lg shadow-md transform transition-all duration-300 hover:scale-105'
                >
                  <h3 className='text-xl font-semibold mb-4 text-indigo-600 dark:text-indigo-400'>
                    {item.title}
                  </h3>
                  <p className='text-gray-600 dark:text-gray-300'>
                    {item.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
