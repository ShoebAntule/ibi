import React, { useState } from "react";
import { Link } from "react-router-dom";
import Chatbot from "../chatbot/Chatbot";

const Header: React.FC = () => {
  const [showChatbot, setShowChatbot] = useState(false);

  const toggleChatbot = () => {
    setShowChatbot(!showChatbot);
  };

  return (
    <>
      <header className="bg-gray-800 text-white sticky top-0 z-10">
        <nav className="flex justify-between p-4">
          <div className="text-lg font-bold">IBI Group</div>
          <div>
            <a href="/" className="mr-4">Home</a>
            <a href="/about" className="mr-4">About</a>
            <a href="/services">Services</a>
            <Link to="/contact" className="ml-4">Contact Us</Link>
            <Link to="/career" className="ml-4">Career</Link>
            <button 
              onClick={toggleChatbot}
              className="ml-4 bg-blue-500 hover:bg-blue-600 px-3 py-1 rounded-md"
            >
              Chat
            </button>
          </div>
        </nav>
      </header>
      {showChatbot && <Chatbot onClose={toggleChatbot} />}
    </>
  );
};

export default Header;
