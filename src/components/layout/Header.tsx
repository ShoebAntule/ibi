import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
  };

  return (
    <header className="bg-gray-900 text-white fixed top-0 left-0 right-0 z-50 shadow-md overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <div className="text-xl font-bold">
            <Link to="/">IBI Group</Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/" className="hover:text-blue-400 transition-colors">Home</Link>
            <Link to="/about" className="hover:text-blue-400 transition-colors">About</Link>
            <Link to="/services" className="hover:text-blue-400 transition-colors">Services</Link>
            <Link to="/career" className="hover:text-blue-400 transition-colors">Career</Link>
            <Link to="/contact" className="hover:text-blue-400 transition-colors">Contact</Link>
            
            {/* Chatbot Button */}
            <button 
              onClick={toggleChat}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors focus:outline-none"
              aria-label="Open chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
          </nav>

          {/* Mobile Navigation Controls */}
          <div className="flex items-center space-x-4 md:hidden">
            {/* Chatbot Button (Mobile) */}
            <button 
              onClick={toggleChat}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full p-2 transition-colors focus:outline-none"
              aria-label="Open chat"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </button>
            
            {/* Hamburger Menu Button */}
            <button 
              className="focus:outline-none" 
              onClick={toggleMenu}
              aria-label="Toggle menu"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div 
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.2 }}
              className="md:hidden overflow-hidden"
            >
              <div className="flex flex-col space-y-4 py-4">
                <Link to="/" className="hover:text-blue-400 transition-colors" onClick={toggleMenu}>Home</Link>
                <Link to="/about" className="hover:text-blue-400 transition-colors" onClick={toggleMenu}>About</Link>
                <Link to="/services" className="hover:text-blue-400 transition-colors" onClick={toggleMenu}>Services</Link>
                <Link to="/career" className="hover:text-blue-400 transition-colors" onClick={toggleMenu}>Career</Link>
                <Link to="/contact" className="hover:text-blue-400 transition-colors" onClick={toggleMenu}>Contact</Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Chat Window (simplified placeholder - would typically be a separate component) */}
      {isChatOpen && (
        <div className="fixed bottom-4 right-4 w-80 h-96 bg-white text-black rounded-lg shadow-lg flex flex-col z-50">
          <div className="bg-blue-500 text-white p-3 rounded-t-lg flex justify-between items-center">
            <h3 className="font-medium">Chat with us</h3>
            <button onClick={toggleChat} className="focus:outline-none">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
          <div className="flex-1 p-3 overflow-y-auto">
            <p className="text-gray-600">Hello! How can we help you today?</p>
          </div>
          <div className="border-t p-3">
            <div className="flex">
              <input 
                type="text" 
                placeholder="Type your message..." 
                className="flex-1 border rounded-l-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-300"
              />
              <button className="bg-blue-500 text-white px-4 rounded-r-lg hover:bg-blue-600 focus:outline-none">
                Send
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
