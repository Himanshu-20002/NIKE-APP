import React from "react";
import { offer } from "../assets/images";
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
const SpecialOffer = () => {
  return (
    <section className="flex justify-wrap items-center max-xl:flex-col-reverse gap-10 max-container">
      <div className="flex-1">
        <img
          src={offer}
          width={773}
          height={687}
          className="object-contain  w-full"
        />
      </div>
      <div className="flex flex-1 flex-col">
        <h1 className=" mt-10 font-palanquin text-4xl capitalize font-bold">
          <span className="text-coral-red"> Special</span> Offer
        </h1>
        <p className=" mt-4  lg:max-w-2xl info-text">
         Embark on a shopping journey that redefines your experience with unbeatable deals. From premier selections to incredible savings, we offer unparalleled valur that sets us apart.
        </p>
        <p className="mt-6 lg:max-w-2lg info-text font-semibold">
          Navigate a realm of possibilities designed, surpassing the loftiest expectations. your journey with us is nothing short of exceptional.
        </p>
        <div className="flex flex-row gap-4 flex-wrap mt-11">
          <Button label="Shop now"  iconURL={arrowRight}/>
          <Button label="Learn more" backgroundColor="bg-white" borderColor="border-slate-gray" textColor="text-slate-gray"  />
        </div>
      </div>
    </section>
  );
};

export default SpecialOffer;
