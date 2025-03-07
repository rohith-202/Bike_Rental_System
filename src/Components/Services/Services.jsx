import React from 'react'
import { FaHourglass } from "react-icons/fa";
import { SlCalender } from "react-icons/sl";
import { RiMotorbikeFill } from "react-icons/ri";

export const Services = () => {
  return (
    <>
     <div className='flex justify-center h-[660px]  scroll-mt-20 ' id='Services'>
     <div className='container h-[660px] flex justify-start flex-col '>
        <div className='flex flex-row justify-between h-[660px]'>
            <div className='w-[37em] pt-44'>
                <div className='flex flex-col'>
                    <span className='font-semibold text-xl'>Why Choose Us</span>
                    <span className='font-bold text-3xl py-2'>Unbeatable deals you won’t want to miss!</span>
                    <span className='text-lg'>Experience the ride of your life with our unbeatable bike rental deals! We’re here to offer you the best value, combining top-quality bikes and affordable prices. Whether it’s a short trip or a long adventure, our rentals are designed to give you the ultimate biking experience. Don’t miss out—gear up and save big today</span>
                </div>
            </div>
                <div className='w-[37em] pl-48 flex flex-row'>
                    <div className='flex flex-col mt-36 mr-8'>    
                    <FaHourglass className='h-14 w-14 mt-2 text-[#124466]'/>
                    <SlCalender className='h-14 w-14 mt-14 text-[#124466]'/>
                    <RiMotorbikeFill className='h-14 w-14 mt-14 text-[#124466]'/>
                    </div>
                <div className='flex flex-col '>
                    <span className='flex flex-col h-[12em] pt-[8.5rem] text-xl'>
                        <span className='font-bold text-2xl'>Hourly Rentals</span> 
                        <span className='pt-2 text-lg'>Rent bikes for a few hours for quick errands or fun rides.</span>
                    </span>
                    <span className='flex flex-col h-[5em] text-xl'>
                    <span className='font-bold text-2xl pt-2'>Daily/Weekly Rentals</span>
                    <span className='pt-2 text-lg'>Flexible rental plans for longer trips or vacations.</span>
                    </span>
                    <span className='flex flex-col h-[6em] text-xl pb-32'>
                    <span className='font-bold text-2xl pt-4'>Premium Bikes</span> 
                    <span className='text-lg'>Offer high-end bikes like cruisers, sports bikes, or electric bikes.</span>
                    </span>
                </div>
                </div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Services