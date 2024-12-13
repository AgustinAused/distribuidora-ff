'use client';

import React, { useState, useEffect } from 'react';
import ProductGrid from '@/components/produtcs/ProductGrid';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const response = await fetch('https://fakestoreapi.com/products');
  //     const data = await response.json();
  //     setProducts(data);
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="bg-pastel-blue min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-pastel-dark mb-12">
          Nuestro Catálogo de Productos
        </h2>
        <ProductGrid products={products} />
      </div>
    </div>
  );
}
