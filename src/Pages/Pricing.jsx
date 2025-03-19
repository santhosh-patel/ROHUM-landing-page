import React from "react";
import SectionHeading from "../Components/SectionHeading";
import PricingTabs from "../Components/PricingTabs";

const Pricing = () => {
  return (
    <div className="mt-20 min-h-screen xl:p-3">
      <SectionHeading
        smallHeading="PRICING & PLANS"
        mainHeading="Invest in Your Success"
        id={"pricId"}
      />
      <div className="mt-10 lg:mt-28 justify-center md:justify-evenly xl:justify-center gap-16 lg:gap-0 xl:gap-8 flex flex-col md:flex-wrap md:flex-row p-2 lg:p-0 xl:p-2 ">
        <PricingTabs
          price={0}
          plan="Free Tier"
          planPara={"Basic avatars with limited audio options"}
          l1={"30 prompts per month (10 per feature)"}
          l2={"250 free coins (each prompt consumes coins)"}
          l3={"3-day trial of core educational content"}
          l4={"10 exercises and quizzes"}
          standout={false}
          free={true}
        />
        <PricingTabs
          price={59}
          plan="Basic Plan"
          planPara={"Includes everything from the Free Tier"}
          l1={"100 prompts per month"}
          l2={"500 coins per month"}
          l3={"In-depth knowledge on AI, crypto, and avatar technology"}
          l4={"Access to celebrity-style AI voices"}
          l5={"Standard email and ticket-based support"}
          standout={true}
          free={false}
        />
        <PricingTabs
          price={99}
          plan="Premium Plan"
          planPara={"Includes everything from the Basic Plan."}
          l1={"Fully customizable avatars with more personalization options"}
          l2={"1000 coins per month with additional top-up options"}
          l3={"Advanced features like AI-enhanced expressions and animations"}
          l4={"24/7 priority support"}
          standout={false}
          free={false}
        />
        {/* <PricingTabs
          price={99}
          plan="Business Plan"
          planPara={"(Enterprise Solutions) Everything in the Premium Plan"}
          l1={"Fully customized and branded avatars"}
          l2={"Unlimited coins for usage flexibility"}
          l3={"AI-driven automation and API access for integrations"}
          l4={"Multi-user support and team collaboration features"}
          l5={"Dedicated account manager and priority technical support"}
          standout={false}
          free={false}
          custom={true}
        /> */}
      </div>
      <div className="min-h-[20vh] w-[95%] border-glow-animation-white overflow-hidden p-[2px] rounded-xl mt-6 lg:mt-10 mx-auto">
        <div className="enterprise-div w-full flex flex-col p-6 lg:p-10 xl:p-15 rounded-xl gap-5 md:gap-0 md:flex-row justify-between items-center">
          <div className="w-full md:w-3/4 z-20">
            <h1 className="text-4xl purple-fade-text lg:text-5xl font-bold mb-5 text-white">
              Explore Our <br /> Enterprise Plan
            </h1>
            <p className="text-gray-500 text-xs md:text-sm lg:text-base">
              Unlock the full potential of your business with our Enterprise
              Plan. Designed to meet the needs of large teams and complex
              projects, this plan offers advanced features, enhanced security,
              and dedicated support to ensure seamless operations.
            </p>
          </div>
          <a
            className="z-20"
            href="https://forms.fillout.com/t/2EfpPyfd91us"
            target="_blank"
          >
            <button className="bg-white hover:bg-black duration-150 text-[var(--purple-foreground)] p-3 rounded-full px-4 font-semibold">
              Contact Us {">"}
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
