import Link from 'next/link';
 
const Home = () => (
    <section id="home" className="bg-gray-50 py-20 text-center">
        <div className="container mx-auto">
            <h1 className="text-4xl font-bold text-green-600">Distribuidora FF</h1>
            <p className="mt-4 text-gray-700">
                La mejor opción para tus autopartes de alta calidad.
            </p>
            {/* <Link id=''>
                Ver productos
            </Link> */}
        </div>
    </section>
);

export default Home;
