import React, { useEffect, useState } from 'react';
import { FaArrowAltCircleUp } from "react-icons/fa";

const ScrollToTopBtn = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Show button when the user scrolls down 100 pixels
  const toggleVisibility = () => {
    if (window.scrollY > 100) { // Replaced window.pageYOffset with window.scrollY
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Scroll the page to the top when the button is clicked
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <>
      {isVisible && (
        <div
          onClick={scrollToTop}
          className='z-[99] fixed end-2 bottom-2 cursor-pointer transition duration-500 ease-in-out text-[#701A23] border-0 bg-[#FFCE0F] rounded-full flex justify-center items-center text-5xl hover:text-[#FFCE0F] hover:bg-[#701A23]'
          aria-label="Scroll to top"
        >
          <FaArrowAltCircleUp />
        </div>
      )}
    </>
  );
};

export default ScrollToTopBtn;
