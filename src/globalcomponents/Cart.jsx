import React from 'react';
import { MdCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const navigate = useNavigate()
  

  // Event handler for closing the modal
  const handleCloseModal = () => {
    console.log("Close modal");
    
      navigate('/'); // Change '/' to any default route you prefer
    
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-[80%] z-50 pt-20 font-poppins">
      <div className="relative bg-white rounded-lg shadow-lg p-8 w-[80%] md:w-[30%] lg:w-[30%]  ">
        {/* Close button */}
        <button
          onClick={handleCloseModal}
          className="absolute top-2 right-2 "
        >
          <MdCancel className='font-black text-[#701A23]  text-3xl transform transition-transform duration-100 hover:rotate-180'/>
        </button>

        <h2 className="text-xl font-bold text-[#701A23] text-center mb-4  border-b-2 border-[#701A23] pb-3">My Cart</h2>
        

       
       
      </div>
    </div>
  );
};

export default Cart