import React from 'react'
import { FaPenNib } from "react-icons/fa6";
import { LuCalendarDays } from "react-icons/lu";
import { Link } from 'react-router-dom';


const ReuseBlog = (raifu) => {
  return (
    <section>
        <div className="container mx-auto">
           <div className="flex">
                    <div className='pb-10'>
                        <img className='pb-7' src={raifu.img} alt="" />
                        <div className="flex font-josef text-sm text-blu gap-5 pb-7">
                            <div className="flex items-center gap-2">
                            <FaPenNib className='text-pinki'/>
                            <h5 className='bg-[#FFE7F9] py-2 px-8 rounded'>{raifu.pen}</h5>
                            </div>
                        <div className="flex items-center gap-2">
                        <LuCalendarDays className='text-[#FFA454]'/>
                        <h5 className='bg-[#FFECE2] rounded py-2 px-8' >{raifu.date}</h5>
                        </div>
                        </div>
                <div>
                    <h2 className='text-blu text-3xl font-bold font-josef pb-6'>{raifu.h}</h2>
                    <p className='text-ashe font-normal text-base font-lato pb-8'>{raifu.p}</p>
                </div>
                        <div>
                            <Link to={"/single-blog"} className='text-blu font-semibold font-lato text-lg'>{raifu.more}<span className='text-pinki font-bold'>{raifu.dot}</span></Link>
                        </div>
                    </div>
            </div>
        </div>
    </section>
  )
}

export default ReuseBlog
