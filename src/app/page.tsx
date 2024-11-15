import Link from 'next/link';
import Image from 'next/image';

import { getFeaturedProducts } from '@/api/products';

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
          <div className='absolute inset-0 bg-indigo-900 bg-opacity-70 dark:bg-opacity-80'></div>
          <div className='relative container mx-auto px-4 text-center text-white'>
            <h1 className='text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up'>
              Transform Your Practice with Yoga Bliss
            </h1>
            <p className='text-xl mb-8 animate-fade-in-up animation-delay-200'>
              Discover our curated collection of digital yoga resources
            </p>
            <button className='animate-fade-in-up animation-delay-400 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-semibold py-3 px-8 rounded-full transition-all duration-300 transform hover:scale-105'>
              <Link href='/products'>Explore Products</Link>
            </button>
          </div>
          <div className='absolute bottom-0 left-0 right-0'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 1440 320'
              className='w-full h-auto'
            >
              <path
                fill='#fff'
                fillOpacity='1'
                d='M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z'
              ></path>
            </svg>
          </div>
        </section>

        <section className='py-16 bg-white dark:bg-gray-800 transition-colors duration-500'>
          <div className='container mx-auto px-4'>
            <h2 className='text-3xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-600 to-indigo-600 dark:from-purple-400 dark:to-indigo-400'>
              Featured Products
            </h2>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8'>
              {featuredProducts.map(product => (
                <div
                  key={product.id}
                  className='bg-white dark:bg-gray-700 rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-xl'
                >
                  <div className='relative'>
                    <Image
                      src={`/placeholder.svg?height=200&width=300&text=Yoga+Product+${product}`}
                      alt={`Yoga Product ${product}`}
                      width={300}
                      height={200}
                      className='w-full'
                    />
                    <div className='absolute top-0 left-0 w-full h-full bg-gradient-to-b from-transparent to-black opacity-0 transition-opacity duration-300 hover:opacity-70 flex items-end justify-center pb-4'>
                      <button className='bg-white text-gray-800 hover:bg-gray-100'>
                        <Link href={`/products/${product.id}`}>Learn More</Link>
                      </button>
                    </div>
                  </div>
                  <div className='p-4'>
                    <h3 className='font-semibold text-lg mb-2 text-gray-800 dark:text-white'>
                      {product.name}
                    </h3>
                    <p className='text-gray-600 dark:text-gray-300 mb-4 text-ellipsis line-clamp-2'>
                      {product.description}
                    </p>
                  </div>
                </div>
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

      <footer className='bg-gray-800 text-white py-8 transition-colors duration-500'>
        <div className='container mx-auto px-4'>
          <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
            <div>
              <h3 className='text-lg font-semibold mb-4'>About Yoga Bliss</h3>
              <p className='text-sm text-gray-300'>
                Yoga Bliss is your one-stop shop for premium digital yoga
                resources. Transform your practice with our expertly crafted
                products.
              </p>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-4'>Quick Links</h3>
              <ul className='space-y-2'>
                <li>
                  <Link
                    href='/about'
                    className='text-sm text-gray-300 hover:text-white transition-colors'
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href='/products'
                    className='text-sm text-gray-300 hover:text-white transition-colors'
                  >
                    Our Products
                  </Link>
                </li>
                <li>
                  <Link
                    href='/contact'
                    className='text-sm text-gray-300 hover:text-white transition-colors'
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href='/terms'
                    className='text-sm text-gray-300 hover:text-white transition-colors'
                  >
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className='text-lg font-semibold mb-4'>Connect With Us</h3>
              <p className='text-sm text-gray-300 mb-2'>
                Follow us on social media for tips, updates, and inspiration.
              </p>
              <div className='flex space-x-4'>
                <Link
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  <span className='sr-only'>Facebook</span>
                  <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>
                <Link
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  <span className='sr-only'>Instagram</span>
                  <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path
                      fillRule='evenodd'
                      d='M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z'
                      clipRule='evenodd'
                    />
                  </svg>
                </Link>
                <Link
                  href='#'
                  className='text-gray-300 hover:text-white transition-colors'
                >
                  <span className='sr-only'>Twitter</span>
                  <svg
                    className='h-6 w-6'
                    fill='currentColor'
                    viewBox='0 0 24 24'
                    aria-hidden='true'
                  >
                    <path d='M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className='mt-8 pt-8 border-t border-gray-700 text-center'>
            <p className='text-sm text-gray-300'>
              &copy; {new Date().getFullYear()} Yoga Bliss. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
