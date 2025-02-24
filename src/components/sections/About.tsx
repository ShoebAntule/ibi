import React from "react";
import { motion } from "framer-motion";
import { Button } from "../ui/button";
import { Link } from "react-router-dom"; // Import Link component

export const About: React.FC = () => {
  return (
    <section className="px-10 py-20 flex items-center gap-12 max-md:flex-col">
      <motion.div 
        className="flex-1"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <img 
          src="https://ibigroup.co.in/images/s2.jpg" width="500" height="400" 
          alt="Cyber Security"
          className="rounded-lg shadow-lg"
        />
      </motion.div>

      <motion.div 
        className="flex-1"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        <span className="text-[#3ED5DD] text-[21px] font-semibold mb-2.5 block">
          ABOUT US
        </span>
        <h2 className="text-[67px] font-semibold leading-[1.2] mb-5 max-md:text-5xl max-sm:text-[28px]">
          Leading the Way in Cyber Security Solutions
        </h2>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Button className="bg-[#3ED5DD] text-white hover:bg-[#35c0c8]">
            <Link to="/aboutus" className="text-white">
              Read More
            </Link>
          </Button>
        </motion.div>
      </motion.div>
    </section>
  );
};
