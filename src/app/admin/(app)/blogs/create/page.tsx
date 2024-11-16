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

import { createBlog } from '@/api/blogs';
import { blogCreateSchema } from '@/schema/blog';

function CreateBlogPage() {
  const router = useRouter();

  const form = useForm<z.infer<typeof blogCreateSchema>>({
    resolver: zodResolver(blogCreateSchema),
    defaultValues: {
      title: '',
      excerpt: '',
      content: '',
      keywords: '',
      tags: '',
      isFeatured: false,
    },
  });

  async function onSubmit(values: z.infer<typeof blogCreateSchema>) {
    await createBlog(values);
    router.push('/admin/blogs');
  }

  return (
    <main className='py-10 px-6'>
      <h1 className='text-3xl font-semibold'>Create Blog</h1>

      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className='space-y-6 mt-10'
        >
          <FormField
            control={form.control}
            name='title'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input
                    placeholder='Yoga for Stress Relief: Poses and Breathing Techniques'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='excerpt'
            render={({ field }) => (
              <FormItem>
                <FormLabel>Excerpt</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder='Explore the best yoga poses and breathing techniques to relieve stress and find your inner calm.'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='content'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Content (
                  <span className='text-indigo-500 font-bold'>in Markdown</span>
                  )
                </FormLabel>
                <FormControl>
                  <Textarea
                    rows={8}
                    placeholder={`Yoga is a great way to improve flexibility, reduce stress, and build strength. If you're new to yoga, here are 10 beginner-friendly poses to get you started:

## 1. Mountain Pose (Tadasana)

- Stand tall with your feet together.
- Relax your shoulders and engage your core.
- Breathe deeply, focusing on grounding yourself.
...`}
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='keywords'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Keywords (
                  <span className='text-indigo-500 font-bold'>
                    Comma Separated
                  </span>
                  )
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='yoga,stress relief,breathing techniques,relaxation,...'
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name='tags'
            render={({ field }) => (
              <FormItem>
                <FormLabel>
                  Tags (
                  <span className='text-indigo-500 font-bold'>
                    Comma Separated
                  </span>
                  )
                </FormLabel>
                <FormControl>
                  <Input
                    placeholder='stress relief,yoga,breathing,...'
                    {...field}
                  />
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
                  Create Blog <ArrowRightIcon />
                </>
              )}
            </Button>
          </div>
        </form>
      </Form>
    </main>
  );
}

export default CreateBlogPage;
