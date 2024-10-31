import React from 'react'
import { useNavigate } from 'react-router-dom'
import c1 from '../../../assets/c1.png'
import c2 from '../../../assets/c3.png'



const HomeProducts = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-[55vh] md:min-h-[55vh] lg:min-h-[80vh] bg-[#DC8522] relative px-5 font-poppins w-full">
      <div className="absolute min-h-[45vh] md:min-h-[50vh]  w-[90%] md:w-[45vw] bg-black border border-[10px] border-[#FFCE0F] rounded-tl-[35px] rounded-br-[35px] top-[10%] md:top-[5%] lg:top-[20%] flex flex-col justify-center items-start px-10">
        <h4 className="text-2xl md:text-3xl font-medium text-white font-bold capitalize mb-2 md:mb-5">
          Your Go-To Destination for Delicious Cakes
        </h4>
        <p className="font-normal text-gray-500 text-lg md:text-xl leading-6 md:leading-6 mb-4 md:mb-5">
        Discover our irresistible cakes, baked to perfection to satisfy your sweet cravings.
        </p>
        <button
          className="uppercase px-6 py-2 md:py-2 bg-[#701A23] text-[#FFCE0F] rounded font-bold text-base hover:bg-[#FFCE0F] hover:text-[#701A23] transition duration-500 ease-in-out"
          onClick={()=>{
            navigate('/products')
          }}
        >
          Discover more
        </button>
      </div>
      <img src={c1} alt="" className='hidden lg:block absolute end-[-5%] top-[-5%] h-[100%]' />
      <img src={c2} alt="" className='hidden lg:block  absolute end-60 top-14 h-[90%]' />
    </div>
  )
}

export default HomeProducts
