import React from 'react'
import { Link } from 'react-router-dom'

const Reusable = (ra) => {
  return (
    <section className='bg-[#F6F5FF] h-[286px]'>
        <div className="container mx-auto">
            <div className="flex">
                <h2 className='text-[#101750] font-josef text-4xl pb-2'>{ra.title}</h2>
                <div className="flex items-center justify-center">
                    <Link to={"/"} className='text-black font-lato text-sm'>Home</Link>
                    <Link to={"/pages"} className='text-black font-lato text-sm'>.Pages</Link>
                    <Link to={"/product-details"} className='text-pinki font-lato text-sm'>{ra.titlename}</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Reusable