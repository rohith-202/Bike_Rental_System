import React from 'react'
import backgroundbike from '../img/back-bike.png'
import { motion } from 'framer-motion';

export const Save = () => {
  return (
    <>
    <div className='flex flex-col bg-[#578FCA] h-40 items-center text-white'>
    <span className='text-4xl font-bold mt-8 '>Get the best deals on affordable bike rentals!</span>
    <span className='text-xl font-medium mt-3'>  Prime Spots. Reliable Providers. Round-the-Clock Assistance.</span>
    </div>
    <div className='flex justify-center  h-[480px]  '>
    <motion.img 
          className='scale-110 ml-96 -z-10' 
          src={backgroundbike} 
          alt="Bike" 
          initial={{ x: 100, opacity: 0 }} 
          whileInView={{ x: 0, opacity: 1 }} 
          transition={{ duration: 0.8, ease: "easeOut" }} 
          viewport={{ once: false, amount: 0.3 }} 
        />
    <div className='container h-[480px] flex justify-start flex-col '>
        </div>
    </div>
    </>
  )
}

export default Save