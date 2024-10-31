import './App.css';
import Navbar from './globalcomponents/Navbar';

import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/Home.jsx';
import Products from './pages/Products/Products.jsx';
import AboutUs from './pages/AboutUs/AboutUs.jsx';

import ContactUs from './pages/ContactUs/ContactUs.jsx';
import Login from './globalcomponents/Login.jsx';
import Cart from './globalcomponents/Cart.jsx';
import SignIn from './globalcomponents/SignIn.jsx';
import 'remixicon/fonts/remixicon.css';
import Footer from './globalcomponents/Footer.jsx';
import ScrollToTopBtn from './globalcomponents/ScrollToTopBtn.jsx';
import ScrollToTop from './globalcomponents/scrollToTop.jsx';
import ContactReachUs from './pages/ContactUs/contactcomponents/ContactReachUs.jsx';
import ContactCustomCake from './pages/ContactUs/contactcomponents/ContactCustomCake.jsx';
import ContactCustFeedBackForm from './pages/ContactUs/contactcomponents/ContactCustFeedBackForm.jsx';
import { useDispatch, useSelector } from "react-redux";
function App() {

  const dispatch = useDispatch();
  const { loader } = useSelector(
    (state) => state.cakeSlice
  );

  console.log(loader)
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/products' element={<Products />} />
          <Route path='/aboutus' element={<AboutUs />} />
          <Route path='/signin' element={<SignIn />} />
          
          {/* Contact Us Route with Index Route */}
          <Route path='/contactus' element={<ContactUs />}>
            <Route index element={<Navigate to="reachus" replace />} /> {/* Default to Reach Us */}
            <Route path='reachus' element={<ContactReachUs />} />
            <Route path='customcake' element={<ContactCustomCake />} />
            <Route path='feedbackform' element={<ContactCustFeedBackForm />} />
          </Route>
          
          <Route path='/login' element={<Login />} />
          <Route path='/cart' element={<Cart />} />
        </Routes>
        
        <Footer />
        <ScrollToTopBtn />
      </BrowserRouter>
    </>
  );
}

export default App;
