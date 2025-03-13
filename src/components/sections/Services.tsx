import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";
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

  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section className="px-10 py-20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center "
        style={{ y }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/90" />
      
      <div className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#3ED5DD] text-[21px] font-semibold mb-2.5 block">
            OUR SERVICE
          </span>
          <h2 className="text-[67px] font-semibold leading-[1.2] mb-5 max-md:text-5xl max-sm:text-[28px] text-white">
            Protecting Your Digital Assets Expertly
          </h2>
          <p className="text-base leading-[1.6] mb-10 text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            congue metus quis accumsan euismod. Maecenas sed est mollis, convallis
            nisi convallis, imperdiet massa.
          </p>
        </motion.div>

        <motion.div 
          className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-[30px] mt-[50px] max-md:grid-cols-[repeat(auto-fit,minmax(250px,1fr))] max-sm:grid-cols-[1fr] "
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={childVariants}>
              <ServiceCard {...service} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
