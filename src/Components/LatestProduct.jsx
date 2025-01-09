import React, { useContext } from 'react'
import { apiData } from './ContextApi'

const LatestProducts = () => {

  let data = useContext(apiData);



  return (
    <>
      <section className='mt-14'>
        <div className="container mx-auto">
          <div className=" text-center">
            <h2 className=' text-[#151875] font-josef font-bold text-[42px]'>Leatest Products</h2>
            <div className=" flex items-center justify-center ">
              <h6 className=' px-4 text-pinki underline'>New Arrival</h6>
              <h6 className=' px-4 text-[#151875]'>Best Seller</h6>
              <h6 className=' px-4 text-[#151875]'>Featured</h6>
              <h6 className=' px-4 text-[#151875]'>Special Offer</h6>
            </div>
          </div>

          <div className=" flex justify-center flex-wrap gap-6 mt-12">
            {data.map((item) => (
              // eslint-disable-next-line react/jsx-key
              <div className="w-[29%] shadow-lg mb-5">
                <div className="bg-[#F6F7FB] flex justify-center pt-12 pb-12">
                  <img src={item.thumbnail} alt='' />
                </div>
                <div className="text-center py-5">
                  <h3 className='font-lato font-bold text-[18px] text-pinki'>{item.title}</h3>
                  <h6 className='font-josef font-normal text-[14px] text-[#151875]'>${item.price}</h6>
                  <h6 className='font-josef font-normal text-[14px] text-[#151875]'>{item.category}</h6>
                </div>
              </div>

            ))}


          </div>

        </div>
      </section>
    </>
  )
}

export default LatestProducts