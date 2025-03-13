import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";

export const Hero: React.FC = () => {
  return (
    <section className="flex items-center justify-between relative overflow-hidden px-10 py-[120px] max-md:flex-col max-md:text-center bg-cover bg-center" style={{ backgroundImage: "url('https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')" }}>
      <div className="max-w-[600px] z-[1] max-md:mb-[50px] backdrop-blur-sm bg-white/30 p-8 rounded-lg">
        <motion.h1 
          className="text-[67px] font-semibold leading-[1.2] mb-5 max-md:text-5xl max-sm:text-[28px] text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Empowering You in the Digital Age
        </motion.h1>
        <motion.p 
          className="text-base leading-[1.6] mb-[30px] text-white"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          Guardians of Tomorrow: Securing You through AI-Powered Vigilance

        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button className="bg-grey text-black hover:bg-gray-100">
            Purchase
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
