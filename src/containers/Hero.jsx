import React from "react";
import { discount, arrowUp, robot } from "../assets";

const Hero = () => {
  return (
    <div className="flex flex-col my-10 space-y-10 " id="home">
      <div className="flex lg:flex-row flex-col justify-between mt-28 mb-10 ">
        <div className=" flex-[0.75]">
          <div className="flex bg-discount-gradient rounded-lg px-1 py-1 sm:max-w-[300px] max-w-[250px]  mb-4 ">
            <img
              src={discount}
              alt="discount"
              height={20}
              width={20}
              className="bg-transparent"
            />
            <h4 className="font-poppins text-sm bg-transparent">
              20% DISCOUNT FOR 1 MONTH ACCOUNT
            </h4>
          </div>

          <div className="font-poppins flex sm:flex-row flex-col sm:items-center items-center">
            <h1 className="sm:leading-[80px] leading-[55px]  font-semibold text-[46px] xs:text-[60px]   flex-wrap mb-8">
              The Next
              <span className="text-gradient"> Generation </span>
              Payment Method
            </h1>
            <div className="xs:flex hidden mr-6">
              <button
                type="button"
                className="rounded-full border-2 border-cyan-500 px-14 py-16  cursor-pointer  transition-all"
              >
                <span className="text-gradient font-semibold mr-2">Get</span>
                <img
                  src={arrowUp}
                  alt="arrowUp"
                  className="inline-block bg-transparent"
                />
                <p className="bg-transparent text-gradient font-semibold">
                  Started
                </p>
              </button>
            </div>
          </div>
          <p className="font-poppins text-[16px] text-slate-300 mt-5">
            Our team of experts uses a methodology to identify the credit cards
            most likely to fit your needs. We examine annual percentage rates,
            annual fees.
          </p>
        </div>

        <div className=" flex flex-col  object-contain lg:my-0 mt-10 relative ">
          <img
            src={robot}
            alt="robotHand"
            className="object-contain relative z-[5]"
          />
          <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
          <div className="absolute z-[1] w-[60%] h-[100%] bottom-40 rounded-full white__gradient" />
          <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
          <div className="sm:hidden flex items-center justify-evenly">
            <button
              type="button"
              className="rounded-full border-2 border-cyan-500 px-14 py-16  cursor-pointer  transition-all"
            >
              <span className="text-gradient font-semibold mr-2">Get</span>
              <img
                src={arrowUp}
                alt="arrowUp"
                className="inline-block bg-transparent"
              />
              <p className="bg-transparent text-gradient font-semibold">
                Started
              </p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
