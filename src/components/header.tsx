"use client";
import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const Header = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header>
      <div className="flex justify-between items-center h-16 text-white px-5 lg:px-10">
        {/* Animación para "Blaze Store" (solo en desktop) */}
        <motion.div
          className="ml-5 font-poppins font-bold text-2xl hidden lg:block"
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }} // Animación cuando entra en vista
          transition={{ duration: 1 }}
          viewport={{ once: false }} // Animación se repite cada vez que entra en vista
        >
          Blaze Store
        </motion.div>
        {/* Barra de navegación animada desde abajo hacia arriba */}
        <motion.nav
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }} // Animación cuando entra en vista
          transition={{ duration: 1 }}
          viewport={{ once: false }} // Animación se repite cada vez que entra en vista
        >
          {/* Menú en desktop */}
          <ul className="hidden lg:flex justify-between items-center font-poppins font-bold">
            <motion.li
              className="mx-5 cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }} // Animación cuando entra en vista
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: false }} // Animación se repite cada vez que entra en vista
              onClick={() => scrollToSection("home")}
            >
              Inicio
            </motion.li>
            <motion.li
              className="mx-5 cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }} // Animación cuando entra en vista
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: false }} // Animación se repite cada vez que entra en vista
              onClick={() => scrollToSection("about")}
            >
              ¿Qué es Blaze?
            </motion.li>
            <motion.li
              className="mx-5 cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }} // Animación cuando entra en vista
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: false }} // Animación se repite cada vez que entra en vista
              onClick={() => scrollToSection("oversize")}
            >
              Oversize
            </motion.li>
            <motion.li
              className="mx-5 cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }} // Animación cuando entra en vista
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: false }} // Animación se repite cada vez que entra en vista
              onClick={() => scrollToSection("prints")}
            >
              Estampados
            </motion.li>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }} // Animación cuando entra en vista
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: false }} // Animación se repite cada vez que entra en vista
            >
              <a
                href="https://wa.me/3004577246?text=Hola!%20Estoy%20interesado%20en%20el%20estampado%20Blaze%208.1..."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-custom-orange w-24 h-12">Comprar</Button>
              </a>
            </motion.div>
          </ul>

          {/* Menú en móvil */}
          <ul className="lg:hidden flex justify-between items-center w-full space-x-4">
            <motion.li
              className="cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }} // Animación cuando entra en vista
              transition={{ duration: 1, delay: 0.2 }}
              viewport={{ once: false }} // Animación se repite cada vez que entra en vista
              onClick={() => scrollToSection("home")}
            >
              Inicio
            </motion.li>
            <motion.li
              className="cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }} // Animación cuando entra en vista
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: false }} // Animación se repite cada vez que entra en vista
              onClick={() => scrollToSection("about")}
            >
              ¿Qué es Blaze?
            </motion.li>
            <motion.li
              className="cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }} // Animación cuando entra en vista
              transition={{ duration: 1, delay: 0.4 }}
              viewport={{ once: false }} // Animación se repite cada vez que entra en vista
              onClick={() => scrollToSection("oversize")}
            >
              Oversize
            </motion.li>
            <motion.li
              className="cursor-pointer"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }} // Animación cuando entra en vista
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: false }} // Animación se repite cada vez que entra en vista
              onClick={() => scrollToSection("prints")}
            >
              Estampados
            </motion.li>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }} // Animación cuando entra en vista
              transition={{ duration: 1, delay: 0.8 }}
              viewport={{ once: false }} // Animación se repite cada vez que entra en vista
            >
              <a
                href="https://wa.me/3004577246?text=Hola!%20Estoy%20interesado%20en%20el%20estampado%20Blaze%208.1..."
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button className="bg-custom-orange w-24 h-12">Comprar</Button>
              </a>
            </motion.div>
          </ul>
        </motion.nav>
      </div>
    </header>
  );
};

export default Header;
