import React from "react";
import { motion } from "framer-motion";

interface DirectorCardProps {
  icon: string;
  name: string;
  role: string;
}

export const DirectorCard: React.FC<DirectorCardProps> = ({
  icon,
  name,
  role,
}) => {
  const images = {
    "director-icon-1": "https://img.icons8.com/color/96/director-icon-1.png",
    "director-icon-2": "https://img.icons8.com/color/96/director-icon-2.png",
    "director-icon-3": "https://img.icons8.com/color/96/director-icon-3.png"
  };

  return (
    <motion.div 
      className="backdrop-blur-[25px] p-8 rounded-2xl hover:shadow-lg transition-shadow"
      whileHover={{ scale: 1.05 }}
    >
      <div className="w-20 h-20 flex items-center justify-center mb-5 rounded-[40px] bg-[rgba(62,213,221,0.1)]">
        <img 
          src={images[icon as keyof typeof images]} 
          alt={name}
          className="w-12 h-12 object-contain"
        />
      </div>
      <h3 className="text-[28px] font-semibold mb-[15px]">{name}</h3>
      <p className="text-base leading-[1.6] opacity-80">{role}</p>
    </motion.div>
  );
};
