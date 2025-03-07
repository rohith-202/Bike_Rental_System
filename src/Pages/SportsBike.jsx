import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import sbike2 from "./MainImage/sbike2.png";
import sbike3 from "./MainImage/sbike3.png";
import sbike4 from "./MainImage/sbike4.png";
import sbike5 from "./MainImage/sbike5.png";

const sbikes = [
  {
    id: 9,
    name: "Royal Enfield Continental GT 650",
    image: sbike2,
    desc: "The Royal Enfield Continental GT 650 is a classic café racer that combines vintage charm with modern performance. Powered by a 648cc parallel-twin engine, it delivers 47 bhp and 52 Nm of torque, providing a smooth and responsive ride. The bike features a retro design with a sculpted fuel tank, clip-on handlebars, and a comfortable seat. Advanced safety features like dual-channel ABS and disc brakes ensure a secure ride. The Continental GT 650 also comes with a digital-analog instrument cluster and tubeless tires, making it a stylish and practical choice for enthusiasts.",
    rates: ["1 Hour : ₹15", "1 Day : ₹300", "1 Week : ₹2000", "1 Month : ₹7500"],
    topclass: "flex h-[500px] bg-[#3674B5] text-white",
    imgclass: "scale-90 pl-8 hover:scale-110 mt-4 transform transition-transform duration-500"
  },
  {
    id: 10,
    name: "KTM RC 390",
    image: sbike3,
    desc: "The KTM RC 390 is a high-performance sports bike designed for thrill-seekers. It is equipped with a 373.27cc single-cylinder, liquid-cooled engine that produces 43.5 PS of power and 37 Nm of torque. The bike features a sharp and aggressive design with a full fairing, LED headlamps, and a TFT display. Advanced features like cornering ABS, traction control, and a quick-shifter enhance the riding experience. The RC 390 also offers a comfortable riding position and excellent handling, making it ideal for both track and street riding.",
    rates: ["1 Hour : ₹15", "1 Day : ₹300", "1 Week : ₹2000", "1 Month : ₹7500"],
    topclass: "flex h-[520px] bg-[#A1E3F9] text-[#1A1A1A]",
    imgclass: "scale-[0.6]  hover:scale-90 transform transition-transform duration-500"
  },
  {
    id: 11,
    name: "Kawasaki Ninja 650",
    image: sbike4,
    desc: "The Kawasaki Ninja 650 is a versatile sports bike that offers a perfect balance of performance and comfort. It is powered by a 649cc parallel-twin engine that delivers 67.3 bhp and 64 Nm of torque. The bike features a sleek and aerodynamic design with twin LED headlights, a full fairing, and a TFT color display. Safety features like dual-channel ABS and disc brakes ensure a secure ride. The Ninja 650 also comes with a comfortable seat, adjustable windscreen, and tubeless tires, making it suitable for both city commuting and long rides.",
    rates: ["1 Hour : ₹15", "1 Day : ₹300", "1 Week : ₹2000", "1 Month : ₹7500"],
    topclass: "flex h-[520px] bg-[#3674B5] text-white",
    imgclass: "scale-100 mt-12 hover:scale-125 transform transition-transform duration-500"
  },
  {
    id: 12,
    name: "Ducati Monster 821",
    image: sbike5,
    desc: "The Ducati Monster 821 is a powerful and iconic naked bike, designed to offer an exhilarating riding experience. Powered by an 821cc Testastretta 11° L-twin engine, it delivers 109 bhp and 86 Nm of torque, providing a thrilling and responsive ride. The bike features a muscular and aggressive design with a trellis frame, LED headlamps, and a digital instrument cluster. Advanced features like riding modes, traction control, and cornering ABS enhance the riding experience. The Monster 821 also offers a comfortable riding position and excellent handling, making it a top choice for enthusiasts.",
    rates: ["1 Hour : ₹15", "1 Day : ₹300", "1 Week : ₹2000", "1 Month : ₹7500"],
    topclass: "flex h-[520px] bg-[#A1E3F9] text-[#1A1A1A]",
    imgclass: "ml-24 mt-10 scale-110 hover:scale-125 transform transition-transform duration-500"
  }
];

export const SportsBike = () => {
  const navigate = useNavigate();

  return (
    <>
      {sbikes.map((bike, index) => (
        <motion.div
          key={bike.id}
          className={bike.topclass}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {index % 2 === 0 ? (
            <>
              <motion.div className="w-2/4" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                <img src={bike.image} alt={bike.name} className={bike.imgclass} />
              </motion.div>
              <motion.div className="w-2/4 ml-4" initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                <BikeDetails bike={bike} navigate={navigate} />
              </motion.div>
            </>
          ) : (
            <>
              <motion.div className="w-2/4 ml-4" initial={{ x: -100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                <BikeDetails bike={bike} navigate={navigate} />
              </motion.div>
              <motion.div className="w-2/4" initial={{ x: 100 }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                <img src={bike.image} alt={bike.name} className={bike.imgclass} />
              </motion.div>
            </>
          )}
        </motion.div>
      ))}
    </>
  );
};

const BikeDetails = ({ bike, navigate }) => (
  <>
    <motion.div className="font-bold text-4xl mt-8" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
      {bike.name}
    </motion.div>
    <motion.div className="font-medium text-2xl mt-2" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
      {bike.desc}
    </motion.div>
    <div className="flex items-center justify-center h-[100px]">
      <motion.button className="rounded-xl p-3 px-4 text-3xl font-medium border-gray-600 shadow-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigate("/Booking", { state: { vehicle: bike } })}>
        Book Ride
      </motion.button>
    </div>
  </>
);

export default SportsBike;
