import React from "react";
import Button from "../components/Button";
// import { shoe8 } from "../assets/images";
import Image from "next/image";

const SupperQuality = () => {
  return (
    <section
      id="about-us"
      className="flex flex-col lg:flex-row justify-center items-center gap-10 w-full h-auto lg:h-[70vh] max-container px-6 py-12 md:px-10 lg:px-16"
    >
      {/* Text Content */}
      <div className="flex flex-1 flex-col text-center lg:text-left">
        <h1 className="mt-6 lg:mt-10 font-palanquin text-3xl sm:text-4xl lg:text-5xl capitalize font-bold leading-tight">
          <span className="inline-block">
            We Provide You
            <span className="text-coral-red"> Super</span>
          </span>
          <br />
          <span className="text-coral-red">Quality</span> Shoes
        </h1>
        <p className="mt-4 text-gray-500 lg:max-w-2xl text-base sm:text-lg leading-relaxed">
          Ensuring premium comfort and style, our meticulously crafted footwear
          is designed to elevate your experience, providing you with unmatched
          quality, innovation, and a touch of elegance.
        </p>
        <p className="mt-6 text-gray-500 lg:max-w-lg text-base sm:text-lg font-semibold leading-relaxed">
          Our dedication to detail and excellence ensures your satisfaction.
        </p>
        <div className="mt-8 w-full">
          <Button label="View Details" fullWidth={true} className="lg:w-auto" />
        </div>
      </div>

      {/* Image Content */}
      <div className="flex-1 flex justify-center items-center">
        <div className="relative w-full max-w-[400px] sm:max-w-[500px] lg:max-w-[570px]">
          <Image
            src={"/img/super.avif"}
            alt="Shoe"
            width={570}
            height={522}
            className="object-contain rounded-lg shadow-lg hover:scale-105 transition-transform duration-300"
          />
        </div>
      </div>
    </section>
  );
};

export default SupperQuality;