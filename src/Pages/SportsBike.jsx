import React from "react";
import sbike2 from "./MainImage/sbike2.png";
import sbike3 from "./MainImage/sbike3.png";
import sbike4 from "./MainImage/sbike4.png";
import sbike5 from "./MainImage/sbike5.png";

export const SportsBike = () => {
  return (
    <>
      <div className="flex h-[500px] bg-[#3674B5]  text-white">
        <div className="w-2/4">
          <img
            src={sbike2}
            alt=""
            className="scale-90  pl-8 hover:scale-110 mt-4 transform transition-transform duration-500"
          />
        </div>
        <div className="w-2/4">
          <div className="font-bold text-4xl mt-8">
            Royal Enfield Continental GT 650
          </div>
          <div className="font-medium text-lg mt-2">
            The Royal Enfield Continental GT 650 is a classic café racer that
            combines vintage charm with modern performance. Powered by a 648cc
            parallel-twin engine, it delivers 47 bhp and 52 Nm of torque,
            providing a smooth and responsive ride. The bike features a retro
            design with a sculpted fuel tank, clip-on handlebars, and a
            comfortable seat. Advanced safety features like dual-channel ABS and
            disc brakes ensure a secure ride. The Continental GT 650 also comes
            with a digital-analog instrument cluster and tubeless tires, making
            it a stylish and practical choice for enthusiasts.d tubeless tires,
            makes it an ideal choice for urban commuters.
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
          <div className="font-bold text-4xl mt-8 ">KTM RC 390</div>
          <div className="font-medium text-lg mt-2">
            The KTM RC 390 is a high-performance sports bike designed for
            thrill-seekers. It is equipped with a 373.27cc single-cylinder,
            liquid-cooled engine that produces 43.5 PS of power and 37 Nm of
            torque. The bike features a sharp and aggressive design with a full
            fairing, LED headlamps, and a TFT display. Advanced features like
            cornering ABS, traction control, and a quick-shifter enhance the
            riding experience. The RC 390 also offers a comfortable riding
            position and excellent handling, making it ideal for both track and
            street riding.
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
        <div className="w-2/4 flex items-center">
          <img
            src={sbike3}
            alt=""
            className=" scale-75 hover:scale-90 transform transition-transform duration-500"
          />
        </div>
      </div>

      <div className="flex h-[520px] bg-[#3674B5]  text-white">
        <div className="w-2/4">
          <img
            src={sbike4}
            alt=""
            className="scale-100 mt-12 hover:scale-125 transform transition-transform duration-500"
          />
        </div>
        <div className="w-2/4">
          <div className="font-bold text-4xl mt-8">Kawasaki Ninja 650</div>
          <div className="font-medium text-lg mt-2">
            The Kawasaki Ninja 650 is a versatile sports bike that offers a
            perfect balance of performance and comfort. It is powered by a 649cc
            parallel-twin engine that delivers 67.3 bhp and 64 Nm of torque. The
            bike features a sleek and aerodynamic design with twin LED
            headlights, a full fairing, and a TFT color display. Safety features
            like dual-channel ABS and disc brakes ensure a secure ride. The
            Ninja 650 also comes with a comfortable seat, adjustable windscreen,
            and tubeless tires, making it suitable for both city commuting and
            long rides.
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
          <div className="font-bold text-4xl mt-8 ">Ducati Monster 821</div>
          <div className="font-medium text-lg mt-2">
            The Ducati Monster 821 is a powerful and iconic naked bike, designed
            to offer an exhilarating riding experience. Powered by an 821cc
            Testastretta 11° L-twin engine, it delivers 109 bhp and 86 Nm of
            torque, providing a thrilling and responsive ride. The bike features
            a muscular and aggressive design with a trellis frame, LED
            headlamps, and a digital instrument cluster1. Advanced features like
            riding modes, traction control, and cornering ABS enhance the riding
            experience. The Monster 821 also offers a comfortable riding
            position and excellent handling, making it a top choice for
            enthusiasts1.
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
          <img
            src={sbike5}
            alt=""
            className="ml-24 mt-10 scale-110 hover:scale-125 transform transition-transform duration-500"
          />
        </div>
      </div>
    </>
  );
};

export default SportsBike;
