import React from 'react';
import { BsTelephoneForwardFill, BsFillEnvelopeFill, BsFillHouseFill } from "react-icons/bs"; // Added house icon for address

const ContactReachUs = () => {
  return (
    <section className='min-h-[100vh] flex flex-col justify-center py-4'>
      {/* Div for text */}
      <div className='text-center mb-8'>
        <h4 className="text-2xl md:text-3xl font-bold text-neutral-800 capitalize mb-2 md:mb-5">
          Get in touch
        </h4>
        <p className="font-normal text-gray-500 text-lg md:text-xl leading-6 md:leading-6">
          Reach out to us and let our delectable products sweeten your day.
        </p>

        <div className='flex flex-col md:flex-row items-center justify-evenly p-4  min-h-[50vh]'>
          {/* Corporate Office */}
          <div className="basis-1/3 flex items-center justify-center mb-4 md:mb-0 ">
            <a
              href="tel:8109184732"
              className="bg-[#701a238a] p-5 rounded-full text-[#701A23] text-3xl hover:text-[#FFCE0F] cursor-pointer"
              aria-label="Call Corporate Office"
            >
              <BsFillHouseFill />
            </a>
            <div className="ps-5">
              <p className="text-lg font-medium text-neutral-800">CORPORATE OFFICE</p>
              <p className="text-xl font-medium text-[#701A23]">
                Thakur's Cake Point
                <br />
                135, New Colony, Kodariya,
                <br />
                Mhow-453441
              </p>
            </div>
          </div>

          {/* Email Us */}
          <div className="basis-1/3 flex items-center justify-center mb-4 md:mb-0 ">
            <a
              href="mailto:info@marinobakery.com"
              className="bg-[#701a238a] p-5 rounded-full text-[#701A23] text-3xl hover:text-[#FFCE0F] cursor-pointer"
              aria-label="Send an email to info@marinobakery.com"
            >
              <BsFillEnvelopeFill />
            </a>
            <div className="ps-5">
              <p className="text-lg font-medium text-neutral-800">Email Us</p>
              <p className="text-xl font-medium text-[#701A23]">info@marinobakery.com</p>
            </div>
          </div>

          {/* Call Us */}
          <div className="basis-1/3 flex items-center justify-center mb-4 md:mb-0 ">
            <a
              href="tel:+918109184732"
              className="bg-[#701a238a] p-5 rounded-full text-[#701A23] text-3xl hover:text-[#FFCE0F] cursor-pointer"
              aria-label="Call Us"
            >
              <BsTelephoneForwardFill />
            </a>
            <div className="ps-5">
              <p className="text-lg font-medium text-neutral-800">Call Us</p>
              <p className="text-xl font-medium text-[#701A23]">+91-8109184732</p>
            </div>
          </div>
        </div>
      </div>

      {/* Div for map */}
      <div className='mt-8'>
        <iframe
          title="Google Map Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29481.891642525334!2d75.73329703781309!3d22.532813483263162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3962f76de0fbc83f%3A0xddd3c46e50d96252!2sKodriya%2C%20Dr.%20Ambedkar%20Nagar%2C%20Madhya%20Pradesh%20453441!5e0!3m2!1sen!2sin!4v1729888051935!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </section>
  );
};

export default ContactReachUs;
