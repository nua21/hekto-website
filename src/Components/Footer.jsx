import React from 'react'
import fologo from '../assets/Hekto.png'
import { FaFacebookF } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer className='pt-10 bg-[#EEEFFB] '>
      <div className='container mx-auto pb-8'>
        <div className='flex justify-between'>
          <div className='w-1/3'>
            <div className='pb-11'>
              <img src={fologo} alt="footerlogo" />
            </div>
            <div className='relative pb-6'>
              <input type="email" placeholder='Enter Email Address' className='w-full h-12 rounded-md pl-5 outline-none' />
              <button className='w-32 h-12 bg-[#FB2E86] absolute top-0 right-0 rounded font-Lato
          text-[#FFFFFF]'>Sign Up</button>
            </div>
            <div>
              <h3 className='text-[#8A8FB9] pb-5'>Contact Info</h3>
              <h4 className='text-[#8A8FB9] pb-5'>17 Princess Road, London, Greater London NW1 8JR, UK</h4>
            </div>
          </div>
          <div>
            <h4 className='text-[#000000] font-Josefin font-semibold 
            text-[22px] pb-10'>Catagories</h4>
            <ul className='text-[#8A8FB9] font-Lato'>
              <li className='pb-5'>Laptops & Computers</li>
              <li className='pb-5'>Cameras & Photography</li>
              <li className='pb-5'>Smart Phones & Tablets</li>
              <li className='pb-5'>Video Games & Consoles</li>
              <li className='pb-5'>Waterproof Headphones</li>
            </ul>
          </div>
          <div>
            <h4 className='text-[#000000] font-Josefin font-semibold text-[22px] pb-10'><Link to='/faq'>Customer Care</Link></h4>
            <ul className='text-[#8A8FB9] font-Lato'>
              <li className='pb-5'> <Link to='/my-account'>My Account</Link></li>
              <li className='pb-5'>Discount</li>
              <li className='pb-5'>Returns</li>
              <li className='pb-5'>Orders History</li>
              <li className='pb-5'>Order Tracking</li>
            </ul>
          </div>
          <div>
            <h4 className='text-[#000000] font-Josefin font-semibold text-[22px] pb-10'>Pages</h4>
            <ul className='text-[#8A8FB9] font-Lato'>
              <li className='pb-5'> <Link to='/blog'>Blog</Link></li>
              <li className='pb-5'>Browse the Shop</li>
              <li className='pb-5'>Category</li>
              <li className='pb-5'>Pre-Built Pages</li>
              <li className='pb-5'>Visual Composer Elements</li>
              <li className='pb-5'>WooCommerce Pages</li>
            </ul>
          </div>
        </div>
      </div>
      <div className='bg-[#E7E4F8] py-5'>
        <div className='container mx-auto'>
          <div className='flex items-center justify-between'>
            <div className='font-lato font-semibold text-[#9DA0AE]'>
              <h4>©Webecy - All Rights Reserved</h4>
            </div>
            <div className='flex text-[#FFFFFF] gap-4 '>
              <div className='bg-[#151875] w-10 h-10 flex justify-center items-center rounded-full'>
                <FaFacebookF className='text-xl' />
              </div>
              <div className='bg-[#151875] w-10 h-10 flex justify-center items-center rounded-full'>
                <AiFillInstagram className='text-xl' />
              </div>
              <div className='bg-[#151875] w-10 h-10 flex justify-center items-center rounded-full'>
                <FaTwitter className='text-xl' />
              </div>
            </div>
          </div>
        </div>


      </div>
    </footer>

  )
}

export default Footer
