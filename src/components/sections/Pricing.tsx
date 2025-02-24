import React from "react";
import { Button } from "../ui/button";

export const Pricing: React.FC = () => {
  return (
    <section className="px-10 py-20">
      <div className="text-center mb-16">
        <span className="text-[#3ED5DD] text-[21px] font-semibold mb-2.5 block">
          PRICING
        </span>
        <h2 className="text-[67px] font-semibold leading-[1.2] mb-5 max-md:text-5xl max-sm:text-[28px]">
          Choose Your Plan
        </h2>
        <p className="text-base leading-[1.6] opacity-80 mb-10 mx-auto max-w-[600px]">
          Select the perfect plan for your security needs.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-[1200px] mx-auto">
        {[
          {
            title: "Basic",
            price: "$29",
            features: ["Feature 1", "Feature 2", "Feature 3"],
          },
          {
            title: "Pro",
            price: "$59",
            features: ["Feature 1", "Feature 2", "Feature 3", "Feature 4"],
          },
          {
            title: "Enterprise",
            price: "$99",
            features: [
              "Feature 1",
              "Feature 2",
              "Feature 3",
              "Feature 4",
              "Feature 5",
            ],
          },
        ].map((plan) => (
          <div
            key={plan.title}
            className="backdrop-blur-[25px] bg-[rgba(255,255,255,0.03)] p-8 rounded-2xl transition-transform duration-300 hover:scale-105 hover:shadow-lg"
          >
            <h3 className="text-2xl font-semibold mb-4">{plan.title}</h3>
            <p className="text-4xl font-bold mb-6">{plan.price}<span className="text-base font-normal">/month</span></p>
            <ul className="mb-8 space-y-3">
              {plan.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 mr-2 text-[#3ED5DD]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>
            <Button variant="secondary" className="w-full">
              Choose Plan
            </Button>
          </div>
        ))}
      </div>
    </section>
  );
};
