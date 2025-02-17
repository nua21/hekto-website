/* eslint-disable react/jsx-key */
import React, { useContext, useEffect, useState } from 'react'
import { BsFillGridFill } from "react-icons/bs";
import { FaList } from "react-icons/fa";
import { apiData } from './ContextApi';
import { VscTriangleDown } from "react-icons/vsc";
import { GoDotFill } from "react-icons/go";
import { FiShoppingCart } from "react-icons/fi";
import { HiMiniMagnifyingGlassPlus } from "react-icons/hi2";
import { CiHeart } from "react-icons/ci";


const ShopGridDefault = () => {

    let data = useContext(apiData);
     let [category, setCategory] =useState([]);
     useEffect(()=>{
        setCategory([...new Set(data.map((item)=>item.category))])
     }, [data])

     console.log(category);
    
     let [categoryItems, setCategoryItems] =useState([]);
    const handleCategoryProducts =(cat)=>{
        let filteredProducts = data.filter((item)=>item.category === cat) 
        setCategoryItems(filteredProducts)
    }
    console.log(categoryItems);
    
    
     



  return (
    <section>
        <div className="container mx-auto">
            <div className="flex items-center justify-around pt-32">
                <div>
                    <h3 className='font-josef text-blu text-2xl font-bold'>Ecommerce Acceories & Fashion item </h3>
                    <h5 className='font-lato text-ashe text-xs'>About 9,620 results (0.62 seconds)</h5>
                </div>
                <div className="flex  gap-7 items-center">
                <div className="flex gap-2 items-center">
                    <h4 className='font-lato text-[#3F509E] text-base'>Per Page:</h4>
                    <div className="">
                        <input className='outline-none w-14 h-8 border-2 pl-3' type="text" />
                    </div>
                </div>
                <div className="flex items-center gap-2">
                    <h4 className='font-lato text-[#3F509E] text-base'>Sort By:</h4>
                    <select name="" id="" className='text-xs font-lato text-ashe px-2 border-2 py-2 outline-none'>
                        <option value="">Best Match</option>
                        <option value="">Best Match</option>
                        <option value="">Best Match</option>
                        <option value="">Best Match</option>
                        <option value="">Best Match</option>
                    </select>
                </div>
                <div className="flex items-center gap-2">
                    <div className="flex items-center gap-2">
                    <h4 className='font-lato text-[#3F509E] text-base'>View:</h4>
                    <div className="flex items-center gap-2 text-blu">
                        <BsFillGridFill className='text-xl'/>
                        <FaList className='text-2xl' />
                    </div>
                    </div>
                    <div>
                        <input className='border-2 outline-none w-44 h-8 pl-4' type="text" />
                    </div>
                </div>
                </div>
            </div>

        <div className="flex justify-between pt-24">
            <div className="w-[22%]">
            <div className="border border-red-500">
                    <div className="">
                        <h3 className='font-josef flex items-center gap-5 font-bold text-blu text-2xl border-b-2 pb-5'>Shop by Category <VscTriangleDown /></h3>
                        <ul>
                            {category.map((categories) =>(
                                <li onClick={()=>handleCategoryProducts(categories)} className='capitalize cursor-pointer py-3 border-b-2'>{categories}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="pt-10">
                        <h3 className='font-josef flex items-center gap-5 font-bold text-blu text-2xl border-b-2'>Shop by Brand <VscTriangleDown /></h3>
                        <ul>
                        {category.map((item) =>(
                                <li>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="pt-10">
                        <h3 className='font-josef flex items-center gap-5 font-bold text-blu text-2xl border-b-2'>Shop by Color<VscTriangleDown /></h3>
                        <ul>
                        {category.map((item) =>(
                                <li>{item}</li>
                            ))}
                        </ul>
                    </div>
                    <div className="pt-10">
                        <h3 className='font-josef flex items-center gap-5 font-bold text-blu text-2xl border-b-2'>Shop by Price<VscTriangleDown /></h3>
                        <ul>
                        {category.map((item) =>(
                                <li>{item}</li>
                            ))}
                        </ul>
                    </div>
                
            </div>
            </div>
            <div className="w-[78%] flex flex-wrap">
                {data.map((item)=>(
                    <div className="flex justify-center">
                        <div className="h-[400px] w-[275px] border group mt-20 ml-6 top-5">
                <div className="bg-[#F6F7FB] relative overflow-hidden" >
                        <img src={item.thumbnail} alt="" />
                        <div className="absolute group-hover:left-3 duration-500 -left-32 top-1/2 -translate-y-1/2 flex flex-col gap-3">
                        <FiShoppingCart className='text-blu text-lg' />
                        <HiMiniMagnifyingGlassPlus className='text-blu text-lg' />
                        <CiHeart className='text-blu text-lg' />
                        </div>
                </div>
                    <p className='text-center text-blu text-lg font-bold font-josef mt-4'>{item.title}</p>
                <div className="flex justify-center mb-3">
                    <span><GoDotFill className='text-[#DE9034]' /></span>
                    <span><GoDotFill className='text-[#EC42A2]' /></span>
                    <span><GoDotFill className='text-[#8568FF]' /></span>
                </div>
                <div className=" flex justify-center gap-3">
                    <h3 className='text-blu text-sm text-josef'>${item.price}</h3>
                    <h3 className='line-through text-pinki text-sm text-josef'>$42.00 </h3>
                </div>
            </div>
                    </div>

                ))}

            </div>
        </div>
        



        </div>
    </section>
  )
}

export default ShopGridDefault
