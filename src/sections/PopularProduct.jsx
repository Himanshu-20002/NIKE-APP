import React from "react";
import { products } from "../constants";
import PopularProductCard from "../components/PopularProductCard";

const PopularProduct = () => {
  return (
    <section
      id="products"
      className="max-container px-4 sm:px-6 md:px-8 lg:px-4 xl:px-0 py-10 md:py-16 lg:py-20 "
    >
      <div className="flex flex-col justify-start gap-5 mt-20 md:mt-32 lg:mt-40 ">
        <h2 className="text-3xl sm:text-4xl font-palanquin font-bold text-center lg:text-left lg:ml-14">
         NEW
          <span className="text-coral-red ml-2">ARIVALS!</span>
        </h2>
        <p className="lg:max-w-lg mt-2 text-slate-gray font-montserrat text-center lg:text-left text-base sm:text-lg lg:ml-14">
          Experience top-notch quality and style with our sought-after
          selection. Discover a world of comfort, design, and value
        </p>
      </div>

      <div className="mt-12 sm:mt-16 grid gap-6 md:gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 place-items-center justify-center">
        {products.map((product) => (
          <PopularProductCard key={product.name} {...product} />
        ))}
      </div>
    </section>
  );
};

export default PopularProduct;