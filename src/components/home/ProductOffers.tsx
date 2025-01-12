import Image from 'next/image';
import { FaImage } from 'react-icons/fa'; // Importa un ícono de FontAwesome o React Icons

interface Offer {
    special_offer: boolean
    offer_details: string
    percentage_discount: number,
    price: number,
    _id: string
    autopart_id: string
    name: string
    description: string
    category: string
    stock: number
    image: string
}

const ProductOffers = (props: { offers: Offer[] }) => (
  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {props.offers.map((offer) => (
      <div key={offer._id} className="bg-white shadow-lg rounded-lg p-4">
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
        <p className="text-green-600 font-bold mt-2">{offer.price - offer.price / 100 * offer.percentage_discount}</p>
        <p className="text-gray-600 mt-2">{offer.offer_details}</p>
      </div>
    ))}
  </div>
);

export default ProductOffers;
