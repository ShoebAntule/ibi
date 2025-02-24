import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export const Goals: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

  return (
    <section className="px-10 py-20 relative overflow-hidden">
      <motion.div 
        className="absolute inset-0 bg-[url('https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')] bg-cover bg-center"
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
            OUR GOALS
          </span>
          <h2 className="text-[67px] font-semibold leading-[1.2] mb-5 max-md:text-5xl max-sm:text-[28px] text-white">
            Setting New Standards in Digital Security
          </h2>
          <p className="text-base leading-[1.6] mb-10 text-white/80">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
            congue metus quis accumsan euismod. Maecenas sed est mollis.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
