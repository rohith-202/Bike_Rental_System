import React from "react";
import bike2 from "./MainImage/bike2.png";
import bike3 from "./MainImage/bike3.png";
import bike4 from "./MainImage/bike4.png";
import bike5 from "./MainImage/bike5.png"; 

export const MediumBike = () => {
  return (
    <>
      <div className="flex h-[500px] bg-[#3674B5]  text-white">
        <div className="w-2/4">
          <img src={bike2} alt="" className="scale-75  pl-8 hover:scale-90 transform transition-transform duration-500" />
        </div>
        <div className="w-2/4">
          <div className="font-bold text-4xl mt-8">Hero Splendor 110</div>
          <div className="font-medium text-lg mt-2">
          The Hero Splendor 110 is a reliable and efficient commuter bike, designed to offer a perfect blend of performance, comfort, and convenience. Powered by a refined 113.2cc BS6 engine, it delivers a smooth and efficient ride with a power output of 9.15 bhp and a torque of 9.89 Nm. The bike features a spacious under-seat storage, allowing riders to conveniently carry their essentials. With advanced safety features like Integrated Braking System (IBS) and halogen headlamps, the Hero Splendor 110 ensures a safe and enjoyable ride1. Its stylish design, combined with practical features like an analog-digital instrument console and tubeless tires, makes it an ideal choice for urban commuters.
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
          <div className="font-bold text-4xl mt-8 ">Hero Passion Pro</div>
          <div className="font-medium text-lg mt-2">
          The Hero Passion Pro is a stylish and efficient commuter bike, designed to offer a perfect blend of performance, comfort, and convenience. Powered by a refined 110cc BS6 engine, it delivers a smooth and efficient ride with a power output of 9.15 bhp and a torque of 9.79 Nm. The bike features a spacious under-seat storage, allowing riders to conveniently carry their essentials. With advanced safety features like Integrated Braking System (IBS) and halogen headlamps, the Hero Passion Pro ensures a safe and enjoyable ride2. Its modern design is complemented by practical features like an analog-digital instrument console and tubeless tires, making it an ideal choice for urban commuters.
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
          <img src={bike3} alt="" className="ml-16 mt-20 scale-100 hover:scale-125 transform transition-transform duration-500" />
        </div>
      </div>

      <div className="flex h-[520px] bg-[#3674B5]  text-white">
        <div className="w-2/4">
          <img src={bike4} alt="" className="scale-75  ml-8 hover:scale-90 transform transition-transform duration-500" />
        </div>
        <div className="w-2/4">
          <div className="font-bold text-4xl mt-8">Bajaj Platina</div>
          <div className="font-medium text-lg mt-2">
          The Bajaj Platina is a reliable and fuel-efficient commuter bike, designed to offer a perfect blend of performance, comfort, and convenience. Powered by a refined 115.45cc BS6 engine, it delivers a smooth and efficient ride with a power output of 8.6 bhp and a torque of 9.81 Nm. The bike features a spacious under-seat storage, allowing riders to conveniently carry their essentials. With advanced safety features like Combi Brake System (CBS) and LED DRLs, the Bajaj Platina ensures a safe and enjoyable ride3. Its stylish design, combined with practical features like an analog instrument console and tubeless tires, makes it an ideal choice for urban commuters.
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
          <div className="font-bold text-4xl mt-8 ">Bajaj Pulsar</div>
          <div className="font-medium text-lg mt-2">
          The Bajaj Pulsar is a powerful and stylish sports bike, designed to offer a perfect blend of performance, comfort, and convenience. Powered by a refined 149.5cc BS6 engine, it delivers a smooth and efficient ride with a power output of 14 bhp and a torque of 13.25 Nm. The bike features a spacious under-seat storage, allowing riders to conveniently carry their essentials. With advanced safety features like ABS and LED headlamps, the Bajaj Pulsar ensures a safe and enjoyable ride4. Its modern design is complemented by practical features like a fully digital instrument console and tubeless tires, making it an ideal choice for urban commuters.
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
          <img src={bike5} alt="" className="ml-12 mt-14 scale-100 hover:scale-125 transform transition-transform duration-500" />
        </div>
      </div>
    </>
  );
};

export default MediumBike;
