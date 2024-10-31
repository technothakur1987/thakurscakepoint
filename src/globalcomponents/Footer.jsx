import React from "react";
import { Link } from "react-router-dom";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="min-h-[15vh] lg:min-h-[55vh] text-[#701A23] px-5 py-10 flex flex-col justify-between font-poppins">
      <div className="flex-grow">
        <div className="md:flex md:justify-between md:items-start">
          {/* Logo Section */}
          <div className="md:basis-1/3 mb-8 md:mb-0 flex flex-col items-center md:items-start">
            <img
              src="https://i.ibb.co/wwsmJt3/logo-1-removebg-preview.png"
              alt="Marino Bakery Logo"
              className="h-[15vh] mb-5"
            />
            <p className="text-[#701A23] text-center md:text-start">
              Delivering quality and health in every bite. Discover more about our passion for great food.
            </p>
          </div>

          {/* Navigation Links Section */}
          <div className="md:basis-1/3 mb-8 md:mb-0 text-center">
            <h2 className="text-xl uppercase font-semibold mb-4 text-[#ff0000] ">Explore</h2>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="hover:text-[#ff0000] transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/aboutus" className="hover:text-[#ff0000] transition-colors duration-300">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/products" className="hover:text-[#ff0000] transition-colors duration-300">
                  Products
                </Link>
              </li>
              <li>
                <Link to="/contactus" className="hover:text-[#ff0000] transition-colors duration-300">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info Section */}
          <div className="md:basis-1/3 text-center">
            <h2 className="text-xl uppercase font-semibold mb-4 text-[#ff0000]">Contact Us</h2>
            <ul className="space-y-3 ">
              <li className="flex items-center space-x-2 justify-center">
                <FaMapMarkerAlt className="text-[#ff0000]" />
                <span>135, NewColony, Mhow, MP</span>
              </li>
              
              <li className="flex items-center space-x-2 justify-center">
                <FaEnvelope className="text-[#ff0000]" />
                <span>info@marinobakery.com</span>
              </li>
              <li className="flex items-center space-x-2 justify-center">
                <FaPhoneAlt className="text-[#ff0000]" />
                <span>+91 8109184732</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="text-center mt-5">
        <hr className="border-t-2 border-[#ff0000] mb-2" />
        <p className="text-[#701A23]">
          © 2024 Thakur's Cake Point. All rights reserved. 
          <span> Design and Developed by <a href="https://vikrambais2024.netlify.app/" className="text-[#ff0000] cursor-pointer hover:font-bold" target="_blank">Vikram</a></span>
        </p>
      </div>
    </div>
  );
};

export default Footer;
