import { NextRequest } from 'next/server';

import { connectDB, ProductModel } from '@/db';
import type { Product } from '@/types.type';

export async function GET(
  req: NextRequest,
  {
    params,
  }: {
    params: Promise<{ productId: string }>;
  }
) {
  await connectDB();

  const productId = (await params).productId;

  const dbProduct = await ProductModel.findById(productId);
  if (dbProduct === null)
    return Response.json(
      { message: 'Not Found', product: null },
      { status: 404 }
    );

  const product: Product = {
    id: dbProduct.id,
    name: dbProduct.name,
    description: dbProduct.description,
    price: dbProduct.price,
    discount: dbProduct.discount,
    isFeatured: dbProduct.isFeatured || false,
    images: [],
    createdAt: new Date(dbProduct.createdAt),
    updatedAt: new Date(dbProduct.updatedAt),
  };

  return Response.json(
    { message: 'Success', product: product },
    { status: 200 }
  );
}
