import React from "react";
import { FaUsersCog,FaUsers  } from "react-icons/fa";
import { LiaAwardSolid } from "react-icons/lia";

const HomeCategories = () => {
  return (
    <div className="min-h-[50vh] bg-gray-100 px-5 py-10 md:py-16">
      <h4 className="text-2xl md:text-3xl font-medium text-neutral-800 uppercase text-center mb-3">
        Discover Our Cake Categories
      </h4>
      <p className="font-normal text-gray-500 text-lg md:text-xl leading-6 md:leading-6 uppercase text-center mb-32 lg:mb-24">
        Discover our range of healthy and tasty cakes that whisper promises of
        pure delight.
      </p>

      {/* Flex container for responsive layout */}
      <div className="flex flex-wrap justify-between gap-x-6 gap-y-36 md:gap-y-22 lg:gap-y-20 mb-10 md:mb-16">
        {/* Card 1 */}
        <div className="bg-white rounded-lg flex flex-col items-center justify-end py-5 px-5 w-full sm:w-[48%] md:w-[30%] min-h-[30vh] flex-grow relative">
          <img
            src="https://i.ibb.co/fp6sxJL/croppedweddingcake.png"
            alt="Wedding Cakes"
            className="h-[13rem] lg:h-[8rem] w-[13rem] lg:w-[8rem] rounded-full absolute left-1/2 transform -translate-x-1/2 top-0 -translate-y-[50%] hover:scale-110 transition duration-500 ease-in-out"
          />
          <p className="font-bold text-red-500 text-xl md:text-3xl leading-6 text-center mb-2">
            Wedding Cakes
          </p>
          <p className="font-normal text-gray-500 text-lg md:text-xl leading-6 text-center">
            Elegant and delicious, perfect for your big day.
          </p>
        </div>

         {/* Card 1 */}
         <div className="bg-white rounded-lg flex flex-col items-center justify-end py-5 px-5 w-full sm:w-[48%] md:w-[30%] min-h-[30vh] flex-grow relative">
          <img
            src="https://i.ibb.co/pf24cPC/croppedanniversarycakes.png"
            alt="Anniversary Cakes"
            className="h-[13rem] lg:h-[8rem] w-[13rem] lg:w-[8rem] rounded-full absolute left-1/2 transform -translate-x-1/2 top-0 -translate-y-[50%] hover:scale-110 transition duration-500 ease-in-out"
          />
          <p className="font-bold text-red-500 text-xl md:text-3xl leading-6 text-center mb-2">
            Anniversary Cakes
          </p>
          <p className="font-normal text-gray-500 text-lg md:text-xl leading-6 text-center">
          Celebrate love and togetherness with a sweet treat.
          </p>
        </div>

         {/* Card 1 */}
         <div className="bg-white rounded-lg flex flex-col items-center justify-end py-5 px-5 w-full sm:w-[48%] md:w-[30%] min-h-[30vh] flex-grow relative">
          <img
            src="https://i.ibb.co/DrszsPJ/croppedbirthdaycake.png"
            alt="Birthday Cakes"
            className="h-[13rem] lg:h-[8rem] w-[13rem] lg:w-[8rem] rounded-full absolute left-1/2 transform -translate-x-1/2 top-0 -translate-y-[50%] hover:scale-110 transition duration-500 ease-in-out"
          />
          <p className="font-bold text-red-500 text-xl md:text-3xl leading-6 text-center mb-2">
            Birthday Cakes
          </p>
          <p className="font-normal text-gray-500 text-lg md:text-xl leading-6 text-center">
          Make every birthday special with a personalized cake.
          </p>
        </div>

         {/* Card 1 */}
         <div className="bg-white rounded-lg flex flex-col items-center justify-end py-5 px-5 w-full sm:w-[48%] md:w-[30%] min-h-[30vh] flex-grow relative">
          <img
            src="https://i.ibb.co/7XVWjKM/croppedfestivalcake.png"
            alt="festival Cakes"
            className="h-[13rem] lg:h-[8rem] w-[13rem] lg:w-[8rem] rounded-full absolute left-1/2 transform -translate-x-1/2 top-0 -translate-y-[50%] hover:scale-110 transition duration-500 ease-in-out"
          />
          <p className="font-bold text-red-500 text-xl md:text-3xl leading-6 text-center mb-2">
           Festival Cakes
          </p>
          <p className="font-normal text-gray-500 text-lg md:text-xl leading-6 text-center">
          Add sweetness to your holidays and celebrations.
          </p>
        </div>
         {/* Card 1 */}
         <div className="bg-white rounded-lg flex flex-col items-center justify-end py-5 px-5 w-full sm:w-[48%] md:w-[30%] min-h-[30vh] flex-grow relative">
          <img
            src="https://i.ibb.co/6Y87vkP/croppedfarewellcakes.png"
            alt="farerwell Cakes"
            className="h-[13rem] lg:h-[8rem] w-[13rem] lg:w-[8rem] rounded-full absolute left-1/2 transform -translate-x-1/2 top-0 -translate-y-[50%] hover:scale-110 transition duration-500 ease-in-out"
          />
          <p className="font-bold text-red-500 text-xl md:text-3xl leading-6 text-center mb-2">
            Farewell Cakes
          </p>
          <p className="font-normal text-gray-500 text-lg md:text-xl leading-6 text-center">
          Say goodbye with sweetness and good memories.
          </p>
        </div>

       

        

         

        

        
      </div>

      <div className="flex flex-wrap justify-between gap-10 md:gap-6">
        {/* Card 1 */}
        <div className="bg-[#FFCE0F] shadow-[0_0_10px_1px_grey] rounded-lg flex flex-col items-center justify-end py-5 px-5 w-full sm:w-[48%] md:w-[30%] min-h-[30vh] flex-grow ">
            <div className="bg-gray-500 rounded-full p-7 md:p-2 mb-5 hover:scale-110 transition duration-500 ease-in-out hover:bg-neutral-800 "><FaUsersCog className="text-7xl md:text-7xl text-[#FFCE0F] "/></div>
          
          <p className="font-black text-red-500 text-xl md:text-3xl leading-6 text-center mb-2">
            2+
          </p>
          <p className="font-bold text-neutral-800 text-lg md:text-xl leading-6 text-center">
           Years of Operation
          </p>
        </div>

         {/* Card 1 */}
         <div className="bg-[#FFCE0F] shadow-[0_0_10px_1px_grey]  rounded-lg flex flex-col items-center justify-end py-5 px-5 w-full sm:w-[48%] md:w-[30%] min-h-[30vh] flex-grow ">
            <div className="bg-gray-500 rounded-full p-7 md:p-2  mb-5 hover:scale-110 transition duration-500 ease-in-out hover:bg-neutral-800 "><FaUsers  className="text-7xl text-[#FFCE0F] "/></div>
          
          <p className="font-black text-red-500 text-xl md:text-3xl leading-6 text-center mb-2">
            25+
          </p>
          <p className="font-bold text-neutral-800 text-lg md:text-xl leading-6 text-center">
           Employees
          </p>
        </div>

         {/* Card 1 */}
         <div className="bg-[#FFCE0F]  shadow-[0_0_10px_1px_grey] rounded-lg flex flex-col items-center justify-end py-5 px-5 w-full sm:w-[48%] md:w-[30%] min-h-[30vh] flex-grow ">
            <div className="bg-gray-500 rounded-full p-7 md:p-2 mb-5 hover:scale-110 transition duration-500 ease-in-out hover:bg-neutral-800 "><LiaAwardSolid className="text-7xl text-[#FFCE0F] "/></div>
          
          <p className="font-black text-red-500 text-xl md:text-3xl leading-6 text-center mb-2">
            4+
          </p>
          <p className="font-bold text-neutral-800 text-lg md:text-xl leading-6 text-center">
           Awards & Recognition
          </p>
        </div>

        

        

         

        

       

        

         

        

        
      </div>
    </div>
  );
};

export default HomeCategories;
