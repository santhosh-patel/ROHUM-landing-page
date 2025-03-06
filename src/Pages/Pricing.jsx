import React from "react";
import SectionHeading from "../Components/SectionHeading";
import PricingTabs from "../Components/PricingTabs";

const Pricing = () => {
  return (
    <div className="mt-20 min-h-screen xl:p-3">
      <SectionHeading
        smallHeading="PRICING & PLANS"
        mainHeading="Invest in Your Success"
      />
      <div className="mt-10 lg:mt-28 justify-center md:justify-evenly xl:justify-center gap-16 lg:gap-0 xl:gap-8 flex flex-col md:flex-wrap md:flex-row p-2 lg:p-0 xl:p-2 ">
        <PricingTabs
          price={0}
          plan="Free Plan"
          planPara={"Get started with our basic features at no cost."}
          l1={"Limited AI support"}
          l2={"Basic analytics"}
          l3={"Access to free resources"}
          standout={false}
        />
        <PricingTabs
          price={29}
          plan="Standard Plan"
          planPara={"Advanced features to enhance your experience."}
          l1={"AI-powered insights"}
          l2={"Advanced analytics"}
          l3={"Personalized recommendations"}
          l4={"Priority support"}
          standout={true}
        />
        <PricingTabs
          price={49}
          plan="Premium Plan"
          planPara={"Unlock all features and get the best experience."}
          l1={"Full AI-powered assistant"}
          l2={"Personalized AI interactions"}
          l3={"24/7 dedicated support"}
          l4={"Exclusive premium content"}
          standout={false}
        />
      </div>
      {/* <p className="border ">hello</p> */}
    </div>
  );
};

export default Pricing;
