import React from 'react';
import { useNavigate } from 'react-router-dom';
import Homebike from '../img/Background.png';

export const Home = () => {
  const navigate = useNavigate();

  const handleNavigation = (link) => {
    const sectionId = link.split("#")[1];
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    } else {
      navigate(link);
    }
  };

  return (
    <>
      <div className='flex justify-end h-[640px] scroll-mt-20 ' id='Home'>
        <div className=' h-[640px]'>
          <div className='grid grid-cols-1 sm:grid-cols-2 h-[520px]'>
            <span><img src={Homebike} alt="bike" className='scale-175  ml-48 -z-10' /></span>
            <span className='p-4 pt-32 pl-20'>
              <div className='order-1 sm:order-2'>
                <span className='text-2xl font-roboto font-bold '>
                  Take your ride now
                </span>
                <br />
                <span className='text-6xl font-roboto font-extrabold text-[#3674B5]'>
                  Travel comfortably with our bike rental
                </span>
                <br />
                <span className='text-lg font-medium text-black pt-1'>
                  Unlock your adventure with our bike rentals. Affordable rates, unlimited miles, and flexible options to suit your journey!
                </span>
                <br /><br />
                <button className='hover:text-yellow-50 transition-colors duration-300 rounded-lg border-2 p-3 m-0 bg-orange-500 px-5 hover:shadow-lg font-semibold text-lg relative z-50'>
                  Book Ride
                </button>
                <button className='ml-2 hover:text-teal-400 transition-colors duration-300 rounded-lg border-2 p-3 m-0 bg-gray-900 px-5 hover:shadow-lg text-lg font-semibold text-yellow-50 cursor-pointer relative z-50'
                  onClick={() => handleNavigation("#Services")}
                >
                  Why Shelby's Garage
                </button>
              </div>
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
