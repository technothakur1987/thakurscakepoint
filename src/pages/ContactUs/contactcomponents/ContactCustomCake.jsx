import React from 'react';

const ContactCustomCake = () => {
  return (
    <>
    
    
    
    <div className='min-h-[100vh] flex flex-col md:flex-row px-5'>
      {/* Left side - Image */}
      <div className='md:w-1/2 flex items-center justify-center bg-gray-200'>
        <img
          src='https://via.placeholder.com/400' // Replace with your image URL
          alt='Custom Cake'
          className='object-cover h-full w-full'
        />
      </div>

      {/* Right side - Form */}
      <div className='md:w-1/2 flex items-center justify-center p-8'>
        <form className='w-full max-w-md bg-white p-6 rounded-lg shadow-md'>
          <h2 className='text-2xl font-bold mb-4 text-center'>Custom Cake Order</h2>
          
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='name'>
              Name
            </label>
            <input
              type='text'
              id='name'
              placeholder='Your Name'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='email'>
              Email
            </label>
            <input
              type='email'
              id='email'
              placeholder='Your Email'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              required
            />
          </div>

          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor='message'>
              Message
            </label>
            <textarea
              id='message'
              placeholder='Your Message'
              className='shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline'
              rows='4'
              required
            ></textarea>
          </div>

          <div className='flex items-center justify-between'>
            <button
              type='submit'
              className='bg-[#701A23] hover:bg-[#FFCE0F] text-[#FFCE0F] border border-5 border-[#701A23] hover:text-[#701A23] font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline'
              
            >
              Submit
            </button>
          </div>
        </form>
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

    </>
  );
};

export default ContactCustomCake;
