import React from 'react';
// Import Swiper core and required modules
import { Navigation, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const HomeProductsSwiper = () => {
  const slides = Array(50).fill({
    imgSrc: 'https://www.marino.co.in/wp-content/uploads/2024/02/Choco-Heart-dark-300x300-1.jpg',
    altText: 'slide1',
  });

  return (
    <div className='min-h-[85vh] md:min-h-[55vh] lg:min-h-[85vh] bg-[#FFCE0F] font-poppins px-5'>
      <div className='h-[50vh] md:h-[30vh] lg:h-[50vh] flex flex-col md:flex-row items-center  justify-evenly  md:justify-between md:gap-5'>
        <h4 className="text-2xl md:text-3xl font-medium text-neutral-800 capitalize md:basis-1/2 md:mb-[3%]">
          Irresistible Delights: Uniting Health and Taste in Every Scrumptious Bite! 
        </h4>
        <p className='md:basis-1/2 font-normal text-gray-900 text-lg md:text-xl leading-6 md:leading-6'>
          Thakur's Cake Point extraordinary range of baked cakes, where the pursuit of wellness seamlessly intertwines with unparalleled taste. Each delectable creation is meticulously crafted, ensuring a guilt-free indulgence that satisfies both your cravings and your commitment to a healthy lifestyle.
        </p>
      </div>

      <div className='h-[40vh]'>
        <Swiper
          className='h-full'
          modules={[Navigation, A11y]} // Only include Navigation and Accessibility modules
          spaceBetween={20} // Default space
          slidesPerView={1}  // Default slides per view for mobile
          navigation
          
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 6,
              spaceBetween: 50,
            },
          }}
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index} className='flex justify-center items-center'>
              <img
                className='h-[30vh] w-[95%] rounded-lg'
                src={slide.imgSrc}
                alt={slide.altText}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default HomeProductsSwiper;
