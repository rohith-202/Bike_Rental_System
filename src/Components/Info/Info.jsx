import React from 'react'
import  {MdSportsMotorsports}  from "react-icons/md";
import { FaMotorcycle } from "react-icons/fa6";
import { IoMdContact } from "react-icons/io";

export const Info = () => {
  return (
    <>
    <div className='flex justify-center h-[660px] border-b-2 border-cyan-400'>
    <div className='container h-[660px] flex justify-start flex-col border-b-2  border-cyan-400'>
        <div className='flex justify-center pt-[6rem] text-3xl font-bold'>
            <span>Take your ride now</span>
        </div>
        <div className='flex justify-center pt-2 text-5xl font-extrabold'>
        <span>Speedy & Effortless bike rental</span>
        </div>
        <div className='mt-9 ml-20 flex'>
        <MdSportsMotorsports className='h-36 w-36'/>
        <IoMdContact className='h-36 w-36 ml-[20rem]'/>
        <FaMotorcycle className='h-36 w-36 ml-[20rem]'/>
        </div>
        <div className='mt-4 ml-8 flex justify-between'>
        <div className='w-[18rem] flex flex-col items-center'>
        <span className='text-xl font-extrabold text-black pt-1 mr-16 '>Select Bike</span>
        <span className='text-base font-medium text-black mt-2 '>We offer a wide variety of bikes to suit all your biking adventures. Whether you're looking for something sporty or something more casual, we've got the perfect bike for you.</span>

        </div><div className='w-[18rem] flex flex-col items-center '>
        <span className='text-xl font-extrabold text-black pt-1 mr-16 '>Contact Operator</span>
        <span className='text-base font-medium text-black mt-2 '>Our knowledgeable and friendly operators are always ready to help with any questions or concerns. Just give us a call!</span>

        </div><div className='w-[18rem] flex flex-col items-center mr-6'>
        <span className='text-xl font-extrabold text-black pt-1 mr-16 '>Let's Ride</span>
        <span className='text-base font-medium text-black mt-2 '>Whether you're exploring city streets or hitting the trails, we have a bike to match your journey. Let's make your ride memorable!</span>
        </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Info 