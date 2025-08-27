import React, { useEffect, useRef } from "react";
import { star } from "../assets/icons";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const PopularProductCard = ({ imgURL, name, price }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    const el = cardRef.current;

    gsap.fromTo(
      el,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: el,
          start: "top 80%", // animation starts when card enters viewport
          end: "bottom 60%", // scrub till card exits
          scrub: true,
        },
      }
    );
  }, []);

  return (
    <div
      ref={cardRef}
      className="flex flex-1 w-full flex-col max-sm:w-full p-4 sm:p-6 md:p-8 
                 rounded-2xl bg-white/5 backdrop-blur-md hover:scale-105 
                 transition-transform duration-300"
    >
      {/* Product Image */}
      <img
        src={imgURL}
        alt={name}
        className="w-48 h-48 sm:w-60 sm:h-60 md:w-72 md:h-72 object-contain mx-auto"
      />

      {/* Rating */}
      <div className="mt-6 flex items-center gap-2">
        <img src={star} alt="rating" width={22} height={22} />
        <p className="font-montserrat text-base sm:text-lg text-slate-gray">
          (4.5)
        </p>
      </div>

      {/* Product Info */}
      <h3 className="mt-3 font-palanquin font-semibold leading-snug text-xl sm:text-2xl">
        {name}
      </h3>
      <p className="mt-1 font-semibold font-montserrat text-coral-red text-lg sm:text-xl">
        {price}
      </p>
    </div>
  );
};

export default PopularProductCard
