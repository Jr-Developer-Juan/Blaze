/* eslint-disable react/no-unescaped-entities */


"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import { FaWhatsapp, FaFacebookF, FaInstagram, FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className="bg-black py-16 mt-16">
      {/* Separador superior */}
      <motion.div
        className="flex justify-center mb-10"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="border-t-4 border-custom-orange w-[90%] md:w-[80%]"></div>
      </motion.div>

      {/* Contenedor principal para la distribución */}
      <div className="flex flex-col md:flex-row justify-between items-center px-8 md:px-24 space-y-10 md:space-y-0">
        {/* Información izquierda */}
        <motion.div
          className="text-center md:text-left w-full md:w-1/3 space-y-6"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="font-poppins font-bold text-4xl text-white mb-4">Blaze Store</h2>
          <p className="text-lg mb-6 text-white">
            Y recuerda, <span className="font-semibold text-custom-orange">"Vestir Oversize no es vestir Tallas más grandes"</span>, 
            el corte de nuestras prendas es lo que hace la diferencia: un diseño oversize, creado para que 
            te sientas libre, auténtico y a la moda. 🧢
          </p>
          {/* Botón de contacto directo */}
          <a
            href="https://wa.me/3004577246?text=Hola!%20Estoy%20interesado%20en%20el%20Oversize%20Blaze%208.1..."
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button className="bg-custom-orange mt-6 w-48 h-12 text-xl font-poppins font-bold hover:bg-orange-500 transition duration-300">
              ¡Hablemos Ahora!
            </Button>
          </a>
        </motion.div>

        {/* Información central */}
        <motion.div
          className="text-center w-full md:w-1/3 space-y-6"
          initial={{ y: -100, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-poppins font-bold text-xl text-white mb-4">Síguenos en Redes Sociales</h3>
          <motion.div
            className="flex justify-center space-x-10 mt-6"
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          >
            {/* WhatsApp */}
            <a
              href="https://wa.me/3004577246"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-orange text-4xl hover:text-white transition duration-300"
            >
              <FaWhatsapp />
            </a>
            {/* Facebook */}
            <a
              href="https://www.facebook.com/profile.php?id=100009451163083"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-orange text-4xl hover:text-white transition duration-300"
            >
              <FaFacebookF />
            </a>
            {/* Instagram */}
            <a
              href="https://www.instagram.com/esteban__.64"
              target="_blank"
              rel="noopener noreferrer"
              className="text-custom-orange text-4xl hover:text-white transition duration-300"
            >
              <FaInstagram />
            </a>
          </motion.div>
        </motion.div>

        {/* Información derecha */}
        <motion.div
          className="text-center md:text-left w-full md:w-1/3 space-y-6"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h3 className="font-poppins font-bold text-xl text-white mb-4">Ubicación</h3>
          <p className="text-white text-lg mb-6 flex items-center justify-center md:justify-start">
            <FaMapMarkerAlt /> Medellín, Colombia
          </p>
          <div className="mt-6">
            <p className="text-white text-xl font-poppins font-bold">Desarrollador: Juan Esteban</p>
            <p className="text-white text-lg">Desarrollador de software</p>
          </div>
        </motion.div>
      </div>

      {/* Separador central */}
      <motion.div
        className="flex justify-center mt-16 mb-6"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <div className="border-t-4 border-custom-orange w-[90%] md:w-[80%]"></div>
      </motion.div>

      {/* Derechos Reservados */}
      <motion.div
        className="text-center text-white text-sm mt-6"
        initial={{ y: 100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <p>&copy; 2025 Blaze Store. Todos los derechos reservados.</p>
        <p className="mt-4">
          Creado<span className="text-red-500"></span> por el equipo de Blaze. ¡Viste con estilo, Viste Oversize!
        </p>
      </motion.div>
    </div>
  );
};

export default Footer;
