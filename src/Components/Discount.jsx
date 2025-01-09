import React from 'react'
import Img from '../assets/Discount.png'
import { GoCheck } from "react-icons/go";

const Discount = () => {
  return (
    <>
      <section>
        <div className="container mx-auto mt-20">
          <div className=" flex justify-center">
            <h2 className=' font-josef text-[42px] text-blu'>Discount Item</h2>
          </div>
          <div className=" mt-5 w-[1214px] h-[580px]">
            <div className=" flex justify-center gap-5">
              <h6 className=' text-pinki'>Wood Chair</h6>
              <h6 className=' text-blu'>Plastic Chair</h6>
              <h6 className=' text-blu'>Sofa Colletion</h6>
            </div>
            <div className=" flex mt-10">
              <div className=" w-[48%] mt-20 ml-20">
                <h3 className=' font-josef text-[35px] text-blu mt-4'>20% Discount Of All Products</h3>
                <h6 className=' font-josef text-[16px] text-pinki'>Eams Sofa Compact</h6>
                <p className=' text-[#B7BACB] text-[14px] mt-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eu eget feugiat habitasse nec, bibendum condimentum.</p>
                <div className=" w-[500px] h-[100px] mt-5">
                    <div className=" flex items-center">
                      <GoCheck /><p className=' text-[#B7BACB] text-[14px]'>Material expose like metals</p>
                      <GoCheck className=' ml-6'/><p className=' text-[#B7BACB] text-[14px]'>Clear lines and geomatric figures</p>
                    </div>
                    <div className=" flex items-center mt-2">
                    <GoCheck /><p className=' text-[#B7BACB] text-[14px]'>Simple neutral colours.</p>
                    <GoCheck className=' ml-12'/><p className=' text-[#B7BACB] text-[14px]'>Material expose like metals</p>
                    </div>
                </div>
                <button className=' bg-pinki text-white py-3 px-10'>Shop Now</button>
              </div>
              <div className=" w-[48%]">
                <img className='' src={Img} alt="" />
              </div>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}

export default Discount