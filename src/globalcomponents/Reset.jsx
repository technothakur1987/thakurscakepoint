import React,{useState} from 'react'
import { useNavigate, Link } from 'react-router-dom';
import { MdCancel } from "react-icons/md";
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from "../firebase/FirebaseConfig";
import { toast } from "react-toastify";

const Reset = () => {

    const navigate = useNavigate();
   const [ResetEmail, setResetEmail] = useState('');
   

    // Event handler for closing the modal
  const handleCloseModal = () => {
    console.log("Close modal");
    navigate("/"); // Navigate to home or any default route
  };

  const handleChange = (e)=>{
    setResetEmail(e.target.value)
    
  }
  const forgetPass = async(e)=>{
    try {
        e.preventDefault();
      
        let user = await sendPasswordResetEmail(auth, ResetEmail);
        toast.success('Please Check your email.');
    } catch (error) {
        console.log(error);
        setResetEmail('');
        toast.error('Invalid Credentials');
    }

}
  


  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#701A23] z-[99] font-poppins">
          <div className="relative bg-white rounded-lg shadow-lg p-8 w-[80%] md:w-[30%] lg:w-[30%]">
            {/* Close button */}
            <button onClick={handleCloseModal} className="absolute top-2 right-2">
              <MdCancel className="font-black text-[#701A23] text-3xl transform transition-transform duration-100 hover:rotate-180" />
            </button>
    
            <h2 className="text-xl font-bold text-[#701A23] text-center mb-4 border-b-2 border-[#701A23] pb-3">
              Reset Password
            </h2>
            <form
              onSubmit={(e) => {
                //handleLogin(e);
              }}
              autoComplete="off"
            >
              <div className="mb-4">
                <label className="block text-gray-700 mb-1 text-sm" htmlFor="ResetEmail">
                  Email
                </label>
                <input
                  type="email"
                  id="ResetEmail"
                  className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none"
                  placeholder="Enter your email"
                  required
                  autoComplete="off"
                  name='ResetEmail'
                  onChange={handleChange}
                  value={ResetEmail}
                />
                
              </div>
             
    
              <button
                type="submit"
                
                onClick={forgetPass}
                className="w-full bg-[#701A23] text-white rounded py-2 hover:scale-105 transition duration-500 text-sm"
              >
                Reset 
              </button>
    
              
            </form>
    
            
          </div>
        </div>
  )
}

export default Reset