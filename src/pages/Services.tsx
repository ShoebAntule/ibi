import React, { useState } from "react";
import { motion } from "framer-motion";
import Header from "../components/layout/Header"; // Import Header component


const servicesData = [
  // {
  //   title: "Safeguarding and Security Solutions",
  //   image: "https://ibigroup.co.in/images/guard.jpg",
  //   shortText: "A secure workplace fosters productivity. IBI provides customizable private guarding services...",
  //   fullText: "A secure workplace fosters productivity. IBI provides customizable private guarding services to meet your specific needs. Our licensed guard teams are well-trained to cover all security aspects. We value that our guards represent both you and us, so they are uniformed, courteous, informative, and professional."
  // },
  {
    title: "Investigation & Detection",
    image: "https://ibigroup.co.in/images/inv.jpg",
    shortText: "Our investigators and detectors are trained to see what is not obvious...",
    fullText: "Sir Arthur Conan Doyle, the author of the celebrated detective character Sherlock Holmes quotes, 'There Is Nothing As Deceptive As An Obvious Fact'. Our investigators and detectors are trained to see what is not obvious. Their sense of picking up what is truth and what is fake makes them unparalleled personnel to rely on. They have excellent communication skills, critical thinking capabilities, and problem-solving mastery. They are equipped with knowledge of Law and Order and encouraged to foster honesty."
  },
  // {
  //   title: "AI-Enhanced Electronic Security Solutions",
  //   image: "https://ibigroup.co.in/images/elec-se.jpg",
  //   shortText: "At IBI Group, we redefine electronic security by infusing cutting-edge AI technology...",
  //   fullText: "At IBI Group, we redefine electronic security by infusing cutting-edge AI technology into our services. Our AI-based electronic security solutions offer real-time monitoring, predictive insights, and swift response capabilities. By seamlessly integrating AI with our advanced electronic systems, we create a proactive shield against threats. Expect heightened threat detection accuracy, reduced risks, and improved incident management."
  // },
  {
    title: "Risk Consulting",
    image: "https://ibigroup.co.in/images/ris-cons.jpg",
    shortText: "We provide an integrated suite of threat, risk, and vulnerability assessments...",
    fullText: "We provide an integrated suite of threat, risk, and vulnerability assessments, project management, and operational consulting services to help clients achieve the maximum level of security. We help clients to identify, measure and analyze a full spectrum of physical, cyber and integrity threats, risks and vulnerabilities."
  },
  {
    title: "Cyber forensics",
    image: "https://ibigroup.co.in/images/forens.jpg",
    shortText: "There are instances when there is a breach in the system(s) of the company leading to theft or modification...",
    fullText: "There are instances when there is a breach in the system(s) of the company leading to theft or modification with confidential data of the company. This is an extremely serious matter because in the current digital age, every big or small data exists mostly in hard drives or cloud storages and any such incident could lead to divulgence of important information that is specific to the company. This could be the outcome of infiltration by domestic staff or hacking of the data by hackers. In any case, it is rather important that the countermeasures are taken as soon as possible to avoid incurring any further damages Cyber Forensics is the department that specializes in running investigations to backtrack the activities to reach the source of the breach. The investigation is done with the help of proprietary investigation softwares. Special attention is given to the system on which the investigation is done. A copy of the all the files in the original system is prepared and is locked away in a safe so that it can be presented in the court. The rest of the research is run in the copy of the original."
  },
];

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  return (
    <div className="top-0 z-10 p-0 bg-gray-900">
      <Header /> <div/>
    <div className="p-10 bg-gradient-to-r from-gray-900 to-blue-900 text-white">
      <motion.h1 
        className="text-4xl font-bold mb-10 text-center animate-bounce"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        Our Security Services
      </motion.h1>
      {servicesData.map((service, index) => (
        <motion.div
          key={index}
          className="mb-10 p-5 bg-gray-800 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <motion.img 
            src={service.image} 
            alt={service.title} 
            className="w-1/3 h-auto rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105"
          />
          <div className="flex-1">
            <motion.h2 
              className="text-2xl font-bold hover:text-blue-400 transition duration-300"
            >
              {service.title}
            </motion.h2>
            <p className="mt-2">
              {expandedIndex === index ? service.fullText : service.shortText}
            </p>
            <button 
              className="text-blue-500 mt-2 hover:bg-blue-700 px-3 py-1 rounded-lg transition duration-300"
              onClick={() => setExpandedIndex(expandedIndex === index ? null : index)}
            >
              {expandedIndex === index ? "Show Less" : "Read More"}
            </button>
          </div>
        </motion.div>
      ))}
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
    </div>
  );
};

export default Services;