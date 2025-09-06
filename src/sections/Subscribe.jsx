import React from "react";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section
      className="max-container py-12  max-sm:px-5 "
      id="contact-us"
    >
      <div className="flex flex-col lg:flex-row justify-between items-center gap-8 lg:gap-12">
        {/* Heading */}
        <h3 className="text-3xl md:text-4xl leading-tight lg:leading-[68px] font-palanquin font-bold text-center lg:text-left lg:max-w-md">
          Sign Up for
          <span className="text-coral-red"> Updates</span> & Newsletter
        </h3>

        {/* Input Container */}
        <div className="w-full lg:max-w-[500px] xl:max-w-[600px] bg-gray-300 rounded-2xl">
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-2 p-2.5 sm:border sm:border-slate-gray rounded-2xl">
            {/* Input Field */}
            <input 
              type="text" 
              placeholder="subscribe@nike.com" 
              className=" w-[430px] py-2.5 rounded-full sm:rounded-none focus:outline-none text-black max-sm:p-5" 
            />
            
            {/* Button Container */}
            <div className="w-full sm:w-auto flex justify-center sm:justify-end">
              <Button 
                label="Sign Up" 
                fullWidth={true}
                className="whitespace-nowrap min-w-[220px]"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Subscribe;