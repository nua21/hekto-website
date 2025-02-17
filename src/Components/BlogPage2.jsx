import React from 'react'
import { IoSearch } from "react-icons/io5";
import BR1 from "../assets/BlogRecent1.png";
import BR2 from "../assets/BlogRecent2.png";
import BR3 from "../assets/BlogRecent3.png";
import BR4 from "../assets/BlogRecent4.png";
import BS1 from "../assets/BlogSale1.png";
import BS2 from "../assets/BlogSale2.png";
import BS3 from "../assets/BlogSale3.png";
import BO1 from "../assets/BLogOffer1.png";
import BO2 from "../assets/BLogOffer2.png";
import BO3 from "../assets/BLogOffer3.png";
import BO4 from "../assets/BLogOffer4.png";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';

const BlogPage2 = () => {
  return (
        <section>
            <div className="container mx-auto">
                <div>
                    <div>
                        <h4 className='text-blu font-josef text-[22px] font-semibold pb-4'>Search</h4>
                        <div className="relative">
                            <input className='border-2 py-3 pr-11 pl-5' type="text" placeholder="Search For Posts" />
                            <IoSearch className='absolute text-2xl text-[#CBCBE0] top-3 left-48 outline-none'/>
                        </div>
                    </div>
                    <div className='pt-10'>
                        <h4 className='text-blu font-josef text-[22px] font-semibold pb-4'>Categories</h4>
                        <div className="flex gap-4 items-center">
                            <div className="pb-3">
                                <p className='bg-pinki text-white text-sm font-josef py-2 px-6 rounded'>Hobbies (14)</p>
                                <p className='text-[#3F509E] text-sm font-normal font-josef pb-3 pt-3'>Women (21)</p>
                                <p className='text-[#3F509E] text-sm font-normal font-josef pb-3'>Women (21)</p>
                            </div>
                            <div className="flex">
                            <div className="pt-1">
                                <p className='text-[#3F509E] text-sm font-normal font-josef pb-3'>Women (21)</p>
                                <p className='text-[#3F509E] text-sm font-normal font-josef pb-3'>Women (21)</p>
                                <p className='text-[#3F509E] text-sm font-normal font-josef pb-3'>Women (21)</p>
                            </div>
                            </div>
                        </div>
                    </div>
                    <div className="pt-10">
                        <h4 className='text-blu font-josef text-[22px] font-semibold pb-8'>Recent Post</h4>
                        <div className="flex gap-2 pb-5 items-center">
                            <img className='rounded' src={BR1} alt="" />
                            <div>
                                <p className='text-[#3F509E] font-josef text-sm font-normal'>It is a long established fact</p>
                                <p className='text-ashe font-lato text-xs font-semibold'>Aug 09 2020</p>
                            </div>
                        </div>
                        <div className="flex gap-2 pb-5 items-center">
                            <img className='rounded' src={BR2} alt="" />
                            <div>
                                <p className='text-[#3F509E] font-josef text-sm font-normal'>It is a long established fact</p>
                                <p className='text-ashe font-lato text-xs font-semibold'>Aug 09 2020</p>
                            </div>
                        </div>
                        <div className="flex gap-2 pb-5 items-center">
                            <img className='rounded' src={BR3} alt="" />
                            <div>
                                <p className='text-[#3F509E] font-josef text-sm font-normal'>It is a long established fact</p>
                                <p className='text-ashe font-lato text-xs font-semibold'>Aug 09 2020</p>
                            </div>
                        </div>
                        <div className="flex gap-2 pb-5 items-center">
                            <img className='rounded' src={BR4} alt="" />
                            <div>
                                <p className='text-[#3F509E] font-josef text-sm font-normal'>It is a long established fact</p>
                                <p className='text-ashe font-lato text-xs font-semibold'>Aug 09 2020</p>
                            </div>
                        </div>
                    </div>
                            <div className="pt-10">
                            <h4 className='text-blu font-josef text-[22px] font-semibold pb-9'>Sale Product</h4>
                        <div className="flex gap-2 pb-5 items-center">
                            <img className='rounded' src={BS1} alt="" />
                            <div>
                                <p className='text-[#3F509E] font-josef text-sm font-normal'>Elit ornare in enim mauris.</p>
                                <p className='text-ashe font-lato text-xs font-semibold'>Aug 09 2020</p>
                            </div>
                        </div>
                        <div className="flex gap-2 pb-5 items-center">
                            <img className='rounded' src={BS2} alt="" />
                            <div>
                                <p className='text-[#3F509E] font-josef text-sm font-normal'>Viverra pulvinar et enim.</p>
                                <p className='text-ashe font-lato text-xs font-semibold'>Aug 09 2020</p>
                            </div>
                        </div>
                        <div className="flex gap-2 pb-5 items-center">
                            <img className='rounded' src={BS3} alt="" />
                            <div>
                                <p className='text-[#3F509E] font-josef text-sm font-normal'>Mattis varius donec fdsfd</p>
                                <p className='text-ashe font-lato text-xs font-semibold'>Aug 09 2020</p>
                            </div>
                        </div>
                            </div>
                            <div className="pt-10">
                            <h4 className='text-blu font-josef text-[22px] font-semibold pb-9'>Offer product</h4>
                            <div className="flex items-center gap-4">
                            <div>
                                <img className='pb-2' src={BO1} alt="" />
                                <p className='text-blu text-sm  font-semibold font-lato pb-1 pl-4'>Duis lectus est.</p>
                                <p className='text-ashe font-lato text-xs font-semibold pl-4'>$12.00 - $15.00</p>
                            </div>
                            <div>
                                <img className='pb-2' src={BO2} alt="" />
                                <p className='text-blu text-sm  font-semibold font-lato pb-1 pl-4'>Sed placerat.</p>
                                <p className='text-ashe font-lato text-xs font-semibold pl-4'>$12.00 - $15.00</p>
                            </div>
                            </div>
                            <div className="flex items-center gap-4">
                            <div>
                                <img className='pb-2 pt-5' src={BO3} alt="" />
                                <p className='text-blu text-sm  font-semibold font-lato pb-1 pl-4'>Netus proin.</p>
                                <p className='text-ashe font-lato text-xs font-semibold pl-4'>$12.00 - $15.00</p>
                            </div>
                            <div>
                                <img className='pb-2 pt-5' src={BO4} alt="" />
                                <p className='text-blu text-sm  font-semibold font-lato pb-1 pl-6 pt'>Platea in.</p>
                                <p className='text-ashe font-lato text-xs font-semibold pl-4'>$12.00 - $15.00</p>
                            </div>
                            </div>
                            </div>
                                <div className="pt-10">
                                    <h4 className='text-blu font-josef text-[22px] font-semibold pb-4'>Follow</h4>
                                    <div className='flex text-[#FFFFFF] gap-3'>
                                        <div className='bg-[#5625DF] w-6 h-6 flex justify-center items-center rounded-full'>
                                        <FaFacebookF className='text-xs' />
                                        </div>
                                            <div className='bg-[#FF27B7]  w-6 h-6 flex justify-center items-center rounded-full'>
                                            <AiFillInstagram className='text-xs' />
                                            </div>
                                        <div className='bg-[#37DAF3]  w-6 h-6 flex justify-center items-center rounded-full'>
                                        <FaTwitter className='text-xs' />
                                        </div>
                                    </div>
                                </div>
                        <div className="pt-9">
                        <h4 className='text-blu font-josef text-[22px] font-semibold pb-4'>Tags</h4>
                        <div className="font-lato">
                            <ul className='flex gap-5 pb-3'>
                            <li><Link  className="underline text-blu">General</Link></li>
                            <li><Link  className="underline text-pinki">Atsanil</Link></li>
                            <li><Link  className="underline text-blu">Insas.</Link></li>
                            </ul>
                            <ul className='flex gap-5'>
                            <li><Link  className="underline text-blu">Bibsaas</Link></li>
                            <li><Link  className="underline text-blu">Nulla.</Link></li>
                            </ul>
                        </div>
                        </div>
                </div>
            </div>
        </section>
  )
}

export default BlogPage2
