import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import scooter2 from "./MainImage/scooter2.png";
import scooter3 from "./MainImage/scooter3.png";
import scooter4 from "./MainImage/scooter4.png";
import scooter5 from "./MainImage/scooter5.png";

const scooters = [
  {
    id: 1,
    name: "TVS Jupiter 125",
    image: scooter2,
    desc: "The TVS Jupiter 125 is a premium scooter designed to offer a perfect blend of performance, comfort, and convenience. Powered by a refined 124.8cc BS6 engine, it delivers a smooth and efficient ride with a power output of 8.04 bhp and a torque of 10.5 Nm2. The scooter features a spacious 33-liter under-seat storage, the largest in its segment, and an external fuel filler for added convenience. With advanced safety features like Synchronized Braking Technology (SBT) and LED headlamps, the TVS Jupiter 125 ensures a safe and enjoyable ride1. Its stylish design, combined with practical features like a digital-analog speedometer and USB charging port, makes it an ideal choice for urban commuters2.",
    rates: ["1 Hour : ₹15", "1 Day : ₹300", "1 Week : ₹2000", "1 Month : ₹7500"],
    topclass: "flex h-[500px] bg-[#3674B5]  text-white",
    imgclass: "scale-100 mt-4 hover:scale-110 transform transition-transform duration-500"
  },
  {
    id: 2,
    name: "Honda Dio 110",
    image: scooter3,
    desc: "The Honda Dio 110 is a stylish and reliable scooter, perfect forthose seeking a blend of performance, comfort, and convenience. Powered by a refined 109.51cc BS6 engine, it provides a smooth and efficient ride with a power output of 7.68 bhp and a torque of 9 Nm.The scooter features a spacious under-seat storage, allowing riders to conveniently carry their essentials, along with an external fuel filler for added convenience. With advanced safety features like Combined Braking System (CBS) and LED headlamps, the Honda Dio 110 ensures a safe and enjoyable ride. Its modern design is complemented by practical features like a digital instrument cluster, tubeless tires, and a mobile charging port, making it an ideal choice for urban commuters.",
    rates: ["1 Hour : ₹15", "1 Day : ₹300", "1 Week : ₹2000", "1 Month : ₹7500"],
    topclass: "flex h-[520px] bg-[#A1E3F9] text-[#1A1A1A]",
    imgclass: "ml-32 scale-75 hover:scale-100 transform transition-transform duration-500"
  },
  {
    id: 3,
    name: "Honda Activa 125",
    image: scooter4,
    desc: "The Honda Activa 125 is a premium scooter designed to offer a perfect blend of performance, comfort, and convenience. Powered by a refined 124cc BS6 engine, it delivers a smooth and efficient ride with a power output of 8.19 bhp and a torque of 10.4 Nm. The scooter features a spacious under-seat storage, allowing riders to conveniently carry their essentials, along with an external fuel filler for added convenience. With advanced safety features like Combined Braking System (CBS) and LED headlamps, the Honda Activa 125 ensures a safe and enjoyable ride. Its stylish design is complemented by practical features like a digital instrument cluster, tubeless tires, and a mobile charging port, making it an ideal choice for urban commuters2",
    rates: ["1 Hour : ₹15", "1 Day : ₹300", "1 Week : ₹2000", "1 Month : ₹7500"],
    topclass: "flex h-[520px] bg-[#3674B5] text-white",
    imgclass: "mt-10 ml-6 hover:scale-125 transform transition-transform duration-500"
  },
  {
    id: 4,
    name: "TVS Zest 110",
    image: scooter5,
    desc: "The TVS Zest 110 is a stylish and lightweight scooter, perfect for those seeking a blend of performance, comfort, and convenience. Powered by a refined 109.7cc BS6 engine, it provides a smooth and efficient ride with a power output of 7.71 bhp and a torque of 8.8 Nm. The scooter features a spacious 19-liter under-seat storage, allowing riders to conveniently carry their essentials, along with an external fuel filler for added convenience4. With advanced safety features like Synchronized Braking Technology (SBT) and LED tail lamps, the TVS Zest 110 ensures a safe and enjoyable ride. Its modern design is complemented by practical features like a digital-analog speedometer, tubeless tires, and a USB charging port, making it an ideal choice for urban commuters4.",
    rates: ["1 Hour : ₹15", "1 Day : ₹300", "1 Week : ₹2000", "1 Month : ₹7500"],
    topclass: "flex h-[520px] bg-[#A1E3F9] text-[#1A1A1A]",
    imgclass: "ml-24 mt-14 scale-100 hover:scale-125 transform transition-transform duration-500"
  }
];

export const Scooter = () => {
  const navigate = useNavigate();

  return (
    <>
      {scooters.map((scooter, index) => (
        <motion.div
          key={scooter.id}
          className={scooter.topclass}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {index % 2 === 0 ? (
            <>
              <motion.div 
                className="w-2/4"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img src={scooter.image} alt={scooter.name} className={scooter.imgclass} />
              </motion.div>
              <motion.div className="w-2/4 ml-4">
                <ScooterDetails scooter={scooter} navigate={navigate} />
              </motion.div>
            </>
          ) : (
            <>
              <motion.div className="w-2/4 ml-4">
                <ScooterDetails scooter={scooter} navigate={navigate} />
              </motion.div>
              <motion.div 
                className="w-2/4"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <img src={scooter.image} alt={scooter.name} className={scooter.imgclass} />
              </motion.div>
            </>
          )}
        </motion.div>
      ))}
    </>
  );
};

const ScooterDetails = ({ scooter, navigate }) => (
  <>
    <motion.div className="font-bold text-4xl mt-8" initial={{ opacity: 0, y: -30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.3 }}>
      {scooter.name}
    </motion.div>
    <motion.div className="font-medium text-1.5xl mt-2" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, delay: 0.5 }}>
      {scooter.desc}
    </motion.div>
    <div className="flex items-center justify-center h-[80px]">
      <motion.button className="transition-colors duration-300 rounded-xl p-3 px-4 text-3xl font-medium border-gray-600 shadow-lg" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => navigate("/Booking", { state: { vehicle: scooter } })}>
        Book Ride
      </motion.button>
    </div>
  </>
);

export default Scooter;