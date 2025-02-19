import React from 'react'
import logo from '../img/logo.png'
import { FaLocationDot } from "react-icons/fa6";
import { BiSolidPhoneCall } from "react-icons/bi";
import { IoMdMail } from "react-icons/io";
import { FaInstagram } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa6";

export const Footer = () => {
  return (
    <>
    <div className='flex h-[330px] border-b-2 border-cyan-400 scroll-mt-20 ' id='Contact'>
        <div className='flex flex-col w-1/3 '>
            <div className='flex flex-row pt-6'>
                <span className='pt-4 pl-16'><img src={logo} alt="logo" className='scale-125 ' /></span>
                <span className=' pt-14 text-2xl font-bold'>Shelby's Garage</span>
            </div>
            <span className='pl-20  text-lg font-normal'>We offer a variety of bikes for all <br /> your riding needs. Find the perfect bike <br /> for your next adventure.</span>
        </div>
        <div className='flex flex-col w-1/3 py-6 px-20  '>
        <div className='text-2xl font-bold'>Contact</div>
            <div className='flex flex-col '>
                <div className='pt-4 flex flex-row'><span className='pt-3'><FaLocationDot className='w-6 h-6 '/></span><span className='pl-2 font-medium'>No 7, Kamadhenu Nagar, Pollachi Main Road, Eachanari</span></div>
                <div className='py-6 flex flex-row font-medium'><BiSolidPhoneCall className='w-6 h-6'/><span className='pl-2 font-medium'>+91 987654321</span></div>
                <div className=' flex flex-row'><IoMdMail className='w-6 h-6'/><span className='pl-2 font-medium'>shelbysgarage@gmail.com</span></div>
            </div>
        </div>
        <div className='flex p-6 pl-12 w-1/3 '>
            <div className='flex flex-col'>
                <div className='flex flex-col'>
                    <span className='text-2xl font-bold'>Working Hours</span>
                    <span className='text-lg font-normal pt-4'>Mon-Fri  9.00AM - 9.00PM</span>
                    <span className='text-lg font-normal pt-2'>Sat  9.00AM - 11.00PM</span>
                    <span className='text-lg font-normal pt-2'>Sun - Closed </span>
                    <span className='text-2xl font-bold pt-4'>Follow Us</span>
                    <div className='flex flex-row pt-4 '>
                        <div ><FaInstagram className='w-6 h-6'/></div>
                        <div className='px-4'><FaFacebook className='w-6 h-6'/></div>
                        <div><FaXTwitter className='w-6 h-6'/></div>
                    </div>
                </div>
                <div></div>
            </div>
        </div>
    </div>

    </>
  )
}

export default Footer
