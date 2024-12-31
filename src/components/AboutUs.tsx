import React from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

const ContactSection = () => {
  return (
    <div className="">
      <p className="text-gray-800 text-center mb-8">
        Distribuidora FF, una empresa dedicada a proveer autopartes de alta calidad a los mejores precios.
      </p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Mapa a la izquierda */}
        <div className="h-full">
          <iframe
            width="100%"
            height="450"
            style={{ border: 0 }}
            loading="lazy"
            allowFullScreen
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3281.6656397597812!2d-59.431617724312936!3d-34.66314616063905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bc73062b0c50e7%3A0x5e22646ccc8d0b4c!2sDistribuidora%20Ff!5e0!3m2!1ses!2sar!4v1735611166866!5m2!1ses!2sar"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Información de contacto a la derecha */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <h2 className="text-2xl text-gray-800 font-semibold">Nuestra ubicación</h2>
          <div className="flex items-center space-x-3">
            <FaMapMarkerAlt className="text-blue-600 text-xl" />
            <span className="text-gray-700">123 Calle Ficticia, Buenos Aires, Argentina</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaPhone className="text-blue-600 text-xl" />
            <span className="text-gray-700">+54 11 1234-5678</span>
          </div>
          <div className="flex items-center space-x-3">
            <FaEnvelope className="text-blue-600 text-xl" />
            <span className="text-gray-700">contacto@distribuidoraff.com</span>
          </div>
          <div className="flex items-center justify-center space-x-4 mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FaFacebook className="text-blue-600 text-2xl hover:text-blue-800" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter className="text-blue-600 text-2xl hover:text-blue-800" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="text-blue-600 text-2xl hover:text-blue-800" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
