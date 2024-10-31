import React from 'react';
// Import Swiper core and required modules
import { Navigation, A11y, Autoplay } from 'swiper/modules'; // Include Autoplay
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

const AboutSwiper = () => {
    const slides = Array(50).fill({
        imgSrc: 'https://www.marino.co.in/wp-content/uploads/2024/02/Choco-Heart-dark-300x300-1.jpg',
        altText: 'slide1',
    });

    const slides1 = [
        'https://www.marino.co.in/wp-content/uploads/2023/06/2-1-scaled.webp',
        'https://www.marino.co.in/wp-content/uploads/2023/06/1-1-scaled.webp',
        'https://www.marino.co.in/wp-content/uploads/2023/06/9-scaled.webp',
        'https://www.marino.co.in/wp-content/uploads/2023/06/8-scaled.webp',
        'https://www.marino.co.in/wp-content/uploads/2023/06/7-scaled.webp',
        'https://www.marino.co.in/wp-content/uploads/2023/06/7-scaled.webp',
        'https://www.marino.co.in/wp-content/uploads/2023/06/6-1-scaled.webp',
        'https://www.marino.co.in/wp-content/uploads/2023/06/5-1-scaled.webp'
    ];

    return (
        <div className='min-h-[30vh] md:min-h-[55vh] lg:min-h-[85vh] bg-[#FFCE0F] font-poppins px-5 py-10'>
            <h4 className="text-[#701A23] text-2xl md:text-3xl font-medium uppercase text-center mb-3">
                Infrastructure
            </h4>
            <p className="font-normal text-gray-800 text-lg md:text-xl leading-6 md:leading-6 uppercase text-center mb-10">
                The Foundations for a Sweeter Tomorrow
            </p>

            {/* Upper slider (slides1) - now shows 3 images on larger screens */}            
            <div className=''>
                <Swiper
                    className='h-full upperslider'
                    modules={[Navigation, A11y, Autoplay]} // Include Autoplay module
                    spaceBetween={20} // Default space
                    slidesPerView={1}  // Default slides per view for mobile
                    loop={true} // Enable loop
                    autoplay={{
                        delay: 3000, // Delay between transitions in ms
                        disableOnInteraction: false, // Continue autoplay even after user interaction
                    }}
                    navigation
                    breakpoints={{
                        640: {
                            slidesPerView: 2,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 2, // Show 3 images for medium screens
                            spaceBetween: 30,
                        },
                        1024: {
                            slidesPerView: 3, // Show 3 images for larger screens
                            spaceBetween: 50,
                        },
                    }}
                >
                    {slides1.map((slide, index) => (
                        <SwiperSlide key={index} className='flex justify-center items-center'>
                            <img
                                className='h-[30vh] lg:h-[45vh] w-[100%] rounded-lg'
                                src={slide} // Use slide directly as it's a URL string
                                alt={`Slide ${index + 1}`} // Update alt text accordingly
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* Lower slider (slides) - unchanged */}
            <div className='h-[25vh] md:h-[40vh]'>
                <Swiper
                    className='h-full'
                    modules={[Navigation, A11y]} // Include Navigation and Accessibility modules
                    spaceBetween={20} // Default space
                    slidesPerView={2}  // Default slides per view for mobile
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
                            slidesPerView: 6, // Keep 6 slides per view on larger screens for the lower slider
                            spaceBetween: 50,
                        },
                    }}
                >
                    {slides.map((slide, index) => (
                        <SwiperSlide key={index} className='flex justify-center items-center'>
                            <img
                                className='h-[15vh] md:h-[30vh] w-[95%] rounded-lg'
                                src={slide.imgSrc} // Use slide.imgSrc as it's an object here
                                alt={slide.altText} // Use slide.altText for alt text
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </div>
    );
};

export default AboutSwiper;
