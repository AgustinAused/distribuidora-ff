'use client';
import Home from '@/components/home/Home';
import React, {useEffect, useState} from 'react';
import { getOffers } from '@/api/productsApi';

export default function HomePage() {
  const [offers, setOffers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
          try {
            const response = await getOffers();
            setOffers(response);
          } catch (error) {
            console.error('Error al cargar productos:', error);
          } finally {
            setLoading(false);
          }
        };
        fetchData();
  }, []);


  return (
    <div className="font-sans text-gray-800">
      <Home offers={offers} />
    </div>
  );
}
