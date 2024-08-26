import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-semibold">Fitness Website</Link>
        <div>
          <Link to="/" className="text-white px-4">Home</Link>
          <Link to="/about" className="text-white px-4">About</Link>
          <Link to="/services" className="text-white px-4">Services</Link>
          <Link to="/contact" className="text-white px-4">Contact</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
