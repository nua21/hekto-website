import React from 'react'
import Img from '../assets/unique.png'
import { GoDotFill } from "react-icons/go";

const UniqueFeatures = () => {
  return (
    <>
      <section className='bg-[#F1F0FF] h-[579px] mt-32'>
        <div className="container mx-auto flex justify-center py-4">
          <div className=" flex w-[1050px] h-[550px] ">
            <div className=" w-[880px] h-[550px] ">
              <img className='mt-8' src={Img} alt="" />
            </div>
            <div className=" mt-14">
              <h3 className='text-[#151875] font-josef font-bold text-[35px] mt-12'>Unique Features Of leatest &
                Trending Poducts</h3>
              <div className=" flex items-center mt-4">
                <GoDotFill className='text-pinki' /><p className=' text-[#ACABC3]'>All frames constructed with hardwood solids and laminates</p>
              </div>
              <div className=" flex justify-items-center mt-4">
                <GoDotFill className='text-[blue]'/><p className=' text-[#ACABC3]'>Reinforced with double wood dowels, glue, screw - nails corner
                  blocks and machine nails</p>
              </div>
              <div className=" flex items-center mt-4">
                <GoDotFill className='text-[green]'/><p className=' text-[#ACABC3]'>Arms, backs and seats are structurally reinforced</p>
              </div>
              <div className=" flex mt-10">
                <button className='h-12 w-32 bg-pinki flex items-center justify-center text-[#FFFFFF]'>Add To Cart</button>
                <div className=" ml-5">
                  <h4 className=' text-[#151875]'>B&B Italian Sofa</h4>
                  <h4 className=' text-[#151875]'>$32.00</h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default UniqueFeatures