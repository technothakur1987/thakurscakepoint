import React, { useState, memo } from "react";
import { MdCancel } from "react-icons/md";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"; // Icons for show and hide
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import { auth , fireDB} from "../firebase/FirebaseConfig";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { addDoc, collection } from "firebase/firestore";
import { toast } from "react-toastify";
import { setGoogleSignIn } from "../store/CakeSlice";

const SignIn = () => {
  const dispatch = useDispatch();
  const { loader, bakeryUser } = useSelector((state) => state.cakeSlice);
  console.log("sign in rendered");

  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false); // State for toggling password visibility
  const [errors, setErrors] = useState('');
  const [signInFormData, setSignInFormData] = useState({
    email: "",
    password: "",
  });

  const userSchema = Yup.object({
    email: Yup.string().email("Invalid Email").required("Email is required"),
    password: Yup.string()
      .min(8, "Minimum 8 characters required")
      .max(10, "Maximum 10 characters required")
      .matches(/[A-Z]/, "Password must contain one uppercase character")
      .matches(/[a-z]/, "Password must contain one lowercase character")
      .matches(/[0-9]/, "Password must contain one number")
      .matches(
        /[$&+,:;=?@#|'<>.-^*()%!]/,
        "Password must contain one special character"
      )
      .required("Password is required"),
  });

   //adding these user in database
   const addUser = async (uid)=> {
    const userRef = collection(fireDB, "user");
    try {
      await addDoc(userRef, {
        userId:uid,
        email: signInFormData.email,
        name: "",
        imageUrl: "",
        role: "user",
        Address:'',
       
        date: new Date().toLocaleString("en-US", {
          month: "short",
          day: "2-digit",
          year: "numeric",
        }),
      });
      console.log("User added successfully");
     
    } catch (error) {
      console.error("Error adding user:", error);
    }
  }

  const handleGoogleSignIn = async () => {
    try {
      let provider = new GoogleAuthProvider();
      let user = await signInWithPopup(auth, provider);

      console.log(user.user.uid);

      //Adding Signed user in firebase database
      addUser(user.user.uid)

      toast.success("Login Successful");
      dispatch(setGoogleSignIn({
        email:`${user.user.email}`,
        userId:`${user.user.uid}`
      }));
      navigate("/user");
    } catch (error) {
      console.log(error);
      toast.error("Plz Try Again After SomeTime.");
      navigate("/signin");
    }
  };

  const handleCloseModal = () => {
    navigate("/"); // Navigate to home or any default route
  };

  const handleSignIn = async (e) => {
    try {
      e.preventDefault();
      //yup validation
      await userSchema.validate(signInFormData, { abortEarly: false });

      const { email, password } = signInFormData;

      // Firebase email/password sign-in
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      console.log("User signed in:", userCredential.user);

      setSignInFormData({
        email: "",
        password: "",
      });
      setErrors(" ");
      toast.success("Successfully Signed In . Plz Login");
      navigate("/login");

      //Adding Signed user in firebase database
      addUser(userCredential.user.uid)
    } catch (error) {
      if (error.inner) {
        // Validation errors
        const newErrors = {};
        error.inner.forEach((err) => {
          newErrors[err.path] = err.message;
        });
        setErrors(newErrors);
      } else {
        // Firebase errors
        setErrors("");
        console.error("Sign-in error:", error.message);

        toast.error("Plz Try Again After SomeTime.");
        setSignInFormData({
          email: "",
          password: "",
        });
        // setErrors({ firebase: error.message });
      }
    }


   
  };

  const handleChange = (e) => {
    const { id, value } = e.target;
    setSignInFormData((prevData) => ({
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
          Sign In
        </h2>
        <form
          onSubmit={(e) => {
            handleSignIn(e);
          }}
        >
          <div className="mb-2">
            <label className="block text-gray-700 mb-1 text-sm" htmlFor="email">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none"
              placeholder="Enter your email"
              value={signInFormData.email}
              onChange={handleChange}
              autoComplete="off"
            />
            {errors.email && (
              <span className="float-end text-xs text-[#701A23]">
                {errors.email}
              </span>
            )}
          </div>
          <div className="mb-6 relative">
            <label
              className="block text-gray-700 mb-1 text-sm"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type={passwordVisible ? "text" : "password"} // Toggle between text and password
              id="password"
              className="w-full p-2 border border-gray-300 rounded text-sm focus:outline-none"
              placeholder="Enter your password"
              value={signInFormData.password}
              onChange={handleChange}
              autoComplete="off"
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
            {errors.password && (
              <span className="float-end text-xs text-[#701A23]">
                {errors.password}
              </span>
            )}
          </div>

          <button
            type="submit"
            onClick={(e) => {
              handleSignIn(e);
            }}
            className="w-full bg-[#701A23] text-white rounded py-2 hover:scale-105 transition duration-500 text-sm"
          >
            Sign In
          </button>

          <h2 className="text-sm font-semibold text-center text-gray-700 my-1">
            OR
          </h2>

          <button
            type="button"
            onClick={handleGoogleSignIn}
            className="w-full bg-[#701A23] text-white rounded py-2 hover:scale-105 transition duration-500 text-sm"
          >
            Sign in with Google
          </button>
        </form>

        <p className="mt-2 text-center text-sm text-gray-700">
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-blue-500 hover:underline cursor-pointer"
          >
            Login here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default memo(SignIn);
