import React from "react";
import { BsTelephoneForwardFill } from "react-icons/bs";
import { FaHandsHelping, FaSeedling, FaCompass } from "react-icons/fa"; // Professional icons

const AboutMission = () => {
  return (
    <div className="bg-[#FFCE0F] min-h-[50vh] px-5 flex flex-col md:flex-row py-5 md:py-20 gap-5 md:gap-[0]">
      <div className="basis-1/2 md:px-5  ">
        <div className="bg-gray-100 h-full w-full rounded-lg flex flex-col justify-center items-start px-5 md:px-10 py-5 md:py-20">
          <h6 className="text-xl text-[#701A23] uppercase font-bold mb-2 md:mb-2">
            Why Choose Us
          </h6>
          <h4 className="text-2xl md:text-3xl font-medium text-neutral-800 capitalize mb-2 md:mb-5">
            Freshly Baked, Perfectly Tasty
          </h4>
          <p className="font-normal text-gray-500 text-lg md:text-xl leading-6 mb-5 text-justify">
            Embark on a guilt-free journey of indulgence, where every bite is
            crafted to bring you the perfect balance of rich flavors and
            wholesome goodness. At our bakery, we believe that you don’t have to
            compromise on taste to nourish your body, ensuring that each treat
            not only satisfies your cravings but also supports your well-being.
          </p>
          <div className="flex items-center">
            <a
              href="tel:8109184732"
              className="bg-[#701a238a] p-5 rounded-full text-[#701A23] text-3xl hover:text-[#FFCE0F] cursor-pointer"
              aria-label="Call us"
            >
              <BsTelephoneForwardFill />
            </a>
            <div className="ps-5">
              <p className="text-lg font-medium text-neutral-800">
                NEED MORE HELP ?
              </p>
              <p className="text-3xl font-medium text-[#701A23]">
                +91-8109184732
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="basis-1/2 flex flex-col gap-5">
        <div className="basis-1/3 bg-gray-100 rounded-lg hover:scale-105 transition duration-700 ease-in-out px-5 flex flex-col md:flex-row items-center shadow-md hover:shadow-lg gap-5 md:gap-[unset] py-5 md:py-[unset]">
          <FaSeedling className="text-[#9C27B0] text-[3rem] md:text-[10rem]" aria-label="Our Mission" />
          <div className="md:ps-10">
            <p className="text-lg font-medium text-[#701A23] text-center md:text-start">Our Mission</p>
            <p className="font-normal text-gray-500 text-lg  leading-6  text-center md:text-justify">
              To bring joy to every occasion by creating delectable treats that tantalize your taste buds, using the finest ingredients and expert craftsmanship.
            </p>
          </div>
        </div>
        <div className="basis-1/3 bg-gray-100 rounded-lg hover:scale-105 transition duration-700 ease-in-out px-5 flex flex-col md:flex-row items-center shadow-md hover:shadow-lg gap-5 md:gap-[unset] py-5 md:py-[unset]">
          <FaCompass className="text-[#3F51B5] text-[3rem] md:text-[10rem]" aria-label="Our Vison" />
          <div className="md:ps-10">
            <p className="text-lg font-medium text-[#701A23] text-center md:text-start">Our Vision</p>
            <p className="font-normal text-gray-500 text-lg  leading-6  text-center md:text-justify">
            To become the go-to destination for sweet delights, where Marino is synonymous with exceptional quality, innovative flavors, and irresistible aromas.
            </p>
          </div>
        </div>

        <div className="basis-1/3 bg-gray-100 rounded-lg hover:scale-105 transition duration-700 ease-in-out px-5 flex flex-col md:flex-row items-center shadow-md hover:shadow-lg gap-5 md:gap-[unset] py-5 md:py-[unset]">
          <FaHandsHelping className="text-[#4CAF50] text-[3rem] md:text-[10rem]" aria-label="Our Commitement" />
          <div className="md:ps-10">
            <p className="text-lg font-medium text-[#701A23] text-center md:text-start">Our Commitment</p>
            <p className="font-normal text-gray-500 text-lg  leading-6  text-center md:text-justify">
            We are committed to crafting baked goods that surpass expectations, prioritizing freshness, and handcrafted perfection in every creation.
            </p>
          </div>
        </div>
       
      </div>
    </div>
  );
};

export default AboutMission;
