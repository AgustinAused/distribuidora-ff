const Nosotros = () => (
    <div>
        <p className="text-gray-800 text-center">Distribuidora FF, una empresa dedicada a proveer autopartes de alta calidad a los mejores precios.</p>
        <div className="mt-8">
            <iframe
                width="100%"
                height="450"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                src="https://www.google.com/maps/embed/v1/place?q=Direccion+de+Distribuidora+XYZ&key=YOUR_GOOGLE_MAPS_API_KEY"
            ></iframe>
        </div>
    </div>
);

export default Nosotros;
