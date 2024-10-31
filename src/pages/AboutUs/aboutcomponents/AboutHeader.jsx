import React from 'react'

const AboutHeader = ({aboutStoryRef}) => {
  const handleScroll = () => {
    if (aboutStoryRef.current) {
      aboutStoryRef.current.scrollIntoView({
        behavior: 'smooth', // Smooth scrolling
        block: 'start',     // Align with the start of the element
      });
    }
  };
  return (
    <div className="h-[30vh] md:h-[40vh] lg:h-[60vh] bg-[url('https://i.ibb.co/Dwp432d/image.png')] bg-no-repeat bg-center bg-cover flex items-center px-5 w-full">
        <div className=' flex flex-col items-center md:items-start  '>
            <h1 className=' text-[#FFCE0F] text-xl md:text-3xl lg:text-5xl  font-black capitalize mb-3 mt-10 '>About Us</h1>
            <p className="  w-[90%] md:w-[50%] text-white  font-normal text-lg md:text-xl leading-6 md:leading-6  mb-5 md:mb-10 text-center md:text-start">
            Experience flavor's divine embrace, with love, health, and affordability in every taste-filled space.
            </p>    
        <button onClick={handleScroll}
            className="px-6 py-2 md:py-2 bg-[#FFCE0F] uppercase text-[#701A23] rounded font-bold text-base hover:text-[#FFCE0F] hover:bg-[#701A23] hover:scale-110 transition duration-500 ease-in-out "
            
          >
           Know More
          </button>
        </div>

    </div>
  )
}

export default AboutHeader