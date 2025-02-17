import React, { useState } from 'react'
import Logo from '../assets/Hekto.png';
import { FaAngleDown, FaBars } from "react-icons/fa6";
import { FiSearch } from "react-icons/fi";
import { GiCrossedSabres } from "react-icons/gi";
import { Link } from 'react-router-dom';


const Navbar = () => {
  let [menuShow, setMenuShow] = useState(false);

  const handelMenu = ()=>{
    setMenuShow(!menuShow);
  }
  return (
    <nav className='py-4'>
        <div className="container mx-auto">
          <div className="flex items-center gap-20 justify-between">
            <img src={Logo} alt="logo" />
            <div className="">
              <ul className={`flex gap-8 ${menuShow === false ? 'flex-row' : 'flex-col'}`}>
                <li className='flex gap-2 items-center relative group text-[#FB2E86]'>
                  Home <FaAngleDown />
                  <ul className='absolute z-30 bg-[#F2F0FF] px-8 hidden group-hover:block top-6 left-0 cursor-pointer'>
                    <li>Item1</li>
                    <li>Item2</li>
                    <li>Item3</li>
                    <li>Item4</li>
                    <li>Item5</li>
                  </ul>
                </li>
                <Link to={"/pages"}>Pages</Link>
                <Link to={"/products"}>Products</Link>
                <Link to={"/blog"}>Blog </Link>
                <Link to={"/shop"}>Shop</Link>
                <Link to={"/contact"}>Contact</Link>
              </ul>
            </div>
              <div className="flex items-center">
                <input type="text" className='border-2 outline-none w-60 h-9 pl-4' />
                <button className='h-9 w-12 bg-[#FB2E86] flex justify-center items-center'>
                  <FiSearch className=' text-white text-[20px]'/>
                </button>
              </div>
              <div onClick={handelMenu} className='lg:hidden'>
                {menuShow === false ? <FaBars/> : <GiCrossedSabres/>}
              </div>
          </div>  
        </div> 
    </nav>
  )
}

export default Navbar