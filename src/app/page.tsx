import React from "react";
import Hero from "../components/hero";
import Header from "../components/header";
import CollectionItems from "@/components/collectionItems";
import CollectionPrints from "@/components/collectionPrints";
import AboutBlaze from "@/components/AboutBlaze";
import Footer from "@/components/Footer";

const Page = () => {
  return (
    <div className="w-full">
      {/* Header Section */}
      <section id="header" className="w-full">
        <Header />
      </section>

      {/* Hero Section */}
      <section id="home" className="w-full">
        <Hero />
      </section>
      <section id="about" className="w-full mt-20">
        <AboutBlaze />
      </section>

      {/* Separación entre Hero y Collection */}
      <div className="h-16 md:h-24"></div>

      {/* line Section */}
      <div className="w-full flex items-center justify-between mb-8">
        {/* Línea izquierda */}
        <div className="h-1 bg-white flex-grow mr-14"></div>

        {/* Espaciador opcional para el centro */}
        <div className="w-0"></div>

        {/* Línea derecha */}
        <div className="h-1 bg-white flex-grow ml-14"></div>
      </div>

      <section id="oversize" className="w-full flex justify-center">
        <CollectionItems />
      </section>
      <div className="w-full flex items-center justify-between mt-8 mb-8">
        {/* Línea izquierda */}
        <div className="h-1 bg-white flex-grow mr-14"></div>

        {/* Espaciador opcional para el centro */}
        <div className="w-0"></div>

        {/* Línea derecha */}
        <div className="h-1 bg-white flex-grow ml-14"></div>
      </div>
      <section id="prints" className="w-full flex justify-center">
        <CollectionPrints />
      </section>
      <section id="footer" className="w-full flex justify-center">
        <Footer />
      </section>
      
    </div>
  );
};

export default Page;
