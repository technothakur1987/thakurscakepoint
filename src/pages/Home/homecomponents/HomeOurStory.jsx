import React from "react";
import cakebg from '../../../assets/cakebg2.jpg'

const HomeOurStory = () => {
  return (
    <section className="min-h-[50vh] flex flex-col md:flex-row px-5 py-10 border border-5 font-poppins bg-gray-100">
      {/* Image Section */}
      <div className="md:basis-1/2 mb-5 md:mb-0 flex justify-center items-center">
        <img
         
          src={cakebg}
          
          alt="Thakur's Cake Point"
          className="rounded-lg w-[80%] object-cover h-[40vh] "
        />
      </div>

      {/* Text Section */}
      <article className="md:basis-1/2 px-5 md:px-10 flex flex-col justify-center py-5">
        <h6 className="text-xl text-[#701A23] uppercase font-bold  mb-2 md:mb-5">Our Story</h6>
        <h4 className="text-2xl md:text-3xl font-medium text-neutral-800 capitalize">
          Rising from Humble
        </h4>
        <h4 className="text-2xl md:text-3xl font-medium text-neutral-800 capitalize mb-2 md:mb-5">
          Origins to Sweet Success
        </h4>
        <p className="font-normal text-gray-500 text-lg md:text-xl leading-6 md:leading-6">
        Thakur's Cake Point specializes in cakes for all occasions, offering high-quality products to make every celebration memorable. Our commitment to excellence has made us a recognized name in the confectionery industry.
          </p>
      </article>
    </section>
  );
};

export default HomeOurStory;
