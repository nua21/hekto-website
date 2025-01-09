import React from 'react'
import C1 from '../assets/Category1.png'
import C2 from '../assets/Category2.png'
import C3 from '../assets/Category3.png'
import C4 from '../assets/Category4.png'
const TopCategories = () => {
  return (
    <>
      <section className='mb-5                                                                                                                        '>
        <div className="container mx-auto">
            <div className="">
               <h2 className='text-blu font-josef text-[42px] text-center font-bold mb-8'>Top Categories</h2></div>
            <div className=" flex items-center gap-6 justify-center">
                <div className="w-[23%] h-[345px]">
                  <div className="mb-5 flex ml-7 justify-center bg-[#F6F7FB] rounded-full w-[275px] h-[290px]">
                  <img src={C1} alt=''/>
                  </div>
                  <h6 className=' text-center font-josef text-blu text-[20px]'>Mini LCW Chair</h6>
                  <h6 className=' text-center font-josef text-blu text-[16px]'>$56.00</h6>
                </div>

                <div className="w-[23%] h-[345px]">
                  <div className="mb-5 flex  ml-7  justify-center bg-[#F6F7FB] rounded-full w-[275px] h-[290px]">
                  <img src={C2} alt=''/>
                  </div>
                  <h6 className=' text-center font-josef text-blu text-[20px]'>Mini LCW Chair</h6>
                  <h6 className=' text-center font-josef text-blu text-[16px]'>$56.00</h6>
                </div>

                <div className="w-[23%] h-[345px]">
                  <div className="mb-5 flex  ml-7 justify-center bg-[#F6F7FB] rounded-full w-[275px] h-[290px]">
                  <img src={C3} alt=''/>
                  </div>
                  <h6 className=' text-center font-josef text-blu text-[20px]'>Mini LCW Chair</h6>
                  <h6 className=' text-center font-josef text-blu text-[16px]'>$56.00</h6>
                </div>

                <div className="w-[23%] h-[345px]">
                  <div className="mb-5 flex  ml-7 justify-center bg-[#F6F7FB] rounded-full w-[275px] h-[290px]">
                  <img src={C4} alt=''/>
                  </div>
                  <h6 className=' text-center font-josef text-blu text-[20px]'>Mini LCW Chair</h6>
                  <h6 className=' text-center font-josef text-blu text-[16px]'>$56.00</h6>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default TopCategories