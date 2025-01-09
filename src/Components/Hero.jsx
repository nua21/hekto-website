import React from 'react'
import Sofa from '../assets/Sofa.png';
import Light from '../assets/Light.png';

const Hero = () => {
  return (
    <section className='bg-[#F2F0FF] py-28 relative z-20 overflow-hidden'>
      <img className='absolute -top-12 left-0 -z-10 w-[250px]' src={Light} alt="light-image" />
      <div className="relative flex items-center justify-center">
      <div className="w-3 h-3 bg-pinki rounded-full absolute top-[450px] left-[80px]">
      </div>
    </div>
        <div className="container mx-auto">
            <div className="flex justify-between items-center">
                <div className="w-[60%]">
                    <h4 className=' text-pinki pb-3'>Best Furniture For Your Castle....</h4>
                    <h1 className='font-josef font-bold text-[56px] pb-3'>New Furniture Collection Trends in 2020</h1>
                    <p className='font-lato font-bold text-[16px] text-ashe pr-64 pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Magna in est adipiscing in phasellus non in justo.</p>
                    <button className='font-josef font-semibold text-[17px] bg-pinki text-white py-4 px-10'>Shop Now</button>
                    </div>
                    <div className="w-[40%]">
                        <img className='w-full' src={Sofa} alt="sofa img" />
                    </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
