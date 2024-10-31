import React from 'react';

const AboutCertification = () => {

  let certificateArray = [
    'https://www.marino.co.in/wp-content/uploads/2023/06/FDA.webp',
    'https://www.marino.co.in/wp-content/uploads/2023/06/512px-NAFDAC_emblem.svg.png',
    'https://www.marino.co.in/wp-content/uploads/2023/06/jamiyat_logo.png',
    'https://www.marino.co.in/wp-content/uploads/2023/06/Dhhs.png',
    'https://www.marino.co.in/wp-content/uploads/2023/06/BRC-Logo.webp',
    'https://www.marino.co.in/wp-content/uploads/2023/06/icon_ISO9001.png'
  ];

  return (
    <div className='min-h-[30vh] bg-gray-100 px-5 py-10 md:py-16'>
      <h4 className="text-2xl md:text-3xl font-medium text-neutral-800 uppercase text-center mb-3">
        Certification
      </h4>
      <p className="font-normal text-gray-500 text-lg md:text-xl leading-6 md:leading-6 uppercase text-center mb-10">
        Certified by some of the most trusted organizations.
      </p>

      <div className='flex flex-wrap justify-center items-center gap-8'>
        {
          certificateArray.map((link, index) => {
            return (
              <img
                src={link}
                key={index}
                alt={`Certification ${index + 1}`}
                className='h-[5rem] md:h-[5rem] lg:h-[7rem] object-contain'
              />
            );
          })
        }
      </div>
    </div>
  );
}

export default AboutCertification;
