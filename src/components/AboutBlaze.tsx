/* eslint-disable react/no-unescaped-entities */


"use client";

import React from "react";
import { motion } from "framer-motion";

const AboutBlaze = () => {
  return (
    <section className="bg-black text-white py-16 px-4 font-poppins font-semibold">
      <div className="max-w-6xl mx-auto text-center">
        {/* Título animado */}
        <motion.h2
          className="text-4xl font-bold mb-4 text-custom-orange"
          initial={{ opacity: 0, x: -100 }} // Animación inicial
          whileInView={{ opacity: 1, x: 0 }} // Animación cuando entra en la vista
          exit={{ opacity: 0, x: 100 }} // Animación al salir
          transition={{ duration: 0.8 }}
          viewport={{ once: false }} // Animación repetida
        >
          Blaze Store 🔥
        </motion.h2>

        {/* Primer párrafo animado */}
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 50 }} // Animación inicial
          whileInView={{ opacity: 1, y: 0 }} // Animación cuando entra en la vista
          transition={{ duration: 0.8 }}
          viewport={{ once: false }} // Animación repetida
        >
          Blaze nació con una misión clara: redefinir la forma en que nos vestimos, 
          apostando por la comodidad y el estilo en su versión más exclusiva. Todo empezó con una 
          inspiración profunda en el estilo oversize, buscando mejorar la manera de vestir y darle un toque único. 
          Blaze es más que una marca, es una forma de ver la moda, de vestir distinto, de destacar en cada paso. ✨
        </motion.p>

        {/* Segundo párrafo animado */}
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, x: 50 }} // Animación inicial
          whileInView={{ opacity: 1, x: 0 }} // Animación cuando entra en la vista
          transition={{ duration: 0.8 }}
          viewport={{ once: false }} // Animación repetida
        >
          El nombre Blaze proviene de uno de los raperos del icónico videojuego <i>Def Jam: Fight for NY</i> 
          (PS2), un tributo a su actitud irreverente y su estilo único. 
          Así como Blaze se destaca en el juego, nosotros buscamos que tú también te destaques 
          con nuestra línea de ropa. ¡Es más que vestir, es hacer una declaración! 🔥
        </motion.p>

        {/* Tercer párrafo animado */}
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, y: 50 }} // Animación inicial
          whileInView={{ opacity: 1, y: 0 }} // Animación cuando entra en la vista
          transition={{ duration: 0.8 }}
          viewport={{ once: false }} // Animación repetida
        >
          Nuestra tela es de alta calidad, con un grosor de 260g, lo que nos permite ofrecerte prendas gruesas pero 
          suaves, perfectas para quienes buscan vestir cómodo sin sacrificar el estilo. 💯
        </motion.p>

        {/* Cuarto párrafo animado */}
        <motion.p
          className="text-lg mb-6"
          initial={{ opacity: 0, x: -50 }} // Animación inicial
          whileInView={{ opacity: 1, x: 0 }} // Animación cuando entra en la vista
          transition={{ duration: 0.8 }}
          viewport={{ once: false }} // Animación repetida
        >
          Y recuerda, <span className="font-semibold text-custom-orange">"Vestir Oversize no es vestir Tallas más grandes"</span>, 
          el corte de nuestras prendas es lo que hace la diferencia: un diseño oversize, creado para que 
          te sientas libre, auténtico y a la moda. 🧢
        </motion.p>

        {/* Mensaje final animado */}
        <motion.p
          className="text-xl font-semibold text-custom-orange"
          initial={{ opacity: 0, y: -50 }} // Animación inicial
          whileInView={{ opacity: 1, y: 0 }} // Animación cuando entra en la vista
          transition={{ duration: 0.8 }}
          viewport={{ once: false }} // Animación repetida
        >
          ¡Bienvenido a Blaze, donde el estilo Oversize hace la diferencia! 🔥
        </motion.p>
      </div>
    </section>
  );
};

export default AboutBlaze;
