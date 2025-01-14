import React from 'react';
import Collection from './Collection';

const collectionItems = () => {

  const collectionItems = [
    {
      title: "Oversize Premium 1.1",
      description: "Disponible en todas las tallas: S, M, L, XL, XXL ✅✨",
      imageSrc: "/camiseta1.webp",
      imageAlt: "Shirt 1",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20la%20colección%20Oversize...",
    },
    {
      title: "Oversize Premium 1.1",
      description: "Disponible en todas las tallas: S, M, L, XL, XXL ✅✨",
      imageSrc: "/camiseta2.webp",
      imageAlt: "Shirt 2",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20la%20colección%20Oversize...",
    },
    {
      title: "Oversize Premium 1.1",
      description: "Disponible en todas las tallas: S, M, L, XL, XXL ✅✨",
      imageSrc: "/camiseta3.webp",
      imageAlt: "Shirt 3",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20la%20colección%20Oversize...",
    },
    {
      title: "Oversize Premium 1.1",
      description: "Disponible en todas las tallas: S, M, L, XL, XXL ✅✨",
      imageSrc: "/camiseta5.webp",
      imageAlt: "Shirt 4",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20la%20colección%20Oversize...",
    },
    {
      title: "Oversize Premium 1.1",
      description: "Disponible en todas las tallas: S, M, L, XL, XXL ✅✨",
      imageSrc: "/camiseta6.webp",
      imageAlt: "Shirt 5",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20la%20colección%20Oversize...",
    },
    {
      title: "Oversize Premium 1.1",
      description: "Disponible en todas las tallas: S, M, L, XL, XXL ✅✨",
      imageSrc: "/camiseta7.webp",
      imageAlt: "Shirt 6",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20la%20colección%20Oversize...",
    },
    {
      title: "Oversize Premium 1.1",
      description: "Disponible en todas las tallas: S, M, L, XL, XXL ✅✨",
      imageSrc: "/camiseta8.webp",
      imageAlt: "Shirt 7",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20la%20colección%20Oversize...",
    },
    {
      title: "Oversize Premium 1.1",
      description: "Disponible en todas las tallas: S, M, L, XL, XXL ✅✨",
      imageSrc: "/camiseta9.jpg",
      imageAlt: "Shirt 8",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20la%20colección%20Oversize...",
    },
    {
      title: "Oversize Premium 1.1",
      description: "Disponible en todas las tallas: S, M, L, XL, XXL ✅✨",
      imageSrc: "/camiseta10.jpg",
      imageAlt: "Shirt 9",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20la%20colección%20Oversize...",
    },
    {
      title: "Oversize 1.1 Talla S",
      description: "Disponible en todas las tallas: S ✅✨",
      imageSrc: "/tallaS.jpg",
      imageAlt: "Shirt 9",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20la%20colección%20Oversize...",
    },
    {
      title: "Oversize 1.1 Talla M",
      description: "Disponible en todas las tallas: M ✅✨",
      imageSrc: "/tallaM.jpg",
      imageAlt: "Shirt 9",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20la%20colección%20Oversize...",
    },
    {
      title: "Oversize 1.1 Talla L",
      description: "Disponible en todas las tallas: L ✅✨",
      imageSrc: "/tallaL.jpg",
      imageAlt: "Shirt 9",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20la%20colección%20Oversize...",
    },
    {
      title: "Oversize 1.1 Talla XL",
      description: "Disponible en todas las tallas: XL ✅✨",
      imageSrc: "/tallaXL.jpg",
      imageAlt: "Shirt 9",
      buttonText: "$100.000 COP",
      buttonLink: "https://wa.me/573004577246?text=Hola!%20Estoy%20interesado%20en%20la%20colección%20Oversize...",
    },
  ];

  return (
    <div>
      <Collection items={collectionItems} />
    </div>
  );
}

export default collectionItems;
