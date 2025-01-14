import React from 'react';
import Prints from './prints';

const collectionPrints = () => {

  const collectionPrints = [
    {
      title: "Estampado Blaze 1.1",
      description: "Estampados de alta calidad ✅ ¡Exclusivos y únicos! ✨ Si buscas algo especial, también podemos estampar el diseño que prefieras, ¡totalmente personalizado! 🎨",
      imageSrc: "/estampado1.webp",
      imageAlt: "Print 1",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20el%20estampado%20Blaze%201.1...",
    },
    {
      title: "Estampado Blaze 2.1",
      description: "Estampados de alta calidad ✅ Además, ¡puedes tenerlo exclusivo para ti! ✨ Estampamos tu diseño personalizado con todo el estilo que mereces 🖌️",
      imageSrc: "/estampado4.webp",
      imageAlt: "Print 2",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20el%20estampado%20Blaze%202.1...",
    },
    {
      title: "Estampado Blaze 3.1",
      description: "Estampados de alta calidad ✅ ¡Y si deseas algo más especial, podemos crear un diseño totalmente exclusivo para ti! ✨ Personalizado solo para ti 🎨",
      imageSrc: "/estampado5.webp",
      imageAlt: "Print 3",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20el%20estampado%20Blaze%203.1...",
    },
    {
      title: "Estampado Blaze 4.1",
      description: "Estampados de alta calidad ✅ ¿Tienes una idea única? ✨ ¡Lo hacemos tuyo, estampado y totalmente personalizado solo para ti! 🎨",
      imageSrc: "/estampado6.webp",
      imageAlt: "Print 4",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20el%20estampado%20Blaze%204.1...",
    },
    {
      title: "Estampado Blaze 5.1",
      description: "Estampados de alta calidad ✅ ¡Lo que te imagines, lo podemos estampar! ✨ Diseños exclusivos para ti, ¡siempre personalizados! 🎨",
      imageSrc: "/estampado7.webp",
      imageAlt: "Print 5",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20el%20estampado%20Blaze%205.1...",
    },
    {
      title: "Estampado Blaze 6.1",
      description: "Estampados de alta calidad ✅ Si prefieres algo realmente único, ¡lo hacemos exclusivo para ti! ✨ Personalización total a tu gusto 🖌️",
      imageSrc: "/estampado8.webp",
      imageAlt: "Print 6",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20el%20estampado%20Blaze%206.1...",
    },
    {
      title: "Estampado Blaze 7.1",
      description: "Estampados de alta calidad ✅ ¡Hazlo tuyo con un diseño personalizado! ✨ Exclusividad y calidad solo para ti 🖌️",
      imageSrc: "/estampado9.webp",
      imageAlt: "Print 7",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20el%20estampado%20Blaze%207.1...",
    },
    {
      title: "Estampado Blaze 8.1",
      description: "Estampados de alta calidad ✅ Si quieres algo especial, ¡lo personalizamos solo para ti! ✨ Exclusividad en cada diseño 🖌️",
      imageSrc: "/estampado10.webp",
      imageAlt: "Print 8",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20el%20estampado%20Blaze%208.1...",
    },
    {
      title: "Estampado Blaze 9.1",
      description: "Estampados de alta calidad ✅ Y si tienes una idea propia, ¡nosotros lo hacemos realidad! ✨ Estampa tu diseño exclusivo solo para ti 🖌️",
      imageSrc: "/estampado11.webp",
      imageAlt: "Print 9",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20el%20estampado%20Blaze%209.1...",
    },
  ];

  return (
    <div>
      <Prints items={collectionPrints} />
    </div>
  );
}

export default collectionPrints;
