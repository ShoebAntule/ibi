import React from "react";

import { Link } from "react-router-dom"; // Import Link for navigation

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white sticky top-0 z-10">
      <nav className="flex justify-between p-4">
        <div className="text-lg font-bold">IBI Group</div>
        <div>
          <a href="/" className="mr-4">Home</a>
          <a href="/about" className="mr-4">About</a>
          <a href="/services">Services</a>
          <Link to="/contact" className="ml-4">Contact Us</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
