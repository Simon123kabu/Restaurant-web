import { Link, useLocation } from "react-router-dom";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";
import React from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const [cartItems] = useState(3); // Replace with your cart state

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex-shrink-0">
            <span className="text-xl font-bold text-orange-600">Gourmet</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8">
            <Link
              to="/"
              className={`${isActive("/") ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-700 hover:text-orange-600"} font-medium transition duration-300`}
            >
              Home
            </Link>
            <Link
              to="/menu"
              className={`${isActive("/menu") ? "text-orange-600 border-b-2 border-orange-600" : "text-gray-700 hover:text-orange-600"} font-medium transition duration-300`}
            >
              Menu
            </Link>
            <Link
              to="/cart"
              className="relative text-gray-700 hover:text-orange-600"
            >
              <FaShoppingCart size={20} />
              {cartItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                  {cartItems}
                </span>
              )}
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 focus:outline-none"
            >
              {isMenuOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white pb-4">
            <div className="flex flex-col space-y-3 px-4 pt-3">
              <Link
                to="/"
                onClick={() => setIsMenuOpen(false)}
                className={`${isActive("/") ? "text-orange-600" : "text-gray-700"} font-medium py-2 border-b border-gray-100`}
              >
                Home
              </Link>
              <Link
                to="/menu"
                onClick={() => setIsMenuOpen(false)}
                className={`${isActive("/menu") ? "text-orange-600" : "text-gray-700"} font-medium py-2 border-b border-gray-100`}
              >
                Menu
              </Link>
              <Link
                to="/cart"
                onClick={() => setIsMenuOpen(false)}
                className="flex items-center text-gray-700 font-medium py-2"
              >
                Cart
                {cartItems > 0 && (
                  <span className="ml-2 bg-orange-600 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems}
                  </span>
                )}
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;