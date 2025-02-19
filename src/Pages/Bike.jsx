import React from "react";
import scooter1 from "./MainImage/scooter1.png";
import bike1 from "./MainImage/bike1.png";
import sbike1 from "./MainImage/sbike1.png";
import { useNavigate  } from "react-router-dom";

export const Bike = () => {
  const Navigate = useNavigate();
  return (
    <>
      <div className="flex ">
        <div className="flex flex-col rounded-3xl bg- w-1/3 bg-[#3674B5] m-4 h-[690px] ">
          <div className=" h-3/5">
            <img src={scooter1} alt="" className="scale-75" />
          </div>
          <div className=" h-2/5 text-white">
            <div className="font-bold text-4xl pl-36 pt-4 ">Scooters</div>
            <div className="font-medium text-2xl pl-2 pt-2">
            "A scooter takes you places stress-free."
            </div>
            <div className="text-xl font-normal px-4 pt-2">
              We have plenty of scooters available for rent! Explore our
              selection and choose the perfect one for your journey
            </div>
            <div>
              <button className="hover:text-white transition-colors duration-300 rounded-xl  p-2 m-0 bg-[#000080] text-[#cfe7ff] px-5  ml-[8.5rem] mt-3 text-xl font-medium hover:shadow-white hover:shadow-xl" onClick={() =>{Navigate("/Scooters")}}>
                Tap To Explore
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-3xl bg- w-1/3 bg-[#3674B5] m-4 h-[690px] ">
          <div className=" h-3/5">
            <img src={bike1} alt="" className="scale-150 mt-24" />
          </div>
          <div className=" h-2/5 text-white">
            <div className="font-bold text-4xl pl-20 pt-4 ">Medium CC Bikes</div>
            <div className="font-medium text-2xl pl-16 pt-2">
            "Small engine, big adventures."
            </div>
            <div className="text-xl font-normal px-4 pt-2">
            Looking for a ride? We offer a wide range of low to medium CC bikes for rent. Find the perfect one and hit the road
            </div>
            <div>
              <button className="hover:text-white transition-colors duration-300 rounded-xl  p-2 m-0 bg-[#000080] text-[#cfe7ff] px-5  ml-[8.5rem] mt-3 text-xl font-medium hover:shadow-white hover:shadow-xl" onClick={() =>{Navigate("/MediumCCBikes")}}>
                Tap To Explore
              </button>
            </div>
          </div>
        </div>
        <div className="flex flex-col rounded-3xl bg- w-1/3 bg-[#3674B5] m-4 h-[690px] ">
          <div className=" h-3/5">
             <img src={sbike1} alt="" className="scale-100 mt-20 mr-20" /> 
          </div>
          <div className=" h-2/5 text-white">
            <div className="font-bold text-4xl pl-28 pt-4 ">Sports Bikes</div>
            <div className="font-medium text-2xl pl-12 pt-2">
            "Feel the speed, embrace the rush."
            </div>
            <div className="text-xl font-normal px-4  pt-2">
            Experience the thrill of the ride! Rent from our selection of high-CC sports bikes and conquer the road with power and style
            </div>
            <div>
              <button className="hover:text-white transition-colors duration-300 rounded-xl  p-2 m-0 bg-[#000080] text-[#cfe7ff] px-5  ml-[8.5rem] mt-3 text-xl font-medium hover:shadow-white hover:shadow-xl" onClick={() =>{Navigate("/SportsBikes")}}>
                Tap To Explore
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Bike;
