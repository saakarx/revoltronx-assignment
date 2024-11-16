import { NextRequest } from 'next/server';

import { connectDB, ProductModel } from '@/db';
import { productCreateSchema } from '@/schema/product';

import type { Product } from '@/types.type';
import { SortOrder } from 'mongoose';

export async function GET(req: NextRequest) {
  await connectDB();

  const searchParams = req.nextUrl.searchParams;
  const filter = searchParams.get('filter');
  const sort = searchParams.get('sort');

  const queryFilter: { [key: string]: unknown } = {};
  const sortFilter: { [key: string]: SortOrder } = {};

  if (filter && filter === 'featured-only') {
    queryFilter.isFeatured = true;
  }
  if (sort) {
    if (sort === 'asc') sortFilter.createdAt = 'asc';
    else if (sort === 'desc') sortFilter.createdAt = 'desc';
  }

  const dbProducts = await ProductModel.find(queryFilter).sort(sortFilter);
  const products: Product[] = dbProducts.map(
    product =>
      ({
        id: product.id,
        name: product.name,
        description: product.description,
        images: product.images,
        price: product.price,
        discount: product.discount,
        isFeatured: product.isFeatured,
        createdAt: new Date(product.createdAt),
        updatedAt: new Date(product.updatedAt),
      } satisfies Product)
  );

  return Response.json(
    { message: 'Success', products: products },
    { status: 200 }
  );
}

export async function POST(req: Request) {
  await connectDB();

  const body = await req.json();
  const parsedBody = productCreateSchema.parse(body);

  const dbProduct = await ProductModel.create({
    name: parsedBody.name,
    description: parsedBody.description,
    images: [],
    price: parsedBody.price,
    discount: parsedBody.discount,
    isFeatured: parsedBody.isFeatured,
  });

  const product: Product = {
    id: dbProduct.id,
    name: dbProduct.name,
    description: dbProduct.description,
    images: dbProduct.images,
    price: dbProduct.price,
    discount: dbProduct.discount,
    isFeatured: dbProduct.isFeatured,
    createdAt: dbProduct.createdAt,
    updatedAt: dbProduct.updatedAt,
  };

  return Response.json(
    { message: 'Success', product: product },
    { status: 201 }
  );
}
