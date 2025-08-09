import { FaFacebook, FaInstagram, FaTwitter, FaMapMarkerAlt, FaPhone, FaEnvelope } from "react-icons/fa";
import { GiChickenLeg, GiSushis, GiPizzaSlice, GiIceCreamCone } from "react-icons/gi";
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-6 pb-2 relative overflow-hidden">
      {/* Floating Food Animation */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <GiChickenLeg className="absolute text-orange-400 opacity-20 animate-float" 
          style={{ top: '10%', left: '5%', fontSize: '2rem', animationDelay: '0s' }} />
        <GiSushis className="absolute text-orange-400 opacity-20 animate-float" 
          style={{ top: '30%', right: '10%', fontSize: '1.8rem', animationDelay: '1s' }} />
        <GiPizzaSlice className="absolute text-orange-400 opacity-20 animate-float" 
          style={{ bottom: '20%', left: '15%', fontSize: '2.2rem', animationDelay: '2s' }} />
        <GiIceCreamCone className="absolute text-orange-400 opacity-20 animate-float" 
          style={{ bottom: '40%', right: '5%', fontSize: '1.5rem', animationDelay: '1.5s' }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-orange-400">Contact</h4>
            <ul className="space-y-2">
              <li className="flex items-center">
                <FaMapMarkerAlt className="mr-2 text-orange-400" />
                <span>123 Food Street</span>
              </li>
              <li className="flex items-center">
                <FaPhone className="mr-2 text-orange-400" />
                <span>(123) 456-7890</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-2 text-orange-400" />
                <span>hello@gourmet.com</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-orange-400">Follow Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-orange-400 transition text-xl">
                <FaFacebook />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition text-xl">
                <FaInstagram />
              </a>
              <a href="#" className="text-gray-300 hover:text-orange-400 transition text-xl">
                <FaTwitter />
              </a>
            </div>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-3 text-orange-400">Newsletter</h4>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email" 
                className="px-3 py-2 bg-gray-800 text-white rounded-l focus:outline-none focus:ring-1 focus:ring-orange-400 w-full"
              />
              <button className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-r transition">
                Join
              </button>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-6 pt-4 border-t border-gray-800 text-center text-sm text-gray-400">
          <p>&copy; {new Date().getFullYear()} Gourmet. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;