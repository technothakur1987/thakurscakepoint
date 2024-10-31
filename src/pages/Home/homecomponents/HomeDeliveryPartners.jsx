import React from 'react'

const HomeDeliveryPartners = () => {
  return (
    <div className=' min-h-[70vh] md:min-h-[70vh]  lg:min-h-[85vh] flex flex-col justify-evenly items-center font-poppins px-5'>
      <h4 className="text-2xl md:text-3xl font-medium text-neutral-800 uppercase text-center mb-3">
        Our Online Delivery Partners
      </h4>

      <div className=' h-[50vh] md:h-[40vh] lg:h-[50vh] w-full md:w-[50vw] bg-gray-100 shadow-[0_0_5px_1px_grey] rounded-lg flex flex-col md:flex-row items-center justify-evenly'>
        {/* Zepto Box 1 */}
        <div className="group bg-[#3B115B] h-[40%] md:h-[40%] lg:h-[50%] w-[80%] md:w-[30%] bg-[url('https://www.marino.co.in/wp-content/uploads/2024/02/zepto.jpg')] bg-contain bg-no-repeat bg-center hover:bg-none hover:rounded-lg hover:scale-110 md:hover:scale-125 transition duration-700 ease-in-out text-[#ffffff] font-bold text-xl flex justify-center items-center uppercase relative">
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Zepto</p>
        </div>

        {/* Zepto Box 2 */}
        <div className="group hover:bg-[#A4cc38] h-[40%] md:h-[40%] lg:h-[50%] w-[80%] md:w-[30%] bg-[url('https://www.marino.co.in/wp-content/uploads/2024/02/BIG-BASKET.png')] bg-contain bg-no-repeat bg-center hover:bg-none hover:rounded-lg hover:scale-110 md:hover:scale-125 transition duration-700 ease-in-out text-gray-900 font-bold text-xl flex justify-center items-center uppercase relative">
          <p className="opacity-0 group-hover:opacity-100 transition-opacity duration-300">Big Basket</p>
        </div>
      </div>
    </div>
  )
}

export default HomeDeliveryPartners;
