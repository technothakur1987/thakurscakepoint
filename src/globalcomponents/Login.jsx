import React, { useState, memo } from "react";
import { auth } from "../firebase/FirebaseConfig";
import { MdCancel } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Icons for show and hide
import { Link, useNavigate } from "react-router-dom";
import { setLogIn, setGoogleSignIn } from "../store/CakeSlice";
import {
  GoogleAuthProvider,
  signInWithPopup,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";


const Login = () => {
  const dispatch = useDispatch();
  const { loader, bakeryUser } = useSelector((state) => state.cakeSlice);
  console.log("Log in rendered");
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false); // State for toggling password visibility
  const [LoginFormData, setLoginFormData] = useState({
    LoginEmail: "",
    loginpassword: "",
  });
  

  

  // Event handler for Google Sign-In
  const handleGoogleSignIn = async () => {
    try {
      let provider = new GoogleAuthProvider();
      let user = await signInWithPopup(auth, provider);

      console.log(user.user.uid);

      toast.success("Login Successful");
      dispatch(
        setGoogleSignIn({
          email: `${user.user.email}`,
          userId: `${user.user.uid}`,
        })
      );
      navigate("/user");
    } catch (error) {
      console.log(error);
      toast.error("Plz Try Again After SomeTime.");
      navigate("/login");
    }
  };

  // Event handler for closing the modal
  const handleCloseModal = () => {
    console.log("Close modal");
    navigate("/"); // Navigate to home or any default route
  };

  //Event Handler for Login functionality
  const handleLogin = async (e) => {
    try {
      e.preventDefault();
      

      const { LoginEmail, loginpassword } = LoginFormData;
      console.log(LoginEmail)
      console.log(loginpassword)

      // Firebase email/password log in
      const userCredential = await signInWithEmailAndPassword(
        auth,
        LoginEmail,
        loginpassword
      );
      console.log("User Logged in:", userCredential.user);

      // setLoginFormData({
      //   LoginEmail: "",
      //   loginpassword: "",
      // });
      
      toast.success("Login Successful !");
      dispatch(
        setLogIn({
          email: `${userCredential.user.email}`,
          userId: `${userCredential.user.uid}`,
        })
      );
      navigate("/user");
    } catch(error)  {

      setLoginFormData({
        LoginEmail: " ",
        loginpassword: " ",
      });
      
        // Firebase errors
        
        console.error("Log in error:", error.message);

        toast.error("Invalid Credentials ! ");
       
  setTimeout(()=>{
    window.location.reload();
  },1000)
        

       

      
       
      
    }
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    console.log(id)
    console.log(value)
    setLoginFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#701A23] z-[99] font-poppins">
      <div className="relative bg-white rounded-lg shadow-lg p-8 w-[80%] md:w-[30%] lg:w-[30%]">
        {/* Close button */}
        <button onClick={handleCloseModal} className="absolute top-2 right-2">
          <MdCancel className="font-black text-[#701A23] text-3xl transform transition-transform duration-100 hover:rotate-180" />
        </button>

        <h2 className="text-xl font-bold text-[#701A23] text-center mb-4 border-b-2 border-[#701A23] pb-3">
          Login
        </h2>
        <form
          onSubmit={(e) => {
            handleLogin(e);
          }}
          autoComplete="off"
        >
          <div className="mb-2">
            <label className="block text-gray-700 mb-1 text-sm" htmlFor="LoginEmail">
              Email
            </label>
            <input
              type="email"
              id="LoginEmail"
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none"
              placeholder="Enter your email"
              required
              autoComplete="off"
              name='LoginEmail'
              onChange={handleChange}
              value = {LoginFormData.LoginEmail}
            />
            
          </div>
          <div className="mb-6 relative">
            <label
              className="block text-gray-700 mb-1 text-sm"
              htmlFor="loginpassword"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"} // Toggle between text and password
              id="loginpassword"
              name="loginpassword"
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none"
              placeholder="Enter your password"
              required
              autoComplete="new-password"
              onChange={handleChange}
              value = {LoginFormData.loginpassword}
            />
            {/* Toggle visibility icon */}
            <span
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute top-9 right-3 text-gray-500 cursor-pointer"
            >
              {passwordVisible ? (
                <AiOutlineEyeInvisible className="text-xl" /> // Hide icon
              ) : (
                <AiOutlineEye className="text-xl" /> // Show icon
              )}
            </span>
            
          </div>

          <button
            type="submit"
            onClick={(e) => {
              handleLogin(e);
            }}
            className="w-full bg-[#701A23] text-white rounded py-2 hover:scale-105 transition duration-500 text-sm"
          >
            Login
          </button>

          <h2 className="text-sm font-semibold text-center text-gray-700 my-1">
            OR
          </h2>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full bg-[#701A23] text-white rounded py-2 hover:scale-105 transition duration-500 text-sm"
          >
            Log in with Google
          </button>
        </form>

        <p className="mt-4 text-center text-sm text-gray-700">
          Forgot your password?{" "}
          <Link to='/reset' className="text-blue-500 hover:underline cursor-pointer">
            Reset it
          </Link>
        </p>
        <p className="mt-2 text-center text-sm text-gray-700">
          New to the site?{" "}
          <Link
            to="/signin"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default memo(Login);
