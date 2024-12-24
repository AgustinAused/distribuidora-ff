import Link from 'next/link';
import ImageCarousel from '@/components/home/ImageCarousel';
import ProductOffers from '@/components/home/ProductOffers';

const Home = () => (
    <section id="home" className="py-20 text-center">
        <div className="container mx-auto px-6">
            {/* Título Principal */}
            <h1 className="text-4xl font-extrabold text-green-600">
                Distribuidora FF
            </h1>
            <p className="mt-4 text-gray-700 text-lg">
                La mejor opción para tus autopartes de alta calidad.
            </p>

            {/* Carrusel de Imágenes */}
            <div className="my-8">
                <ImageCarousel />
            </div>

            {/* Ofertas de Productos */}
            <div className="my-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Ofertas Especiales
                </h2>
                <ProductOffers />
            </div>

            {/* Botón para Ver Más Productos */}
            <div className="mt-8">
                <Link
                    href="/products"
                    className="inline-block bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
                >
                    Ver productos
                </Link>
            </div>
        </div>
    </section>
);

export default Home;
