import React from 'react'
import B1 from '../assets/ProductBag1.png';
import B2 from '../assets/ProductBag2.png';
import B3 from '../assets/ProductBag3.png';
import B4 from '../assets/ProductBag4.png';
import { MdOutlineStarPurple500 } from "react-icons/md";
import { IoHeartOutline } from "react-icons/io5";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";



const Products1 = () => {
  return (
    <section className='py-20'>
        <div className="container mx-auto">
            <div className="flex shadow-lg p-4">
                <div className="pr-5">
                    <img className='mb-3' src={B1} alt="bag picture 1" />
                    <img className='mb-3' src={B2} alt="bag picture 2" />
                    <img src={B3} alt="bag picture 3" />
                </div>
                <div className="flex items-center gap-x-10 pr-11">
                    {/* <div className="w-1/2 h-full bg-[#C4C4C4] flex items-center justify-center"> */}
                        <img src={B4} alt="bag picture 4" />
                    {/* </div> */}
                </div>
                <div className='mt-14'>
                     <h2 className='text-dblu font-josef text-4xl font-semibold pb-3'>Playwood arm chair</h2>
                     <div className="flex items-center text-[#FFC416] text-lg gap-x-1">
                     <MdOutlineStarPurple500 />
                     <MdOutlineStarPurple500 />
                     <MdOutlineStarPurple500 />
                     <MdOutlineStarPurple500 />
                     <MdOutlineStarPurple500 />
                     <h4 className='text-blu font-semibold font-josef'>(22)</h4>
                     </div>
                     <div className=" flex gap-x-5 pt-4">
                        <h4 className='text-base font-josef text-blu'>$32.00</h4>
                        <h4 className='text-base font-josef text-pinki line-through'>$32.00</h4>
                     </div>
                     <h4 className='text-dblu text-base font-semibold py-3'>Color</h4>
                     <p className='text-ashui font-josef text-base font-semibold'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris tellus porttitor purus, et volutpat sit.</p>
                     <div className="flex items-center gap-x-5 pt-8 ml-20">
                        <h3 className='text-blu font-josef text-lg'>Add To cart</h3>
                        <IoHeartOutline className='text-[#535399] text-lg'/>
                     </div>
                     <h3 className='text-blu font-josef text-lg py-3 font-semibold'>Categories:</h3>
                     <h3 className='text-blu font-josef text-lg py-3 font-semibold'>Tags</h3>
                     <div className="flex items-center gap-x-4">
                     <h3 className='text-blu font-josef text-lg py-3 font-semibold'>Share</h3>
                     <div className="flex items-center text-white gap-3">
                        <div className="bg-blu rounded-full w-6 h-6 flex justify-center items-center">
                            <FaFacebookF/>
                        </div>
                        <div className="bg-pinki rounded-full w-6 h-6 flex justify-center items-center">
                            <AiFillInstagram/>
                        </div>
                        <div className="bg-blu rounded-full w-6 h-6 flex justify-center items-center">
                            <FaTwitter/>
                        </div>
                     </div>
                     </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Products1
