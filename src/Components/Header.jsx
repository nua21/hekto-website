import React from 'react'
import { MdOutlineMailOutline } from "react-icons/md";
import { FiPhoneCall } from "react-icons/fi";
import { FaAngleDown } from "react-icons/fa6";
import { LuUser, LuShoppingCart } from "react-icons/lu";
import { IoHeartOutline } from "react-icons/io5";

const Header = () => {
  return (
    <header className='bg-[#7E33E0] text-white py-3 font-josef'>
        <div className="container mx-auto">
            <div className="flex justify-between">
                <div className="flex items-center gap-12">
                    <div className="flex items-center gap-2">
                    <MdOutlineMailOutline />
                    <p>mhhasanul@gmail.com</p>
                    </div>
                    <div className="flex items-center gap-2">
                    <FiPhoneCall />
                    <p>(12345)67890</p>
                    </div>
                </div>
                <div className="">
                    <ul className='flex items-center gap-5'>
                        <li className='flex items-center gap-2'>
                            <select name="" id="" className='bg-transparent'>
                                <option className='bg-[#7E33E0]' value="">English<FaAngleDown /></option>
                                <option className='bg-[#7E33E0]' value="">Bangla<FaAngleDown /></option>
                                <option className='bg-[#7E33E0]' value="">Spanish<FaAngleDown /></option>
                                <option className='bg-[#7E33E0]' value="">Chinese<FaAngleDown /></option>
                                <option className='bg-[#7E33E0]' value="">Korean<FaAngleDown /></option>
                                <option className='bg-[#7E33E0]' value="">Japanese<FaAngleDown /></option>
                            </select>
                            </li>
                        <li className='flex items-center gap-2'>
                            <select name="" id="" className='bg-transparent'>
                                <option className='bg-[#7E33E0]' value="">USD<FaAngleDown /></option>
                                <option className='bg-[#7E33E0]' value="">BDT<FaAngleDown /></option>
                                <option className='bg-[#7E33E0]' value="">EURO<FaAngleDown /></option>
                                <option className='bg-[#7E33E0]' value="">YUAN<FaAngleDown /></option>
                                <option className='bg-[#7E33E0]' value="">KRW<FaAngleDown /></option>
                                <option className='bg-[#7E33E0]' value="">YEN<FaAngleDown /></option>
                            </select></li>
                        <li className='flex items-center gap-2'>Login <LuUser /></li>
                        <li className='flex items-center gap-2'>Wishlist <IoHeartOutline /></li>
                        <li className='flex items-center gap-2'><LuShoppingCart className='text-[20px]'/></li>
                    </ul>
                </div>
            </div>
        </div>
    </header>
  )
}

export default Header
