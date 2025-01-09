import React from 'react'
import L1 from '../assets/Latest1.png';
import L2 from '../assets/Latest2.png';
import L3 from '../assets/Latest3.png';
import { FaPenNib } from "react-icons/fa6";
import { MdOutlineCalendarMonth } from "react-icons/md";

const LatestBlog = () => {
  return (
    <section>
      <div className="container mx-auto">
        <div className="">
        <h2 className='text-blu font-josef text-[42px] text-center font-bold mt-14 mb-20'>Leatest Blog</h2>
        <div className="w-[1214px] mx-auto flex justify-center items-center gap-14">
          <div className="w-[370px] h-[600px]">
          <img className='rounded-md' src={L1} alt="" />
          <div className="bg-[#FFFFFF] shadow-lg px-4">
            <div className="flex items-start justify-start gap-10 mt-3">
              <div className="flex items-center gap-2">
                <FaPenNib className='text-pinki w-3 h-3'/>
                  <p className='text-blu font-josef text-sm'>SaberAli</p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineCalendarMonth className='text-[#FFA454] w-3 h-3'/>
                  <p className='text-blu font-josef text-sm'>21 August,2020</p>
              </div>
            </div>
            <h2 className='font-josef text-[18px] font-bold text-blu mt-5 mb-4'>Top esssential Trends in 2021</h2>
              <p className='text-[#72718F] font-lato text-[16px] w-[297px] h-[60px] leading-8'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                <button className='underline text-blu font-lato font-normal mt-4 text-[16px] mb-9'>Read More</button>
          </div>
          </div>

          <div className="w-[370px] h-[600px]">
          <img className='rounded-md' src={L2} alt="" />
          <div className="bg-[#FFFFFF] shadow-lg px-4">
            <div className="flex items-start justify-start gap-10 mt-3">
              <div className="flex items-center gap-2">
                <FaPenNib className='text-pinki w-3 h-3'/>
                  <p className='text-blu font-josef text-sm'>SaberAli</p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineCalendarMonth className='text-[#FFA454] w-3 h-3'/>
                  <p className='text-blu font-josef text-sm'>21 August,2020</p>
              </div>
            </div>
            <h2 className='font-josef text-[18px] font-bold text-pinki mt-5 mb-4'>Top esssential Trends in 2021</h2>
              <p className='text-[#72718F] font-lato text-[16px] w-[297px] h-[60px] leading-8'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                <button className='underline text-pinki font-lato font-normal mt-4 text-[16px] mb-9'>Read More</button>
          </div>
          </div>

          <div className="w-[380px] h-[600px]">
          <img  className='rounded-md' src={L3} alt="" />
          <div className="bg-[#FFFFFF] shadow-lg px-4">
            <div className="flex items-start justify-start gap-10 mt-3">
              <div className="flex items-center gap-2">
                <FaPenNib className='text-pinki w-3 h-3'/>
                  <p className='text-blu font-josef text-sm'>SaberAli</p>
              </div>
              <div className="flex items-center gap-2">
                <MdOutlineCalendarMonth className='text-[#FFA454] w-3 h-3'/>
                  <p className='text-blu font-josef text-sm'>21 August,2020</p>
              </div>
            </div>
            <h2 className='font-josef text-[18px] font-bold text-blu mt-5 mb-4'>Top esssential Trends in 2021</h2>
              <p className='text-[#72718F] font-lato text-[16px] w-[297px] h-[60px] leading-8'>More off this less hello samlande lied much over tightly circa horse taped mightly</p>
                <button className='underline text-blu font-lato font-normal mt-4 text-[16px] mb-9'>Read More</button>
          </div>
          </div>
            
          </div>
        </div>
      </div>
    </section>
  )
}

export default LatestBlog
