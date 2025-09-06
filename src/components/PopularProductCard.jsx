import React from 'react';
import { star } from '../assets/icons';
import Image from 'next/image';

const PopularProductCard = ({ imgURL, name, price }) => {
  return (
    <div className="flex flex-col w-full max-w-[320px] p-4 sm:p-6 md:p-8 bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* Image Container */}
      <div className="relative w-full aspect-square overflow-hidden rounded-xl bg-white">
        <Image
          src={imgURL}
          alt={name}
          className="object-cover hover:scale-105 transition-transform duration-300"
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, 33vw"
        />
      </div>

      {/* Rating Section */}
      <div className="mt-4 flex items-center gap-2">
        <Image
          src={star}
          alt="rating"
          width={20}
          height={20}
          className="object-contain"
        />
        <p className="font-montserrat text-sm sm:text-base text-gray-400">
          (4.5)
        </p>
      </div>

      {/* Product Name */}
      <h3 className="mt-2 font-palanquin text-lg sm:text-xl font-bold text-white line-clamp-1">
        {name}
      </h3>

      {/* Product Price */}
      <p className="mt-2 font-montserrat font-semibold text-coral-red text-base sm:text-lg">
        {price}
      </p>

      {/* Add to Cart Button */}
      <button className="mt-4 w-full bg-coral-red text-white py-2 bg-gray-600 rounded-full font-bold hover:bg-red-500 transition-all duration-300">
        Add to Cart
      </button>
    </div>
  );
};

export default PopularProductCard;