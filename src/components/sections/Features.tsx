import React from "react";
import { motion } from "framer-motion";

export const Features: React.FC = () => {
  const features = [
    {
      icon: "https://img.icons8.com/color/96/security-checked--v1.png",
      title: "Real-time Monitoring",
      description: "Continuous surveillance of your digital assets"
    },
    {
      icon: "https://img.icons8.com/color/96/encryption.png",
      title: "Data Encryption",
      description: "Advanced encryption for maximum security"
    },
    {
      icon: "https://img.icons8.com/color/96/security-configuration.png",
      title: "Access Control",
      description: "Granular permissions management"
    },
    {
      icon: "https://img.icons8.com/color/96/security-shield-green.png",
      title: "Threat Detection",
      description: "AI-powered threat identification"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section className="px-5 py-10 overflow-hidden">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span className="text-[#3ED5DD] text-[21px] font-semibold mb-2.5 block">
          FEATURES
        </span>
        <h2 className="text-[67px] font-semibold leading-[1.2] mb-5 max-md:text-5xl max-sm:text-[28px]">
          Advanced Security Features
        </h2>
        <p className="text-base leading-[1.6] opacity-80 mb-10 max-w-[800px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
          congue metus quis accumsan euismod.
        </p>
      </motion.div>

      <motion.div 
        className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px] mt-[50px] max-md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-sm:grid-cols-[1fr] overflow-hidden"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {features.map((feature, index) => (
          <motion.div 
            key={index}
            variants={childVariants}
            className="backdrop-blur-[25px] p-8 rounded-2xl hover:shadow-lg transition-shadow"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-20 h-20 flex items-center justify-center mb-5 rounded-[40px] bg-[rgba(62,213,221,0.1)] overflow-hidden">
              <img 
                src={feature.icon} 
                alt={feature.title}
                className="w-12 h-12 object-contain"
                onError={(e) => (e.currentTarget.src = "https://via.placeholder.com/96")} 
              />
            </div>
            <h3 className="text-[28px] font-semibold mb-[15px]">{feature.title}</h3>
            <p className="text-base leading-[1.6] opacity-80">{feature.description}</p>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
