/* eslint-disable react/jsx-key */
import React, { useContext } from 'react'
import { apiData } from './ContextApi'
import Slider from "react-slick";

const Featured = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 3
      };

    const data = useContext(apiData);


  return (
    <section className='pt-12 pb-28'>
        <div className="container mx-auto">
            <div className="text-center mb-16">
                <h2 className='font-josef text-[46px] font-bold text-[#1A0B5B]'>Featured Products</h2>
            </div>
            <div className="">
                <Slider {...settings}>
                {data.map((item)=>(
                    <div className="!w-[95%] shadow-lg mb-5">
                        <div className="bg-[#F6F7FB] flex justify-center pt-10 pb-8">
                            <img src={item.thumbnail} alt="pictures" />
                        </div>
                        <div className="text-center py-5">
                            <h2 className="font-lato font-bold text-[18px] text-pinki">Cantilever chair</h2>
                            <h5 className="font-josef font-normal text-[14px] text-blu py-2">Code - Y523201</h5>
                            <p className="font-josef font-normal text-[14px] text-blu py-2">$42.00"</p>
                        </div>
                    </div>
                ))}
                </Slider>

            </div>
        </div>
      
    </section>
  )
}

export default Featured

// import { useContext } from "react";
// import { apiData } from "./ContextApi";
// import Slider from "react-slick";

// const Featured = () => {

//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 4,
//     slidesToScroll: 3,
//   };

//   const data = useContext(apiData);

//   return (
//     <>
//       <section>
//         <div className="container relative mx-auto">
//           <div className=" text-center mb-4">
//             <h2 className="font-josef font-bold text-[46px] text-[#1A0B5B] pt-20">Featured Products</h2>
//           </div>
//           <Slider {...settings}>
//             {data.map((item) => ( 
//               <div key={item.id} className="!w-[95%] shadow-lg mb-5 group">

//                 <div className="relative bg-[#F6F7FB] flex justify-center pt-12 pb-8 overflow-hidden">
//                   <img src={item.thumbnail} alt="" />
//                   <div className="absolute -left-32 group-hover:left-3 duration-500 top-1/2 -translate-y-1/2 flex flex-col gap-3">
//                     <p>Icon</p>
//                     <p>Icon</p>
//                     <p>Icon</p>
//                   </div>
//                 </div>
//                 <div className=" text-center py-5">
//                   <h2 className=" font-lato font-bold text-[18px] text-pinki">{item.title}</h2>
//                   <h5 className=" font-josef font-normal text-[14px] text-[#151875]">Code - Y523201</h5>
//                   <p className=" font-josef font-normal text-[14px] text-[#151875]">${item.price}</p>
//                 </div>
//               </div>
//             ))}
//           </Slider>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Featured;
