"use client";
import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative w-full h-screen">
      <div className="flex h-full md:flex-row flex-col">
        {/* Animación para el título principal */}
        <motion.div
          className="relative w-full h-full"
          initial={{ opacity: 0, x: -100 }} // Empieza desde la izquierda
          whileInView={{ opacity: 1, x: 0 }} // Aparece cuando entra en vista
          transition={{ duration: 1 }}
          viewport={{ once: false }} // Para que se repita cada vez que entre en vista
        >
          <h1 className="font-poppins font-bold text-[210px] md:text-[210px] flex justify-center items-center text-white">
            Blaze Store
          </h1>
        </motion.div>

        {/* Animación para la imagen de héroe */}
        <motion.div
          className="absolute w-[92%] ml-[8%] h-full flex justify-center items-center mt-20 md:mt-0"
          initial={{ opacity: 0, y: 50 }} // Empieza desde abajo
          whileInView={{ opacity: 1, y: 0 }} // Aparece cuando entra en vista
          transition={{ duration: 1, delay: 0.2 }}
          viewport={{ once: false }} // Para que se repita cada vez que entre en vista
        >
          <Image
            src="/HeroImage.png"
            alt="img"
            width={600} // Reducido el tamaño de la imagen principal
            height={600}
            className="object-contain"
          />
        </motion.div>

        {/* Animación para el texto descriptivo y el botón */}
        <motion.div
          className="absolute w-full flex justify-between mt-[350px] hidden md:flex"
          initial={{ opacity: 0, x: -50 }} // Empieza desde la izquierda
          whileInView={{ opacity: 1, x: 0 }} // Aparece cuando entra en vista
          transition={{ duration: 1, delay: 0.6 }}
          viewport={{ once: false }} // Para que se repita cada vez que entre en vista
        >
          <p className="text-left w-[40%] ml-5 font-poppins font-bold text-white text-3xl">
            Oversize <span className="text-custom-orange">premium 1.1</span> en
            tela burda de 260g, con corte único y diseñadas para quienes marcan
            la <span className="text-custom-orange">diferencia.</span>
            <br />
            <a
              href="https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20el%20estampado%20Blaze%208.1..."
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button className="bg-custom-orange mt-6 w-48 h-12 text-xl font-poppins font-bold">
                Comprar Ahora!
              </Button>
            </a>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
