import React, { useState, useRef } from "react";
import { NavLink, Link } from "react-router-dom";
import soundFile from "../assets/sound.mp3";
import { RxHamburgerMenu } from "react-icons/rx";
import { MdClose } from "react-icons/md";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const audio = useRef(new Audio(soundFile));

  const playSound = () => {
    console.log('playing sound')
    audio.current.play();
  };

  const sidemenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="h-[10vh] lg:h-[15vh] flex justify-center shadow-lg fixed top-0 w-full font-poppins z-[99] bg-white navbar px-5">
      {/* For larger screens */}
      <ul className="hidden list-unstyled lg:flex items-center  justify-center gap-14 text-xl font-semibold text-[#701A23]  ">
        <li>
          <NavLink to="/products">Products</NavLink>
        </li>
        <li>
          <NavLink to="/aboutus">About Us</NavLink>
        </li>
        <li>
          <NavLink to="/contactus/">Contact Us</NavLink>
        </li>
        <li>
          <Link to="/" onClick={playSound} className="mx-10">
            <img
              src="https://i.ibb.co/wwsmJt3/logo-1-removebg-preview.png"
              alt="Logo"
              className="h-[20vh] mt-[7vh]"
            />
          </Link>
        </li>
        <li>
          <NavLink to="/login">Log-In</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Sign-Up</NavLink>
        </li>
        <li className="relative">
          <Link to="/cart">
            <i className="ri-shopping-cart-fill text-2xl"></i>
            <span className="absolute top-[-10px] right-[-10px] bg-[#FFCE0F] text-[#701A23] rounded-full text-xs w-5 h-5 flex items-center justify-center">
              2
            </span>
          </Link>
        </li>
      </ul>

      {/* For smaller screens */}
      <div className="block lg:hidden bg-[#701A23] h-full w-full px-5 flex items-center justify-between">
        <Link to="/" onClick={playSound} className="">
          <img
            src="https://i.ibb.co/wwsmJt3/logo-1-removebg-preview.png"
            alt="Logo"
            className="h-[15vh] mt-12 relative z-[11]"
          />
        </Link>

        <RxHamburgerMenu className="text-4xl text-[#FFCE0F]" onClick={sidemenu} />

        {/* Sidemenu */}
        <div
          className={`fixed inset-0 bg-black opacity-50 backdrop-blur-sm z-[9] ${isOpen ? 'open' : 'close'}`}
          
        ></div>
        <div
          className={`absolute top-0 left-0 h-screen bg-red-900 ${isOpen ? 'openmenu' : 'closemenu'} z-[10] `}
        >
          <MdClose className="text-5xl text-[#FFCE0F] absolute top-5 right-5 z-[10]" onClick={sidemenu} />
           <div className={`flex flex-col items-start px-10 pt-[18vh] ${isOpen ? 'openmenu' : 'closemenu'}`} >
            <NavLink to="/products" onClick={sidemenu} className="py-5 text-white text-xl">Products</NavLink>
            <NavLink to="/aboutus" onClick={sidemenu} className="py-5 text-white text-xl">About Us</NavLink>
            <NavLink to="/contactus/" onClick={sidemenu} className="py-5 text-white text-xl">Contact Us</NavLink>
            <NavLink to="/login" onClick={sidemenu} className="py-5 text-white text-xl">Log-In</NavLink>
            <NavLink to="/signin" onClick={sidemenu} className="py-5 text-white text-xl">Sign-Up</NavLink>
            <li className="relative py-10 left-[-5%]">
              <Link to="/cart" onClick={sidemenu}>
                <i className="ri-shopping-cart-fill text-white text-4xl md:text-2xl "></i>
                <span className="absolute top-[15%] right-[-10px] bg-[#FFCE0F] text-[#701A23] rounded-full text-xl w-5 h-5 flex items-center justify-center">2</span>
              </Link>
            </li>
          </div> 
        </div>
      </div>
    </div>
  );
};

export default Navbar;
