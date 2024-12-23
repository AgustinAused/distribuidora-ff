import Image from 'next/image';
import { FaImage } from 'react-icons/fa'; // Importa un ícono de FontAwesome o React Icons

const offers = [
  {
    id: 1,
    name: 'Filtro de Aceite Premium',
    price: '$15.00',
    image: null, // Imagen existente
  },
  {
    id: 2,
    name: 'Batería Alta Potencia',
    price: '$120.00',
    image: '', // Sin imagen
  },
  {
    id: 3,
    name: 'Juego de Pastillas de Freno',
    price: '$45.00',
    image: null, // Sin imagen
  },
];

const ProductOffers = () => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {offers.map((offer) => (
      <div key={offer.id} className="bg-white shadow-lg rounded-lg p-4">
        {/* Contenedor de la Imagen */}
        <div className="w-full h-40 bg-gray-200 flex items-center justify-center rounded-md">
          {offer.image ? (
            <Image
              src={offer.image}
              alt={offer.name}
              className="w-full h-full object-cover rounded-md"
            />
          ) : (
            <FaImage className="text-gray-400 text-6xl" />
          )}
        </div>

        {/* Detalles del Producto */}
        <h3 className="mt-4 text-lg font-semibold text-gray-800">
          {offer.name}
        </h3>
        <p className="text-green-600 font-bold mt-2">{offer.price}</p>
      </div>
    ))}
  </div>
);

export default ProductOffers;
