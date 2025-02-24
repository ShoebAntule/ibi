import React from "react";

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white sticky top-0 z-10">
      <nav className="flex justify-between p-4">
        <div className="text-lg font-bold">IBI Group</div>
        <div>
          <a href="/" className="mr-4">Home</a>
          <a href="/about" className="mr-4">About</a>
          <a href="/services">Services</a>
        </div>
      </nav>
    </header>
  );
};

export default Header;
