import React from "react";
import { motion } from "framer-motion";

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
  const images = {
    "shield-lock": "https://img.icons8.com/color/96/shield--v1.png",
    "shield-check": "https://img.icons8.com/color/96/security-checked--v1.png",
    "refresh": "https://img.icons8.com/color/96/refresh--v1.png"
  };

  return (
    <motion.div 
      className="backdrop-blur-[25px] p-8 rounded-2xl hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-20 h-20 flex items-center justify-center mb-5 rounded-[40px] bg-[rgba(62,213,221,0.1)]">
        <img 
          src={images[icon as keyof typeof images]} 
          alt={title}
          className="w-12 h-12 object-contain"
        />
      </div>
      <h3 className="text-[28px] font-semibold mb-[15px]">{title}</h3>
      <p className="text-base leading-[1.6] opacity-80">{description}</p>
    </motion.div>
  );
};
