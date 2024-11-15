'use client';

import Link from 'next/link';
import {
  Menu,
  X,
  HouseIcon,
  LucideIcon,
  ShoppingBagIcon,
  LayoutTemplateIcon,
} from 'lucide-react';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

import { Logo } from './logo';

import { cn } from '@/lib/utils';

type Page = {
  name: string;
  href: string;
  icon: LucideIcon;
};
const pages: Page[] = [
  { name: 'Home', href: '/', icon: HouseIcon },
  { name: 'Products', href: '/products', icon: ShoppingBagIcon },
  { name: 'Blogs', href: '/blogs', icon: LayoutTemplateIcon },
];

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const pathname = usePathname();

  const isActiveRoute = (route: string) => pathname === route;

  return (
    <header className='bg-white/60 dark:bg-gray-800/80 backdrop-blur-md shadow-sm sticky top-0 z-50 transition-colors duration-500 border-b-2 border-gray-50/35'>
      <nav className='container mx-auto px-4 py-4 grid grid-cols-[minmax(80px,auto)_1fr_minmax(80px,auto)]'>
        <Link href='/' className='flex items-center space-x-2 text-[#394149]'>
          <Logo />
          <span className='sr-only'>Yoga Bliss</span>
        </Link>

        <div className='hidden place-self-center md:flex space-x-6'>
          {pages.map(page => (
            <Link
              key={page.href}
              href={page.href}
              className={cn(
                'text-sm hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex items-center gap-1.5 px-2 py-0.5 rounded-lg border-2 border-transparent hover:border-indigo-200/50 hover:bg-indigo-50/50',
                isActiveRoute(page.href) &&
                  'font-medium bg-indigo-50 border-indigo-100 text-indigo-600'
              )}
            >
              <page.icon size={16} /> {page.name}
            </Link>
          ))}
        </div>

        <div className='flex items-center space-x-4 col-start-3 place-self-end'>
          <button
            onClick={() => setIsMenuOpen(prevVal => !prevVal)}
            className='md:hidden p-2 rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 transition-colors'
            aria-label='Toggle menu'
            type='button'
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {isMenuOpen && (
        <div className='md:hidden absolute top-full left-0 right-0 bg-white dark:bg-gray-800 shadow-md py-4 px-4 transition-all duration-300 ease-in-out'>
          <div className='flex flex-col space-y-4'>
            {pages.map(page => (
              <Link
                key={page.href}
                href={page.href}
                className='text-sm font-medium hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors flex gap-1.5'
              >
                <page.icon size={18} /> {page.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
