import React from 'react';
import Img1 from '../assets/trending1.png';
import Img2 from '../assets/trending2.png';
import Img3 from '../assets/trending3.png';
import Img4 from '../assets/trending4.png';
import T1 from '../assets/T1.png';
import T2 from '../assets/T2.png';
import T3 from '../assets/T3.png';
import P1 from '../assets/P1.png';
import P2 from '../assets/P2.png'
const Trending = () => {
    return (
        <>
            <section>
                <div className="container relative mx-auto mt-10 ">
                    <div className=" flex justify-center mb-4">
                        <h2 className="font-josef font-bold text-[46px] text-blu pt-20">Trending Products</h2>
                    </div>

                    <div className=" flex gap-10 justify-center">
                        <div className=" shadow-md h-[370px] w-[270px]">
                            <img className=' w-[270px] py-3 px-3' src={Img1} alt='' />
                            <h5 className='mt-5 font-lato font-bold text-center text-blu'>Cantilever chair</h5>
                            <h6 className='mt-1 font-lato text-center text-[#1A0B5B4D]'>$26.00 $42.00</h6>
                        </div>
                        <div className=" shadow-md h-[370px] w-[270px]">
                            <img className=' w-[270px] py-3 px-3' src={Img2} alt='' />
                            <h5 className='mt-5 font-lato font-bold text-center text-blu'>Cantilever chair</h5>
                            <h6 className='mt-1 font-lato text-center text-[#1A0B5B4D]'>$26.00 $42.00</h6>
                        </div>
                        <div className=" shadow-md h-[370px] w-[270px]">
                            <img className=' w-[270px] py-3 px-3' src={Img3} alt='' />
                            <h5 className='mt-5 font-lato font-bold text-center text-blu'>Cantilever chair</h5>
                            <h6 className='mt-1 font-lato text-center text-[#1A0B5B4D]'>$26.00 $42.00</h6>
                        </div>
                        <div className=" shadow-md h-[370px] w-[270px]">
                            <img className=' w-[270px] py-3 px-3' src={Img4} alt='' />
                            <h5 className='mt-5 font-lato font-bold text-center text-blu'>Cantilever chair</h5>
                            <h6 className='mt-1 font-lato text-center text-[#1A0B5B4D]'>$26.00 $42.00</h6>
                        </div>
                    </div>

                    <div className="flex items-center mt-10 ml-8 gap-10 px-2">
                        <div className=" relative w-[425px] h-[250px] bg-[#FFF6FB]">
                            <div className=" mt-5 ml-5">
                                <h4 className='text-blu font-josef'>23% off in all products</h4>
                                <h6 className='text-pinki font-lato text-[10px] underline'>Shop Now</h6>
                            </div>
                            <div className=" absolute right-1 bottom-1 w-[213px] h-[205px]">
                                <img src={P1} alt='' />
                            </div>
                        </div>
                        <div className=" relative w-[425px] h-[250px] bg-[#EEEFFB]">
                            <div className=" mt-5 ml-5">
                                <h4 className=' text-blu font-josef'>23% off in all products</h4>
                                <h6 className=' text-pinki font-lato underline'>View Collection</h6>
                            </div>
                            <div className=" flex items-center absolute right-10 top-24 w-[220px] h-[120px]">
                                <img src={P2} alt='' />
                            </div>
                        </div>

                        <div className="">
                            <div className=" w-[267px] h-[74px] flex mb-3">
                                <div className=" w-[107px] h-[74px] bg-[#F5F6F8] flex justify-center">
                                    <img src={T1} alt='' />
                                </div>
                                <div className="text-blu pl-2 pt-3">
                                    <h5>Executive Seat chair</h5>
                                    <h6>$32.00</h6>
                                </div>
                            </div>
                            <div className=" w-[267px] h-[74px]  flex mb-3">
                                <div className=" w-[107px] h-[74px] bg-[#F5F6F8] flex justify-center">
                                    <img src={T2} alt='' />
                                </div>
                                <div className="text-blu pl-2 pt-3">
                                    <h5>Executive Seat chair</h5>
                                    <h6>$32.00</h6>
                                </div>
                            </div>
                            <div className=" w-[267px] h-[74px] flex mt-3">
                                <div className=" w-[107px] h-[74px] bg-[#F5F6F8] flex justify-center">
                                    <img src={T3} alt='' />
                                </div>
                                <div className="text-blu pl-2 pt-3">
                                    <h5>Executive Seat chair</h5>
                                    <h6>$32.00</h6>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Trending