"use client"

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

interface CollectionItem {
  title: string;
  description: string;
  imageSrc: string;
  buttonText: string;
  buttonLink: string;
}

interface CollectionProps {
  items: CollectionItem[];
}

const prints: React.FC<CollectionProps> = ({ items }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 p-5">
      {items.map((item, index) => (
        <motion.div
          key={index}
          className="max-w-sm bg-stone-950 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
          initial={{
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100, // Alterna la dirección horizontal
            y: index % 3 === 0 ? 100 : 0, // Alterna la dirección vertical
          }}
          whileInView={{ opacity: 1, x: 0, y: 0 }} // Animación cuando el componente entra en el viewport
          exit={{
            opacity: 0,
            x: index % 2 === 0 ? -100 : 100,
            y: index % 3 === 0 ? 100 : 0,
          }} // Animación al salir
          transition={{ duration: 0.3, delay: index * 0.1 }} // Acelera la animación
          viewport={{ once: false }} // Animación al entrar y salir repetidamente
        >
          <a href="#">
            <motion.div
              className="relative w-full h-[350px]"
              initial={{ scale: 0.8 }}
              whileInView={{ scale: 1 }} // Animación de escala al hacer scroll
              transition={{ duration: 0.3 }} // Acelera la animación
              viewport={{ once: false }}
            >
              <Image
                src={item.imageSrc}
                alt={item.title}
                layout="fill"
                objectFit="cover"
                className="rounded-t-lg"
              />
            </motion.div>
          </a>
          <motion.div
            className="p-5"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }} // Animación de opacidad y movimiento en el eje Y
            transition={{ duration: 0.3, delay: index * 0.1 }} // Acelera la animación
            viewport={{ once: false }}
          >
            <a href="#">
              <motion.h5
                className="mb-2 text-2xl font-bold tracking-tight text-custom-orange dark:text-white"
                initial={{ x: -50, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }} // Animación de movimiento en el eje X y opacidad
                transition={{ duration: 0.3, delay: index * 0.1 }} // Acelera la animación
                viewport={{ once: false }}
              >
                {item.title}
              </motion.h5>
            </a>
            <motion.p
              className="mb-3 font-bold font-poppins text-white dark:text-gray-400"
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }} // Animación de movimiento en el eje X y opacidad
              transition={{ duration: 0.3, delay: index * 0.1 }} // Acelera la animación
              viewport={{ once: false }}
            >
              {item.description}
            </motion.p>
            <motion.a
              href={item.buttonLink}
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-custom-orange rounded-lg focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }} // Animación de escala y opacidad
              transition={{ duration: 0.3, delay: index * 0.1 }} // Acelera la animación
              viewport={{ once: false }}
            >
              {item.buttonText}
            </motion.a>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default prints;
