import React from "react";
import { motion } from "framer-motion";
import "./Career.css"; // Import CSS for additional styling
import Header from "../components/layout/Header"; // Import Header component


const Career = () => {
  
  return (
    <>
     <div className="fixed top-0 left-0 w-full z-10 p-0 bg-gray-900">
        <Header />
      </div>

    <div className="career-container dark-bg mt-24">
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        >
        Career Opportunities at IBI Group
      </motion.h1>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        Welcome to the career page of IBI Group. We are always looking for talented individuals to join our team.
      </motion.p>
      <motion.h2
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        >
        Current Openings
      </motion.h2>
      <motion.ul
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="card-list"
        >
        <motion.li whileHover={{ scale: 1.05 }}>Software Developer</motion.li>
        <motion.li whileHover={{ scale: 1.05 }}>Project Manager</motion.li>
        <motion.li whileHover={{ scale: 1.05 }}>UI/UX Designer</motion.li>
        <motion.li whileHover={{ scale: 1.05 }}>Data Analyst</motion.li>
      </motion.ul>
      <motion.h2
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        >
        Why Work With Us?
      </motion.h2>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
        At IBI Group, we offer a dynamic work environment, opportunities for growth, and a chance to work on exciting projects.
      </motion.p>
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        >
        Visit our website for more information: <a href="https://ibigroup.co.in/">IBI Group</a>
      </motion.p>
    </div>
    
        </>
  );
};

export default Career;
