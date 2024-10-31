import React, { useState, useEffect } from "react";
import headerVideo from "../../../assets/headerVideo2.mp4";
import { ReactTyped } from "react-typed";

import { useNavigate } from "react-router-dom";

const HomeHeader = () => {
  let navigate = useNavigate();
  const [isVideoLoaded, setIsVideoLoaded] = useState(false); // State to track video loading

  // Navigation handlers
  const handleOurCompany = () => {
    navigate("/aboutus");
  };

  const handleContactUs = () => {
    navigate("/contactus");
  };
  return (
    <div className="relative w-full h-[80vh] md:h-[60vh] lg:h-screen  overflow-hidden">
      {/* Placeholder Image */}
      {!isVideoLoaded && (
        <img
          src={`https://i.ibb.co/sbyqTd8/headerplaceholderimage.jpg`} // Placeholder image source
          alt="Loading..."
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
      )}

      <video
        src={headerVideo}
        className={`absolute top-0 left-0 w-full h-full object-cover ${
          isVideoLoaded ? "block" : "hidden"
        }`} // Show/hide video based on loading state
        autoPlay
        loop
        muted
        playsInline
        onLoadedData={() => setIsVideoLoaded(true)} // Set video loaded state
      ></video>

      {/* Dark Overlay Centered with Text and Buttons */}
      <div className="absolute top-[60%] left-1/2 w-[90%] md:w-[70%] h-fit transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center justify-center space-y-3 rounded-lg py-10 px-2 md:p-10 z-10">
        {/* Dark Overlay */}
        <div className="absolute top-0 left-0 w-full h-full bg-black opacity-30 rounded-lg z-10"></div>

        {/* Text and Buttons */}
        <h1 className="text-white text-3xl md:text-4xl mb-1 font-pacifico z-10 text-center">
          Welcome to Thakur's Cake Point
        </h1>

        <div className="animatedtyping z-10 ">
          <ReactTyped
            strings={[
              "Surprise Your Taste Buds",
              "Best Cakes In Town",
              "Delicious Butter Rich Cakes",
            ]}
            typeSpeed={20}
            backSpeed={20}
            loop
            className="text-[#FFCE0F] text-xl md:text-3xl lg:text-5xl  font-black text-center z-10 capitalize"
          ></ReactTyped>
        </div>
        <p className="text-white text-center mx-auto w-[90%] md:w-[50%]  font-normal text-lg md:text-xl leading-6 md:leading-6 z-10">
          Thakur's Cake Point is a prominent shop based in Mhow, MP,
          specializing in the production of cakes for all occasions.
        </p>

        {/* Buttons */}
        <div className="flex flex-col space-y-5 md:space-y-0 md:flex-row space-x-0 md:space-x-8 z-10 pt-5  w-full md:w-fit">
          <button
            className="px-6 py-4 md:py-2 bg-[#FFCE0F] uppercase text-[#701A23] rounded font-bold text-base hover:text-[#FFCE0F] hover:bg-[#701A23] hover:scale-110 transition duration-500 ease-in-out"
            onClick={handleOurCompany}
          >
            Our Company
          </button>
          <button
            className="uppercase px-6 py-4 md:py-2 bg-[#701A23] text-[#FFCE0F] rounded font-bold text-base hover:bg-[#FFCE0F] hover:text-[#701A23] hover:scale-110 transition duration-500 ease-in-out"
            onClick={handleContactUs}
          >
            Contact Us
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomeHeader;
