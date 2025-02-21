import React from "react";
import { IconName } from "tabler-icons-react";

interface ServiceCardProps {
  icon: string;
  title: string;
  description: string;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({
  icon,
  title,
  description,
}) => {
  return (
    <div className="backdrop-blur-[25px] p-8 rounded-2xl">
      <div className="w-20 h-20 flex items-center justify-center mb-5 rounded-[40px] bg-[rgba(62,213,221,0.1)]">
        <i className={`ti ti-${icon} text-[32px] text-[#3ED5DD]`} />
      </div>
      <h3 className="text-[28px] font-semibold mb-[15px]">{title}</h3>
      <p className="text-base leading-[1.6] opacity-80">{description}</p>
    </div>
  );
};
