import { z } from 'zod';

import { productCreateSchema } from '../schema/product';
import { getURI } from '.';

import type {
  MultipleProductsResponse,
  SingleProductResponse,
} from '@/types.type';

export async function getAllProducts() {
  return fetch(getURI('/api/products'), { cache: 'no-cache' }).then(
    res => res.json() as Promise<MultipleProductsResponse>
  );
}

export async function getProductById(id: string) {
  return fetch(getURI(`/api/products/${id}`), {
    cache: 'no-cache',
  }).then(res => res.json() as Promise<SingleProductResponse>);
}

export async function getSortedProducts({ asc = false }: { asc: boolean }) {
  return fetch(getURI('/api/products', { sort: asc ? 'asc' : 'desc' })).then(
    res => res.json() as Promise<MultipleProductsResponse>
  );
}

export async function getFeaturedProducts(args?: { limit?: number }) {
  return fetch(
    getURI('/api/products', {
      filter: 'featured-only',
      limit: (args?.limit || 4).toString(),
    })
  ).then(res => res.json() as Promise<MultipleProductsResponse>);
}

export async function createProduct(
  values: z.infer<typeof productCreateSchema>
) {
  return fetch(getURI('/api/products'), {
    method: 'POST',
    body: JSON.stringify(values),
  }).then(res => res.json() as Promise<SingleProductResponse>);
}
