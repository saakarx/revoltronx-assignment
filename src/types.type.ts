export type Blog = {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  keywords: string[];
  tags: string[];
  isFeatured: boolean;
  createdAt: Date;
  updatedAt: Date;
};

export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  isFeatured: boolean;
  images: string[];
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
