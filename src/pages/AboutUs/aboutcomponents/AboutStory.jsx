import React from 'react';

const AboutStory = ({aboutStoryRef}) => {
  return (
    <div className='flex flex-col md:flex-row items-center justify-between px-5  py-5 md:py-[25vh] bg-gray-100' id='aboutStory' ref={aboutStoryRef}>
      <div className='basis-full md:basis-1/2 mb-10 md:mb-0'>
        <h6 className="text-xl text-[#701A23] uppercase font-bold mb-2 md:mb-5">Who Are We</h6>
        <h4 className="text-2xl md:text-3xl font-medium text-neutral-800 capitalize mb-2 md:mb-5">
          Get to Know Us Better
        </h4>
        <p className="font-normal text-gray-500 text-lg md:text-xl leading-6 md:leading-6 mb-5 text-justify">
          Thakur's Cake Point, located in Kodariya, near Mhow, Indore, is a renowned bakery that takes pride in crafting exquisite cakes and baked delights. As a trusted name in the region, we are committed to providing cakes that are not only delicious but also made with the finest ingredients to ensure freshness and quality in every bite. Our brand, "Thakur's Cake Point," symbolizes Tradition, Taste, and Trust, offering a wide range of cakes for all occasions that are crafted to perfection, ensuring our customers' celebrations are always memorable.
        </p>
        <p className="font-normal text-gray-500 text-lg md:text-xl leading-6 md:leading-6 text-justify">
          As we continue to expand Thakur's Cake Point into broader markets, we have upgraded our bakery with cutting-edge baking facilities, featuring advanced equipment across multiple locations. Our production units adhere to the highest standards, ensuring compliance with certifications like HALAL, ISO22000:2018, and HACCP, guaranteeing the creation of premium-quality products. At Thakur's Cake Point, our focus is on fostering long-term relationships with our customers, built on trust and consistency. We take pride in being an adaptable and innovative bakery, catering to the unique needs of our customers. Our extensive variety of cakes and baked goods comes in diverse flavors and sizes, offering exceptional taste and quality at competitive prices. With our dedication to timely service and superior products, we are the go-to bakery for all occasions.
        </p>
      </div>
      <div className='basis-full  md:basis-1/2 flex justify-center items-center'>
        <img src="https://i.ibb.co/7QxF7NF/xxx-1-removebg-preview-1.png" alt="Our bakery's state-of-the-art facilities" className='backdropEffect  ' />
      </div>
    </div>
  );
};

export default AboutStory;
