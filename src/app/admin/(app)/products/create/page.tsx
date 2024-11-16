'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { ArrowRightIcon, LoaderIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useForm } from 'react-hook-form';
import { z } from 'zod';

import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';

import { createProduct } from '@/api/products';
import { productCreateSchema } from '@/schema/product';

function AdminCreateProductPage() {
  const router = useRouter();

  const form = useForm<z.infer<typeof productCreateSchema>>({
    resolver: zodResolver(productCreateSchema),
    defaultValues: {
      name: '',
      description: '',
      discount: 0,
      isFeatured: false,
      price: 0,
    },
  });

  async function onSubmit(values: z.infer<typeof productCreateSchema>) {
    const res = await createProduct(values);
    router.push('/admin/products');
  }

  return (
    <main className='py-10 px-6'>
      <h1 className='text-3xl font-semibold'>Create Product</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6 mt-10'
        >
          <FormField
            control={form.control}
            name='name'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder='Yoga Mat' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='description'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='A high-quality, eco-friendly yoga mat made from natural materials, designed for durability and comfort.'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='price'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Price</FormLabel>
                <FormControl>
                  <Input placeholder='17.99' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='discount'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Discount</FormLabel>
                <FormControl>
                  <Input placeholder='10' {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='isFeatured'
            render={({ field }) => (
              <FormItem className='flex items-center gap-1.5 space-y-0'>
                <FormControl>
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                  />
                </FormControl>
                <FormLabel>Is featured?</FormLabel>
              </FormItem>
            )}
          />

          <div>
            <Button
              className='mt-3 rounded-xl shadow-lg'
              type='submit'
              disabled={form.formState.isSubmitting}
            >
              {form.formState.isSubmitting ? (
                <span className='px-14'>
                  <LoaderIcon className='animate-spin' />
                </span>
              ) : (
                <>
                  Create Product <ArrowRightIcon />
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
}

export default AdminCreateProductPage;
