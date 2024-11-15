import { z } from 'zod';

import { productCreateSchema } from './schema/product';
import { blogCreateSchema } from './schema/blog';

export type Blog = z.infer<typeof blogCreateSchema> & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

export type Product = z.infer<typeof productCreateSchema> & {
  id: string;
  createdAt: Date;
  updatedAt: Date;
};

type Response = {
  message: string;
};

export type MultipleProductsResponse = Response & {
  products: Product[];
};

export type SingleProductResponse = Response & {
  product: Product;
};

export type MultipleBlogsResponse = Response & {
  blogs: Blog[];
};

export type SingleBlogResponse = Response & {
  blog: Blog;
};
