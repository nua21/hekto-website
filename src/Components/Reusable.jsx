import React from 'react'
import { Link } from 'react-router-dom'

const Reusable = (nua) => {
  return (
    <section className='bg-[#F6F5FF] py-24'>
    <div className='container mx-auto'>
    <div>
        <h2><Link className='font-josef font-bold text-deblu text-4xl pb-2'>{nua.title}</Link></h2>
        <h4><Link to={"/"} className='font-lato font-medium text-black text-sm'>Home</Link><Link to={"/pages"}> . Pages </Link> <Link to={"/here?"}> <span className='text-pinki'>{nua.titlename}</span></Link></h4>
    </div>
  </div>
    
</section>

  )
}

export default Reusable