import React from 'react';
import Image from 'next/image';
import { FaImage } from 'react-icons/fa';

interface ProductCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
  onBuyClick: () => void;
}

const ProductCard: React.FC<ProductCardProps> = ({ image, name, description, price, onBuyClick }) => (
  <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
    <div className='justify-center items-center h-48 w-full bg-gray-200'>
    {image ? (
                <Image
                  src={image}
                  alt={name}
                  className="w-full h-full object-cover rounded-md"
                />
              ) : (
                <FaImage className="text-gray-400 h-48 w-full" />
              )}
    </div>
    
    <div className="p-4">
      <h3 className="text-lg font-semibold text-pastel-dark">{name}</h3>
      <p className="text-sm text-pastel-gray mt-2">{description}</p>
      <p className="text-lg font-bold text-pastel-green mt-4">${price}</p>
      <button
        onClick={onBuyClick}
        className="mt-4 bg-pastel-green text-white py-2 px-4 rounded-lg hover:bg-pastel-dark-green transition-colors"
      >
        Comprar Ahora
      </button>
    </div>
  </div>
);

export default ProductCard;
