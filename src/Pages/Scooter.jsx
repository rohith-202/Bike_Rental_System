import React from "react";
import scooter2 from "./MainImage/scooter2.png";
import scooter3 from "./MainImage/scooter3.png";
import scooter4 from "./MainImage/scooter4.png";
import scooter5 from "./MainImage/scooter5.png";

export const Scooter = () => {
  return (
    <>
      <div className="flex h-[500px] bg-[#3674B5]  text-white">
        <div className="w-2/4">
          <img src={scooter2} alt="" className="scale-100 mt-4  hover:scale-125 transform transition-transform duration-500" />
        </div>
        <div className="w-2/4">
          <div className="font-bold text-4xl mt-8">TVS Jupiter 125</div>
          <div className="font-medium text-lg mt-2">
            The TVS Jupiter 125 is a premium scooter designed to offer a perfect
            blend of performance, comfort, and convenience. Powered by a refined
            124.8cc BS6 engine, it delivers a smooth and efficient ride with a
            power output of 8.04 bhp and a torque of 10.5 Nm2. The scooter
            features a spacious 33-liter under-seat storage, the largest in its
            segment, and an external fuel filler for added convenience. With
            advanced safety features like Synchronized Braking Technology (SBT)
            and LED headlamps, the TVS Jupiter 125 ensures a safe and enjoyable
            ride1. Its stylish design, combined with practical features like a
            digital-analog speedometer and USB charging port, makes it an ideal
            choice for urban commuters2.
          </div>
          <div className="flex ">
            <div className="w-1/2">
              <div className="text-4xl font-semibold mt-4">Rental Rate</div>
              <div className="pl-4 text-xl font-medium">1 Hour : ₹15 </div>
              <div className="pl-4 text-xl">1 Day : ₹300</div>
              <div className="pl-4 text-xl">1 Week : ₹2000</div>
              <div className="pl-4 text-xl">1 Month : ₹7500</div>
            </div>
            <div className="flex items-center">
              <button className="text-white transition-colors duration-300 rounded-xl  p-3 px-4   hover:text-[#1a1a1a] font-medium  border-gray-600 hover:bg-[#A1E3F9]  shadow-lg shadow-gray-700 text-3xl">
                Book Ride
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[520px] bg-[#A1E3F9]  text-[#1A1A1A]">
        <div className="w-2/4 ml-4">
          <div className="font-bold text-4xl mt-8 ">The Honda Dio 110</div>
          <div className="font-medium text-lg mt-2">
            The Honda Dio 110 is a stylish and reliable scooter, perfect for
            those seeking a blend of performance, comfort, and convenience.
            Powered by a refined 109.51cc BS6 engine, it provides a smooth and
            efficient ride with a power output of 7.68 bhp and a torque of 9 Nm.
            The scooter features a spacious under-seat storage, allowing riders
            to conveniently carry their essentials, along with an external fuel
            filler for added convenience. With advanced safety features like
            Combined Braking System (CBS) and LED headlamps, the Honda Dio 110
            ensures a safe and enjoyable ride. Its modern design is complemented
            by practical features like a digital instrument cluster, tubeless
            tires, and a mobile charging port, making it an ideal choice for
            urban commuters.
          </div>
          <div className="flex ">
            <div className="w-1/2">
              <div className="text-4xl font-semibold mt-4">Rental Rate</div>
              <div className="pl-4 text-xl font-medium">1 Hour : ₹15 </div>
              <div className="pl-4 text-xl">1 Day : ₹300</div>
              <div className="pl-4 text-xl">1 Week : ₹2000</div>
              <div className="pl-4 text-xl">1 Month : ₹7500</div>
            </div>
            <div className="flex items-center">
              <button className="hover:text-white transition-colors duration-300 rounded-xl  p-3 px-4   text-[#1a1a1a] font-medium  border-gray-600 hover:bg-[#3674B5]  shadow-lg shadow-gray-700 text-3xl">
                Book Ride
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <img src={scooter3} alt="" className="ml-32 scale-75  hover:scale-100 transform transition-transform duration-500" />
        </div>
      </div>

      <div className="flex h-[520px] bg-[#3674B5]  text-white">
        <div className="w-2/4">
          <img src={scooter4} alt="" className="mt-10 ml-6  hover:scale-125 transform transition-transform duration-500" />
        </div>
        <div className="w-2/4">
          <div className="font-bold text-4xl mt-8">The Honda Activa 125</div>
          <div className="font-medium text-lg mt-2">
            The Honda Activa 125 is a premium scooter designed to offer a
            perfect blend of performance, comfort, and convenience. Powered by a
            refined 124cc BS6 engine, it delivers a smooth and efficient ride
            with a power output of 8.19 bhp and a torque of 10.4 Nm. The scooter
            features a spacious under-seat storage, allowing riders to
            conveniently carry their essentials, along with an external fuel
            filler for added convenience. With advanced safety features like
            Combined Braking System (CBS) and LED headlamps, the Honda Activa
            125 ensures a safe and enjoyable ride. Its stylish design is
            complemented by practical features like a digital instrument
            cluster, tubeless tires, and a mobile charging port, making it an
            ideal choice for urban commuters2.
          </div>
          <div className="flex ">
            <div className="w-1/2">
              <div className="text-4xl font-semibold mt-4">Rental Rate</div>
              <div className="pl-4 text-xl font-medium">1 Hour : ₹15 </div>
              <div className="pl-4 text-xl">1 Day : ₹300</div>
              <div className="pl-4 text-xl">1 Week : ₹2000</div>
              <div className="pl-4 text-xl">1 Month : ₹7500</div>
            </div>
            <div className="flex items-center">
            <button className="text-white transition-colors duration-300 rounded-xl  p-3 px-4   hover:text-[#1a1a1a] font-medium  border-gray-600 hover:bg-[#A1E3F9]  shadow-lg shadow-gray-700 text-3xl">
                Book Ride
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-[520px] bg-[#A1E3F9]  text-[#1A1A1A]">
        <div className="w-2/4 ml-4">
          <div className="font-bold text-4xl mt-8 ">The TVS Zest 110</div>
          <div className="font-medium text-lg mt-2">
            The TVS Zest 110 is a stylish and lightweight scooter, perfect for
            those seeking a blend of performance, comfort, and convenience.
            Powered by a refined 109.7cc BS6 engine, it provides a smooth and
            efficient ride with a power output of 7.71 bhp and a torque of 8.8
            Nm. The scooter features a spacious 19-liter under-seat storage,
            allowing riders to conveniently carry their essentials, along with
            an external fuel filler for added convenience4. With advanced safety
            features like Synchronized Braking Technology (SBT) and LED tail
            lamps, the TVS Zest 110 ensures a safe and enjoyable ride. Its
            modern design is complemented by practical features like a
            digital-analog speedometer, tubeless tires, and a USB charging port,
            making it an ideal choice for urban commuters4.
          </div>
          <div className="flex ">
            <div className="w-1/2">
              <div className="text-4xl font-semibold mt-4">Rental Rate</div>
              <div className="pl-4 text-xl font-medium">1 Hour : ₹15 </div>
              <div className="pl-4 text-xl">1 Day : ₹300</div>
              <div className="pl-4 text-xl">1 Week : ₹2000</div>
              <div className="pl-4 text-xl">1 Month : ₹7500</div>
            </div>
            <div className="flex items-center">
              <button className="hover:text-white transition-colors duration-300 rounded-xl  p-3 px-4   text-[#1a1a1a] font-medium  border-gray-600 hover:bg-[#3674B5]  shadow-lg shadow-gray-700 text-3xl">
                Book Ride
              </button>
            </div>
          </div>
        </div>
        <div className="w-2/4">
          <img src={scooter5} alt="" className="ml-24 mt-14 scale-100  hover:scale-125 transform transition-transform duration-500" />
        </div>
      </div>
    </>
  );
};

export default Scooter;
