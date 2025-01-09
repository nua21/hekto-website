import React from 'react'
import Sub from '../assets/subscribe.png'

const Subscribe = () => {
  return (
    <>
      <section className=' w-[100%] h-[460px] mt-32'style={{backgroundImage:` url(${Sub})`}}>
        <div className="container mx-auto flex items-center justify-center">
            <div className=" mt-32">
                <h3 className=' font-josef text-blu text-[35px]'>Get Leatest Update By Subscribe</h3>
                <h3 className=' font-josef text-blu text-[35px] ml-32 mt-2'>0ur Newslater</h3>
                <button className=' bg-pinki text-white py-3 px-10 ml-40 mt-10'>Shop Now</button>
            </div>            
        </div>
      </section>
    </>
  )
}

export default Subscribe
