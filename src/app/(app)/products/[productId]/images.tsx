'use client';

import Image from 'next/image';
import { useState } from 'react';

export function Images({
  images,
  productName,
}: {
  images: string[];
  productName: string;
}) {
  const [mainImage, setMainImage] = useState(images[0]);

  return (
    <div className='space-y-4'>
      <div className='relative aspect-square'>
        <Image
          src={mainImage}
          alt={productName}
          layout='fill'
          objectFit='cover'
          className='rounded-lg'
        />
      </div>
      <div className='grid grid-cols-4 gap-2'>
        {images.map((img, index) => (
          <button
            key={index}
            onClick={() => setMainImage(img)}
            className='relative aspect-square overflow-hidden rounded-md'
          >
            <Image
              src={img}
              alt={`${productName} thumbnail ${index + 1}`}
              layout='fill'
              objectFit='cover'
              className='hover:opacity-75 transition-opacity'
            />
          </button>
        ))}
      </div>
    </div>
  );
}
