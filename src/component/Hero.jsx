'use client'

import React, { useState } from "react";
import Button from '../components/Button'
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants";
import { bigShoe1 } from "../assets/images";
import ShoeCard from "../components/ShoeCard";
import LiquidChrome from '../component/LiquidChrome'
import Image from "next/image";

const Hero = () => {

  const [bigShoeImg, setBigShoeImg] = useState(shoes[0].bigShoe)
  return (
    <section
      id="home"
      className="w-full  flex xl:flex-row flex-col justify-center min-h-screen gap-10 max-container "
    >
     <div className="absolute top-0" style={{ width: '100%', height: '100dvh' }}>
  <LiquidChrome 
  
    baseColor={[0.1, 0.1, 0.1]}
    speed={1}
    amplitude={0.28}
    interactive={true}
  />
</div>
      <div className="absolute xl:top-19 left-20 xl:w-2/5 flex flex-col justify-start items-start w-full  pt-28 ">
        <p className="text-xl font-light text-red-400">
          our Surmer Collection
        </p>
        <h1 className=" mt-10 font-palanquin text-8xl max-sm:text-[72px]max-sm:leading-[82px] font-bold text-black">
          <span className=" xl:whitespace-nowrap relative z-10 pr-10 text-white">
            The New Arrival
          </span>
          <br />
          <span className="text-red-400 inline-block mt-3">Nike</span> Shoes
        </h1>
        <p className="font-thin text-gray-600 text-lg leading-9 mt-6 mb-14 sm:max-w-sm">
          Discove stylish Nike arrivals, quality comfort, and innovation for
          your active life.
        </p>
        <Button label="shop now" iconURL={arrowRight} />
        <div className="flex justify-start items-start flex-wrap w-full mt-20 gap-16 xl:mt-79">
          {statistics.map((stat, index) => (
            <div key={stat.label}>
              <p className="text-4xl font-palanquin text-red-400 font-bold">{stat.value}</p>
              <p className="leading-7 font-montserrat text-white text-base  font-bold">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="absolute right-12 -top-20  flex justify-center items-center xl:min-h-screen max-xl:py-40  bg-cover bg-center">
         <div className="relative ">
          <Image
          src={bigShoeImg}
          alt="shoe Collection"
          width={610}
          height={600}
          className="object-contain relative z-10"/>
         </div>
        <div className="flex sm:gap-6 gap-4 absolute -bottom-[5%] sm:left-[10%] max-sm:px-6">
          {shoes.map((shoe , index) => (
            <div key={index}>
              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => {setBigShoeImg(shoe)}}
                bigShoeImg={bigShoeImg}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
