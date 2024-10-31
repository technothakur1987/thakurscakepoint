import React, { useEffect, useRef, useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router-dom';

const ContactNav = ({ contactheaderref }) => {
  const location = useLocation(); // Get the current location
  const [hasClicked, setHasClicked] = useState(false); // Track if a NavLink has been clicked

  // Smooth scroll to the bottom of the contact header whenever the location changes
  useEffect(() => {
    if (hasClicked && contactheaderref.current) {
      // Get the height of the contact header
      const headerHeight = contactheaderref.current.clientHeight-(0.15*window.innerHeight);

      // Calculate the scroll position to the bottom of the header
      const targetScrollPosition = contactheaderref.current.offsetTop + headerHeight;

      // Scroll to the calculated position
      window.scrollTo({
        top: targetScrollPosition,
        behavior: 'smooth',
      });
    }
  }, [location, hasClicked]); // Runs when location changes or hasClicked changes

  // Function to handle NavLink click
  const handleLinkClick = () => {
    setHasClicked(true); // Set to true when a NavLink is clicked
  };

  return (
    <>
      <div className='flex items-center justify-center gap-10 py-14 font-bold'>
        <NavLink 
          to='reachus' 
          className={({ isActive }) => 
            `border border-5 rounded-full px-6 py-2 transition duration-300 ${
              isActive ? 'border-[#701A23] text-[#701A23]' : 'bg-[#701A23] text-[#FFCE0F]'
            }`
          }
          onClick={handleLinkClick} // Trigger on click
        >
          Reach us
        </NavLink>
        <NavLink 
          to='customcake' 
          className={({ isActive }) => 
            `border border-5 rounded-full px-6 py-2 transition duration-300 ${
              isActive ? 'border-[#701A23] text-[#701A23]' : 'bg-[#701A23] text-[#FFCE0F]'
            }`
          }
          onClick={handleLinkClick} // Trigger on click
        >
          Custom Cake
        </NavLink>
        <NavLink 
          to='feedbackform' 
          className={({ isActive }) => 
            `border border-5 rounded-full px-6 py-2 transition duration-300 ${
              isActive ? 'border-[#701A23] text-[#701A23]' : 'bg-[#701A23] text-[#FFCE0F]'
            }`
          }
          onClick={handleLinkClick} // Trigger on click
        >
          Feedback Form
        </NavLink>
      </div>

      {/* Content section for Outlet, with ref applied */}
      <div className=''>
        <Outlet />
      </div>
    </>
  );
};

export default ContactNav;
