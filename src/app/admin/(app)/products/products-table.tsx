'use client';

import {
  ExternalLinkIcon,
  MoreHorizontal,
  PencilIcon,
  Trash2Icon,
  WandSparklesIcon,
} from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

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

import type { Product } from '@/types.type';

export function ProductsTable({ products }: { products: Product[] }) {
  return (
    <Table className='mt-2'>
      <TableHeader>
        <TableRow>
          <TableHead />
          <TableHead>Name</TableHead>
          <TableHead>Description</TableHead>
          <TableHead>Price</TableHead>
          <TableHead>Discount</TableHead>
          <TableHead>Actual Price</TableHead>
          <TableHead />
        </TableRow>
      </TableHeader>

      <TableBody>
        {products.map(product => (
          <TableRow key={product.id}>
            <TableCell>
              <Image
                width={150}
                height={150}
                className='rounded-md aspect-square min-w-[100px]'
                alt=''
                src='https://images.unsplash.com/photo-1699306176646-ebda98581b74?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8eW9nYSUyMHByb2R1Y3R8ZW58MHx8MHx8fDA%3D'
              />
            </TableCell>
            <TableCell className='font-medium'>{product.name}</TableCell>
            <TableCell>
              <p className='line-clamp-2'>{product.description}</p>
            </TableCell>
            <TableCell>
              ${(((100 - product.discount) * product.price) / 100).toFixed(2)}
            </TableCell>
            <TableCell>{product.discount.toPrecision(2)}%</TableCell>
            <TableCell>${product.price.toFixed(2)}</TableCell>
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
                    <Link href={`/products/${product.id}`}>
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
                      navigator.clipboard.writeText(product.id);
                    }}
                  >
                    <PencilIcon className='text-emerald-500' /> Edit
                  </DropdownMenuItem>
                  <DropdownMenuItem
                    asChild
                    className='focus:bg-destructive/5'
                    onClick={() => {
                      navigator.clipboard.writeText(product.id);
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
