import React from 'react'
import Img1 from '../assets/Group.png'
import Img2 from '../assets/cashback.png'
import Img3 from '../assets/premium.png'
import Img4 from '../assets/24-hours.png'

const Shopex = () => {
  return (
    <>
      <section>
        <div className="container mx-auto mt-14 relative">
          <h2 className='text-blu font-josef font-bold text-[42px] text-center'>What Shopex Offer!</h2>
          <div className=" flex justify-center gap-10 mt-14">
            <div className=" w-[24%] px-5 pb-5 shadow-lg mb-5">
              <img className=' ml-28 mt-20 w-[65px] h-[65px]' src={Img1} alt='' />
              <h4 className='mt-5 font-josef font-bold text-center text-[#151875]'>24/7 Support</h4>
              <p className=' mt-4 font-lato text-center text-[#1A0B5B4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>

            <div className=" w-[24%] shadow-lg mb-5">
              <img className=' ml-28 mt-20 w-[65px] h-[65px]' src={Img2} alt='' />
              <h4 className='mt-5 font-josef font-bold text-center text-blu'>24/7 Support</h4>
              <p className=' mt-4 font-lato text-center text-[#1A0B5B4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>

            <div className=" w-[24%]  shadow-lg mb-5">
              <img className=' ml-24 mt-20 w-[65px] h-[65px]' src={Img3} alt='' />
              <h4 className='mt-5 font-josef font-bold text-center text-blu'>24/7 Support</h4>
              <p className=' mt-4 font-lato text-center text-[#1A0B5B4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>

            <div className=" w-[24%] shadow-lg mb-5">
              <img className=' ml-24 mt-20 w-[65px] h-[65px]' src={Img4} alt='' />
              <h4 className='mt-5 font-josef font-bold text-center text-blu'>24/7 Support</h4>
              <p className=' mt-4 font-lato text-center text-[#1A0B5B4D]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Shopex