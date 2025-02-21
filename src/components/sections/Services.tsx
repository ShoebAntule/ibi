import React from "react";
import { ServiceCard } from "../ui/ServiceCard";

export const Services: React.FC = () => {
  const services = [
    {
      icon: "shield-lock",
      title: "Cyber security Assessment",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "shield-check",
      title: "Intrusion Detection and Prevention",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
    {
      icon: "refresh",
      title: "Incident Response and Recovery",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    },
  ];

  return (
    <section className="px-10 py-20">
      <div>
        <span className="text-[#3ED5DD] text-[21px] font-semibold mb-2.5 block">
          OUR SERVICE
        </span>
        <h2 className="text-[67px] font-semibold leading-[1.2] mb-5 max-md:text-5xl max-sm:text-[28px]">
          Protecting Your Digital Assets Expertly
        </h2>
        <p className="text-base leading-[1.6] opacity-80 mb-10">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          congue metus quis accumsan euismod. Maecenas sed est mollis, convallis
          nisi convallis, imperdiet massa.
        </p>
      </div>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px] mt-[50px] max-md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-sm:grid-cols-[1fr]">
        {services.map((service, index) => (
          <ServiceCard key={index} {...service} />
        ))}
      </div>
    </section>
  );
};
