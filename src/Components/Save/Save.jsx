import React from 'react'
import backgroundbike from '../img/back-bike.png'

export const Save = () => {
  return (
    <>
    <div className='flex flex-col bg-[#578FCA] h-40 items-center text-white'>
    <span className='text-4xl font-bold mt-8 '>Get the best deals on affordable bike rentals!</span>
    <span className='text-xl font-medium mt-3'>  Prime Spots. Reliable Providers. Round-the-Clock Assistance.</span>
    </div>
    <div className='flex justify-center  h-[480px] border-b-2 border-cyan-400 '>
        <img className='scale-110 ml-96 -z-10' src={backgroundbike} alt="Bike"  />
    <div className='container h-[480px] flex justify-start flex-col border-b-2 border-cyan-400'>
        </div>
    </div>
    </>
  )
}

export default Save