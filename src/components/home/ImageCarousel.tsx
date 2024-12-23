'use client';
import Image from 'next/image';
import React, { useState } from 'react';

const images: string | any[] = [
//   '/images/product1.jpg',
//   '/images/product2.jpg',
//   '/images/product3.jpg',
];

const ImageCarousel = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((prev) => (prev + 1) % images.length);
  const prevSlide = () => setCurrent((prev) => (prev - 1 + images.length) % images.length);

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-lg">
      <Image
        src={images[current]}
        alt={`Slide ${current}`}
        className="w-full h-64 object-cover"
      />
      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-4 bg-white p-2 rounded-full shadow-lg transform -translate-y-1/2"
      >
        &#8592;
      </button>
      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-4 bg-white p-2 rounded-full shadow-lg transform -translate-y-1/2"
      >
        &#8594;
      </button>
    </div>
  );
};

export default ImageCarousel;
