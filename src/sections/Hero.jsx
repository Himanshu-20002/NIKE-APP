import React, { useState, useEffect, useRef } from "react";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import LiquidChrome from "../components/LiquidChrome";
import gsap from "gsap";

const Hero = () => {
  const [bigShoeImg, setBigShoeImg] = useState(shoes[0].bigShoe);

  // Refs for GSAP animation
  const headingRef = useRef(null);
  const paraRef = useRef(null);
  const statsRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: "power3.out", duration: 1 } });

    tl.fromTo(
      headingRef.current.querySelectorAll("span"),
      { y: 100, opacity: 0 },
      { y: 0, opacity: 1, stagger: 0.2 }
      
    )
      .fromTo(
        paraRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1 },
        "-=0.6"
        
      )
      .fromTo(
        statsRef.current.children,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, stagger: 0.2 },
        "-=0.5"
      );
  }, []);

  return (
    <section
      id="home"
      className="relative w-full flex flex-col xl:flex-row items-center justify-between min-h-screen  md:px-12 lg:px-20 gap-10"
    >
      {/* Background Effect */}
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <LiquidChrome baseColor={[0.1, 0.1, 0.1]} speed={1} amplitude={0.28}  />
      </div>

      {/* Left Content */}
      <div className="flex flex-col justify-center items-start xl:w-1/2 w-full pt-24 p-6 md:pt-32 xl:pt-20">
        <p className="text-base sm:text-lg font-montserrat text-coral-red">
          Our Summer Collection
        </p>
        <h1
          ref={headingRef}
          className="mt-6 font-palanquin font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl leading-tight"
        >
          <span className="block text-white">The New Arrival</span>
          <span className="block text-coral-red mt-2">Nike</span>
          <span className="block text-white">Shoes</span>
        </h1>
        <p
          ref={paraRef}
          className="font-montserrat text-slate-gray text-base sm:text-lg md:text-xl leading-relaxed mt-6 mb-10 max-w-lg"
        >
          Discover stylish Nike arrivals, quality comfort, and innovation for your active life.
        </p>
        <Button label="Shop Now" iconURL={arrowRight} />

        {/* Stats */}
        <div
          ref={statsRef}
          className="flex flex-wrap gap-8 mt-12 sm:mt-16"
        >
          {statistics.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl sm:text-4xl font-palanquin text-red-500 font-bold">
                {stat.value}
              </p>
              <p className="font-montserrat text-white text-sm sm:text-base">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Right Shoe Image */}
      <div className="flex flex-col justify-center items-center xl:w-1/2 w-full relative py-20  px-10 xl:mx-30 ">
        <img
          src={bigShoeImg}
          alt="shoe collection"
          className="w-72 sm:w-96 md:w-[500px] lg:w-[550px] xl:w-[600px] object-contain"
        />

        {/* Shoe Thumbnails */}
        <div className="flex gap-4 sm:gap-6 mt-6 flex-wrap justify-center">
          {shoes.map((shoe) => (
            <ShoeCard
              key={shoe.bigShoe}
              imgURL={shoe}
              changeBigShoeImage={(shoe) => setBigShoeImg(shoe)}
              bigShoeImg={bigShoeImg}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
