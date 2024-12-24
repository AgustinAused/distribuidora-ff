'use client';

import React, { useState, useEffect } from 'react';
import ProductGrid from '@/components/produtcs/ProductGrid';
import { Spinner } from '@material-tailwind/react';

interface Product {
  id: number;
  name: string;
  description: string;
  price: string;
  image: string;
}

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       const response = await fetch('https://fakestoreapi.com/products');
  //       const data = await response.json();
  //       setProducts(data);
  //     } catch (error) {
  //       console.error('Error al cargar productos:', error);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };
  //   fetchData();
  // }, []);

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12">
          Nuestro Catálogo de Productos
        </h2>
        {loading ? (
          <div className="flex justify-center items-center">
            <Spinner className="h-16 w-16 text-gray-900/50" onPointerEnterCapture={() => {}} onPointerLeaveCapture={() => {}} />
          </div>
        ) : products.length > 0 ? (
          <ProductGrid products={products} />
        ) : (
          <p className="text-center text-gray-500">No hay productos disponibles.</p>
        )}
      </div>
    </div>
  );
}
