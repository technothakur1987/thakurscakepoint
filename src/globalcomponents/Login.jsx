import React from 'react';
import { MdCancel } from "react-icons/md";
import { useNavigate } from 'react-router-dom';


const Login = () => {

  const navigate = useNavigate()
  // Event handler for Google Sign-In
  const handleGoogleSignIn = () => {
    // Add your Google authentication logic here
    console.log("Google Sign-In clicked");
  };

  // Event handler for closing the modal
  const handleCloseModal = () => {
    console.log("Close modal");
    // If there's a previous page in history, go back; otherwise, navigate to home
    
      navigate('/'); // Change '/' to any default route you prefer
    
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#701A23] z-[99]  font-poppins">
      <div className="relative bg-white rounded-lg shadow-lg p-8 w-[80%] md:w-[30%] lg:w-[30%]  ">
        {/* Close button */}
        <button
          onClick={handleCloseModal}
          className="absolute top-2 right-2 "
        >
          <MdCancel className='font-black text-[#701A23]  text-3xl transform transition-transform duration-100 hover:rotate-180'/>
        </button>

        <h2 className="text-xl font-bold text-[#701A23] text-center mb-4  border-b-2 border-[#701A23] pb-3">Login</h2>
        <form >
          <div className="mb-2">
            <label className="block text-gray-700 mb-1 text-sm" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none"
              placeholder="Enter your email"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 mb-1 text-sm" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none"
              placeholder="Enter your password"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#701A23] text-white rounded py-2 hover:scale-105 transition duration-500 text-sm"
          >
            Login
          </button>

          <h2 className="text-sm font-semibold text-center text-gray-700 my-1">OR</h2>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full bg-[#701A23] text-white rounded py-2 hover:scale-105 transition duration-500 text-sm"
          >
            Sign in with Google
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-700">
          Forgot your password?{' '}
          <a className="text-blue-500 hover:underline cursor-pointer">
            Reset it 
          </a>
        </p>
        <p className="mt-2 text-center text-sm text-gray-700">
          New to the site?{' '}
          <a className="text-blue-500 hover:underline cursor-pointer">
            Sign up 
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
