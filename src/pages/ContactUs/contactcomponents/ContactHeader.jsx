import React from "react";

const ContactHeader = ({contactheaderref}) => {
  return (
    <div ref={contactheaderref} className="h-[30vh] md:h-[40vh] lg:h-[60vh] bg-[url('https://i.ibb.co/5kQY9Ry/image-1.png')] bg-no-repeat bg-center bg-cover flex items-center px-5 w-full">
      <div className=" flex flex-col items-center md:items-start  ">
        <h1 className=" text-[#FFCE0F] text-xl md:text-3xl lg:text-5xl  font-black capitalize mb-3 mt-10 ">
          Connect Us
        </h1>
        <p className="  text-white  font-normal text-lg md:text-xl leading-6 md:leading-6  mb-5 md:mb-10 text-center md:text-start">
          We would love to hear from you.
        </p>
      </div>
    </div>
  );
};

export default ContactHeader;
