import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white sticky top-0 z-10">
      <nav className="flex justify-between p-4">
        <div className="text-lg font-bold">IBI Group</div>
        <div>
          <Link to="/" className="mr-4">Home</Link>
          <Link to="/about" className="mr-4">About</Link>
          <Link to="/services">Services</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
