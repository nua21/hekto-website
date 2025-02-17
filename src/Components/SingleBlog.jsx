import React from 'react'
import ReuseBlog from '../Components/ReuseBlog'
import B1 from "../assets/BlogImage1.png";
import BlogPage2 from '../Components/BlogPage2'
import SB1 from "../assets/SingleBlog1.png";
import SB2 from "../assets/SingleBlog2.png";
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import SC1 from "../assets/SingleComment1.png";
import SC2 from "../assets/SingleComment2.png";
import { FaUserLarge } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { TbMessageCircleFilled } from "react-icons/tb";
import SingleBlog2 from './SingleBlog2';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";


const SingleBlog = () => {
  return (
    
    <section className='pt-28'>
    <div className="container mx-auto">
      <div className="flex gap-14">
      <div className="w-[60%]">
        <ReuseBlog pen="Surf Auxion" date="Aug 09 2020" img={B1} h="Mauris at orci non vulputate diam tincidunt nec." p="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit facilisis quis auctor pretium ipsum, eu rutrum. Condimentum eu malesuada vitae ultrices in in neque, porta dignissim. Adipiscing purus, cursus vulputate id id dictum at."/>
        <p className='text-ashe font-lato text-base font-normal pb-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,</p>
        <div className="flex">
          <p className='w-[2px] h-36 bg-[#FB2E86] absolute top-[1391px] left-20 bg-fixed'></p>
        <p className='text-[#969CB4] font-josef text-lg italic font-semibold pt-16 pb-16 pl-4 bg-[#FAFAFB]'>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Commodo dictum sapien, amet, consequat toamk risusu”</p>
        </div>
        <div className="flex gap-9 pt-11">
          <img src={SB1} alt="" />
          <img src={SB2} alt="" />
        </div>
        <div>
        <p className='text-ashe font-lato text-base font-normal pt-11'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc, montes, lacus consequat integer viverra. Sit morbi etiam quam rhoncus. Velit in arcu platea donec vitae ante posuere malesuada.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Velit dapibus est, nunc,</p>
        </div>
          <SingleBlog2/>
          <hr className='mt-9'/>
          <div className="pt-10 pb-7">
              <div className='flex text-[#FFFFFF] gap-3 justify-center'>
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
      <div className="flex justify-between bg-[#F7F8FB] py-4 px-6">
        <div className="flex text-ashe font-lato text-base gap-2">
      <FaArrowLeftLong className='mt-1'/>
        <p>Previous Post</p>
        </div>
        <div className="flex text-ashe font-lato text-base gap-2">
        <p>Next Post</p>
        <FaArrowRightLong className='mt-1'/>
        </div>
      </div>
                <div className='flex mt-28 shadow-[0px_0px_20px_5px_rgba(128,128,128,0.3)] mr-12'>
                  <div className='flex gap-3 p-4'>
                    <img src={SC1} alt="" />
                  </div>
                  <div className='pl-4'>
                  <div className='flex gap-6 mt-9'>
                  <h3 className='text-[18px] text-[#363385] font-josef'>Sapien ac</h3>
                  <p className='text-[14px] font-lato text-ashe mt-1'>Jan 09 2020</p>
                  </div>
                  <p className='text-[#A3A2B6] text-[12px] font-lato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p> 
                  </div>
                  </div>
                  <div className='flex mt-7 shadow-[0px_0px_20px_5px_rgba(128,128,128,0.3)] mr-12 mb-36'>
                  <div className='flex gap-3 p-4'>
                    <img src={SC2} alt="" />
                  </div>
                  <div className='pl-4'>
                  <div className='flex gap-6 mt-9'>
                  <h3 className='text-[18px] text-[#363385] font-josef'>Augue conva</h3>
                  <p className='text-[14px] font-lato text-ashe mt-1'>Aug 18 2020</p>
                  </div>
                  <p className='text-[#A3A2B6] text-[12px] font-lato'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At in vitae rutrum vulputate consectetur.</p> 
                  </div>
                  </div>
             <div className="flex  gap-8 mb-10">
              <div className="flex gap-2 border-2 pl-3">
                <FaUserLarge className='mt-4 text-ashe text-sm'/>
                <input className="w-[400px] h-[42px] outline-none" type="text" placeholder='Your Name*' />
              </div>
              <div className="flex gap-2 border-2 pl-3">
              <MdEmail className='mt-4 text-ashe'/>
              <input className="w-[400px] h-[42px] outline-none" type="email" placeholder='Write Your Email*' />
              </div>
              </div>     
                    <div className="mb-10">
                    <TbMessageCircleFilled className='text-ashe text-[45px] pt-7 absolute'/>
                    <textarea className='border-2 outline-none pl-10 w-full h-60 pt-6 pb-6'  placeholder='Write your comment*' />
                    </div>
              <label className='flex items-center gap-2 mb-11'>
              <input type="checkbox" className='w-3 h-3' />
              <span className='text-[#8A91AB] text-sm font-medium font-lato'>Save my name, email, and website in this browser for the next time I comment.</span>
              </label>   
                      <div className=" bg-pinki text-center py-4 rounded-sm">
                        <button className='text-white font-josef text-lg'>Continue Shipping</button>
                        </div>        
          </div>
      <div className="w-[40%]">
        <BlogPage2/>
      </div>
      </div>
    </div>
  </section>
    
  )
}

export default SingleBlog
