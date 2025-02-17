import React from 'react'
import { FaArrowRightLong } from "react-icons/fa6";

const Products2 = () => {
  return (
    <section className='bg-[#F9F8FE] py-28'>
        <div className="container mx-auto">
            <div className=" flex gap-16">
                <h3 className='font-josef text-2xl text-blu font-semibold underline'>Description</h3>
                <h3 className='font-josef text-2xl text-blu font-semibold'>Additional Info</h3>
                <h3 className='font-josef text-2xl text-blu font-semibold'>Reviews</h3>
                <h3 className='font-josef text-2xl text-blu font-semibold'>Video</h3>
            </div>
            <div className="pt-14">
                <h3 className='font-josef text-[22px] text-blu font-semibold pb-4'>Varius tempor.</h3>
                <p className='font-josef text-base text-ashui font-semibold pb-9'>Aliquam dis vulputate vulputate integer sagittis. Faucibus dolor ornare faucibus vel sed et eleifend habitasse amet. Montes, mauris varius ac est bibendum. Scelerisque a, risus ac ante. Velit consectetur neque, elit, aliquet. Non varius proin sed urna, egestas consequat laoreet diam tincidunt. Magna eget faucibus cras justo, tortor sed donec tempus. Imperdiet consequat, quis diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
            </div>
            <div>
                <h3 className='font-josef text-[22px] text-blu font-semibold'>More details</h3>
            <div className="pt-4">
                <div>
                    <div className="flex items-center gap-2 pb-3">
                    <FaArrowRightLong />
                    <p className='font-josef text-base text-ashui font-semibold'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                    </div>

                    <div className="flex items-center gap-2 pb-3">
                        <FaArrowRightLong className='text-[#2F1AC4]'/>
                    <p className='font-josef text-base text-ashui font-semibold'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                    </div>

                    <div className="flex items-center gap-2 pb-3">
                    <FaArrowRightLong />
                    <p className='font-josef text-base text-ashui font-semibold'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                    </div>

                    <div className="flex items-center gap-2 pb-3">
                    <FaArrowRightLong />
                    <p className='font-josef text-base text-ashui font-semibold'>Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .</p>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </section>
  )
}

export default Products2
