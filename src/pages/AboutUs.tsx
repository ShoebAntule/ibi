import React from "react";
import { motion } from "framer-motion"; // For animations
import Header from "../components/layout/Header"; // Import Header component

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "tailwindcss/tailwind.css"; // Ensure Tailwind CSS is installed

// Slider settings
const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true,
        dots: true,
      },
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2, // Stagger animations for children
    },
  },
};

const AboutUs: React.FC = () => {
  return (
    <div className="top-0 z-10 p-10 bg-gray-900">
      <Header /> {/* Include Header component */}
      {/* Animated Title */}

        <motion.h1
          className="text-4xl md:text-5xl font-bold text-white mb-8 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          About Us
        </motion.h1>


      {/* Animated Paragraphs */}
      <motion.div
        className="max-w-3xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        <motion.p
          className="text-white mb-6 text-lg text-center leading-relaxed"
          variants={fadeInUp}
        >
          IBI Group is a leading provider of security solutions, offering a comprehensive range of services tailored to meet the unique needs of our clients. Our commitment to excellence and customer satisfaction sets us apart in the industry.

        </motion.p>
        <motion.p
          className="text-white mb-8 text-lg text-center leading-relaxed"
          variants={fadeInUp}
        >
          We specialize in private guarding, risk consulting, and advanced electronic security solutions. Our team of highly trained professionals is dedicated to ensuring the safety and security of your assets, personnel, and property.

        </motion.p>
      </motion.div>

      {/* Animated Founders Section */}
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-10 mt-16 text-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Our Leadership
        </motion.h2>


      <motion.div
        className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 justify-center items-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Founder 1 */}
        <motion.div
          className="relative group w-full md:w-1/3 max-w-sm bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://ibigroup.co.in/images/team/v-v-vaketkar.jpg"
            alt="V V Vaketkar"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-2">V. V. Vaketkar</h2>
            <p className="text-blue-400 italic mb-4">Ex-ACP (Crime Branch - Mumbai Police)</p>
            <p className="text-gray-300 text-sm">
              As a pivotal figure in the formation of Mumbai's Crime Branch, he played a key role in resolving numerous high-profile criminal cases. His exceptional investigative prowess and expansive network for gathering information made him highly coveted within the entire police force, setting a standard for effective law enforcement.
            </p>
          </div>
        </motion.div>

        {/* Founder 2 */}
        <motion.div
          className="relative group w-full md:w-1/3 max-w-sm bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://ibigroup.co.in/images/team/agnelo.jpg"
            alt="Agnelo Menezes"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-2">Agnelo Menezes</h2>
            <p className="text-blue-400 italic mb-4">Co-founder</p>
            <p className="text-gray-300 text-sm">
              Mr. Menezes was also the co-founder of SAI (Security Association of India), the first security association in India. A recipient of several national and international accolades in investigation and security, he was also a talented musician and passionate jazz drummer. He is regarded as a trailblazer in the realms of Investigation, Detection, and Security within India.
            </p>
          </div>
        </motion.div>
      </motion.div>

      {/* Director */}

      {/* Animated Founders Section */}
      <motion.h2
          className="text-4xl md:text-5xl font-bold text-white mb-10 mt-16 text-center bg-gradient-to-r from-purple-600 to-blue-500 bg-clip-text text-transparent"
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
        >
          Directors
        </motion.h2>


      <motion.div
        className="flex flex-col md:flex-row space-y-8 md:space-y-0 md:space-x-8 justify-center items-center"
        initial="hidden"
        animate="visible"
        variants={staggerContainer}
      >
        {/* Founder 1 */}
        <motion.div
          className="relative group w-full md:w-1/3 max-w-sm bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://ibigroup.co.in/images/team/sidney.jpg"
            alt="V V Vaketkar"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-2">Sidney Menezes </h2>
            <p className="text-blue-400 italic mb-4">EDirector, Business Operations</p>
            <p className="text-gray-300 text-sm">
            With a firm conviction in leading by example, Mr. Sidney Menezes takes charge at the helm of the Operations Team. This team is not just focused on addressing the daily requirements of clients; it is driven by a mission to deliver solutions that yield tangible outcomes.
            </p>
          </div>
        </motion.div>

        {/* Founder 2 */}
        <motion.div
          className="relative group w-full md:w-1/3 max-w-sm bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://ibigroup.co.in/images/team/stanley.jpg"
            alt="Agnelo Menezes"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-2">Stanley Coutinho  </h2>
            <p className="text-blue-400 italic mb-4">Director, Legal & Compliance  </p>
            <p className="text-gray-300 text-sm">
            An Ex-IAS officer (Director General - Ordinance) with a wealth of experience, has dedicated his service to the Department of Defense Production.His profound knowledge encompasses all facets of security, including training, resource management, and strategic planning.
            </p>
          </div>
        </motion.div>
        {/* Founder 3 */}
        <motion.div
          className="relative group w-full md:w-1/3 max-w-sm bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300"
          variants={fadeInUp}
          whileHover={{ scale: 1.05 }}
        >
          <img
            src="https://ibigroup.co.in/images/team/sujeet.jpg"
            alt="Agnelo Menezes"
            className="w-full h-64 object-cover"
          />
          <div className="p-6">
            <h2 className="text-2xl font-bold text-white mb-2">Sujeet Menezes            </h2>
            <p className="text-blue-400 italic mb-4">Director, Business Development & Finance </p>
            <p className="text-gray-300 text-sm">
            He has consistently demonstrated prowess in strategic planning, business development, and adeptly overseeing extensive operations across India. Presently, he channels his refined investigative and risk assessment expertise to elevate security solutions for esteemed Fortune 500 enterprises.
            </p>
          </div>
        </motion.div>
      </motion.div>



      {/* Animated Gallery Section */}
      <motion.h2
        className="text-4xl md:text-5xl font-bold text-white mb-10 mt-16 text-center bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent"
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        Gallery
      </motion.h2>

      <motion.div
        initial="hidden"
        animate="visible"
        variants={fadeInUp}
      >
        <Slider {...sliderSettings}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <div key={item}>
              <motion.img
                src={`https://ibigroup.co.in/images/fleets/${item}.jpg`}
                alt={`Gallery Image ${item}`}
                className="w-full h-48 md:h-64 object-cover rounded-lg"
                whileHover={{ scale: 1.05 }}
              />
            </div>
          ))}
        </Slider>
      </motion.div>
      {/* Footer Section */}
      <footer className="bg-black text-white py-10 mt-16">
        <div className="container mx-auto px-6 md:flex md:justify-between">
          <div className="mb-6 md:mb-0">
            <img
              src="https://ibigroup.co.in/images/header-new-logo.png"
              alt="IBI Group Logo"
              className="w-24 mb-2"
            />
            <p className="text-gray-400 text-sm">An ISO 9001:2008 Certified Co.</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Useful Links</h3>
            <ul>
              <li><a href="#" className="text-gray-400 hover:text-white">Career</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white">Contact</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Contact Us</h3>
            <p className="text-gray-400 text-sm">Javeri Chambers, 3rd Floor, 164 Mody Street, Fort, Mumbai-400001</p>
            <p className="text-gray-400 text-sm">📞 9930077722</p>
            <p className="text-gray-400 text-sm">✉ info@ibigroup.co.in</p>
          </div>
          <div>
            <h3 className="text-lg font-bold mb-2">Social Media</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">🔗 LinkedIn</a>
              <a href="#" className="text-gray-400 hover:text-white">📘 Facebook</a>
              <a href="#" className="text-gray-400 hover:text-white">📷 Instagram</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};
  

export default AboutUs;
