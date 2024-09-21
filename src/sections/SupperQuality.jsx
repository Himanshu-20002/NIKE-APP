import React from "react";
import Button from "../components/Button";
import { shoe8 } from "../assets/images";
const SupperQuality = () => {
  return (
    <section
      id="about us"
      className="flex justify-center items-center max-lg:flex-col  gap-10  w-full max-container"
    >
      <div className="flex flex-1 flex-col">
        <h1 className=" mt-10 font-palanquin text-4xl capitalize font-bold">
          <h2 className="inline-block">
            We Provide You
            <span className="text-coral-red"> Super</span>
          </h2>
          <br />
          <span className="text-coral-red">Quality</span> Shoes
        </h1>
        <p className=" mt-4  lg:max-w-2xl info-text">
          Ensuring Premium comfort and style, our meticulously Crafted footewear
          is designed to elevate your experience, providing you with unmatched
          quality, inovation, and a touch of elegance.
        </p>
        <p className="mt-6 lg:max-w-lg info-text font-semibold">Our dedication to detail and excellence ensures your satisfaction.</p>
        <div className="mt-11">
        <Button label="View details" />

        </div>
       
      </div>
      <div className="flex-1 flex justify-center items-center">
        <img  src={shoe8} alt="shoe8" width={570} height={522} className="object-contain"/>
      </div>
    </section>
  );
};

export default SupperQuality;
