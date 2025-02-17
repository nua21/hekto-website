import React from 'react'
import R1 from '../assets/ProductRelated1.png';
import R2 from '../assets/ProductRelated2.png';
import R3 from '../assets/ProductRelated3.png';
import R4 from '../assets/ProductRelated4.png';
import { MdOutlineStarPurple500 } from "react-icons/md";


const Products3 = () => {
  return (
    <section className='pt-20'>
        <div className="container mx-auto">
            <h2 className='font-josef text-deblu font-bold text-4xl pb-10'>Related Products</h2>
            <div className="flex items-center justify-between">
                <div>
                    <img src={R1} alt="ManPic" />
                    <div className='flex gap-x-4 pt-5 items-center'>
                        <h3 className='text-blu text-lg font-josef font-bold'>Mens Fashion Wear</h3> 
                        <div className='flex items-center text-[#FFC416] text-lg'>
                        <MdOutlineStarPurple500/>
                        <MdOutlineStarPurple500/>
                        <MdOutlineStarPurple500/>
                        <MdOutlineStarPurple500/>
                        <MdOutlineStarPurple500 className='text-[#B2B2B2]'/>
                        </div>
                    </div>
                <h4 className='font-josef text-blu pt-2 text-base'>$43.00</h4>
                </div>

                <div>
                    <img src={R2} alt="WomanPic" />
                    <div className='flex gap-x-4 pt-5 items-center'>
                        <h3 className='text-blu text-lg font-josef font-bold'>Women’s Fashion</h3> 
                        <div className='flex items-center text-[#FFC416] text-lg'>
                        <MdOutlineStarPurple500/>
                        <MdOutlineStarPurple500/>
                        <MdOutlineStarPurple500/>
                        <MdOutlineStarPurple500/>
                        <MdOutlineStarPurple500/>
                        </div>
                    </div>
                <h4 className='font-josef text-blu pt-2 text-base'>$67.00</h4>
                </div>

                <div>
                    <img src={R3} alt="WomanPic" />
                    <div className='flex gap-x-4 pt-5 items-center'>
                        <h3 className='text-blu text-lg font-josef font-bold'>Wolx Dummy Fashion</h3> 
                        <div className='flex items-center text-[#FFC416] text-base'>
                        <MdOutlineStarPurple500/>
                        <MdOutlineStarPurple500/>
                        <MdOutlineStarPurple500/>
                        <MdOutlineStarPurple500/>
                        <MdOutlineStarPurple500 className='text-[#B2B2B2]'/>
                        </div>
                    </div>
                <h4 className='font-josef text-blu pt-2 text-base'>$67.00</h4>
                </div>

                <div>
                    <img src={R4} alt="WomanPic" />
                    <div className='flex gap-x-4 pt-5 items-center'>
                        <h3 className='text-blu text-lg font-josef font-bold'>Top Wall Digital Clock</h3> 
                        <div className='flex items-center text-[#FFC416] text-base'>
                        <MdOutlineStarPurple500/>
                        <MdOutlineStarPurple500/>
                        <MdOutlineStarPurple500/>
                        <MdOutlineStarPurple500 className='text-[#B2B2B2]'/>
                        <MdOutlineStarPurple500 className='text-[#B2B2B2]'/>
                        </div>
                    </div>
                <h4 className='font-josef text-blu pt-2 text-base'>$51.00</h4>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Products3
