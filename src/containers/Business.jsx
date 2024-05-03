import React from "react";
import BusinessCard from "../components/BusinessCard";
import { star, shield, send } from "../assets";
import Button from "../components/Button";
import styles from "../style";

const Business = () => {
  return (
    <div className={`${styles.marginY} flex flex-row max-sm:flex-col justify-between items-start py-10 h-min`} id="features">
      <div className="flex-[0.75] mr-8 mt-14">
        <h1 className="font-poppins font-semibold sm:text-[45px] text-[36px] sm:leading-[75px] text-white flex flex-wrap">
          You do the business, we'll handle the money.
        </h1>
        <p className="font-poppins text-dimWhite text-[15px] my-6">
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button/>
      </div>
      <div className=" flex-1 space-y-8 h-full w-full mt-14">
        <BusinessCard
          image={star}
          title="Rewards"
          text="The best credit cards offer some tantalizing combinations of promotions and prizes"
        />
        <BusinessCard
          image={shield}
          title="100% Secured"
          text="We take proactive steps make sure your information and transactions are secure."
        />
        <BusinessCard
          image={send}
          title="Balance Transfer"
          text="A balance transfer credit card can save you a lot of money in interest charges."
        />
      </div>
    </div>
  );
};

export default Business;
