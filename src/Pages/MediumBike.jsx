
import React from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion"; 
import bike2 from "./MainImage/bike2.png";
import bike3 from "./MainImage/bike3.png";
import bike4 from "./MainImage/bike4.png";
import bike5 from "./MainImage/bike5.png";

const mbikes = [
  {
    id: 5,
    name: "Hero Splendor 110",
    image: bike2,
    desc: "The Hero Splendor 110 is a reliable and efficient commuter bike, designed to offer a perfect blend of performance, comfort, and convenience. Powered by a refined 113.2cc BS6 engine, it delivers a smooth and efficient ride with a power output of 9.15 bhp and a torque of 9.89 Nm. The bike features a spacious under-seat storage, allowing riders to conveniently carry their essentials. With advanced safety features like Integrated Braking System (IBS) and halogen headlamps, the Hero Splendor 110 ensures a safe and enjoyable ride. Its stylish design, combined with practical features like an analog-digital instrument console and tubeless tires, makes it an ideal choice for urban commuters.",
    rates: ["1 Hour : ₹15", "1 Day : ₹300", "1 Week : ₹2000", "1 Month : ₹7500"],
    topclass: "flex h-[500px] bg-[#3674B5] text-white",
    imgclass: "scale-75 pl-8 hover:scale-90 transform transition-transform duration-500"
  },
  {
    id: 6,
    name: "Hero Passion Pro",
    image: bike3,
    desc: "The Hero Passion Pro is a stylish and efficient commuter bike, designed to offer a perfect blend of performance, comfort, and convenience. Powered by a refined 110cc BS6 engine, it delivers a smooth and efficient ride with a power output of 9.15 bhp and a torque of 9.79 Nm. The bike features a spacious under-seat storage, allowing riders to conveniently carry their essentials. With advanced safety features like Integrated Braking System (IBS) and halogen headlamps, the Hero Passion Pro ensures a safe and enjoyable ride. Its modern design is complemented by practical features like an analog-digital instrument console and tubeless tires, making it an ideal choice for urban commuters.",
    rates: ["1 Hour : ₹15", "1 Day : ₹300", "1 Week : ₹2000", "1 Month : ₹7500"],
    topclass: "flex h-[500px] bg-[#A1E3F9] text-[#1A1A1A]",
    imgclass: "ml-16 mt-20 scale-100 hover:scale-125 transform transition-transform duration-500"
  },
  {
    id: 7,
    name: "Bajaj Platina",
    image: bike4,
    desc: "The Bajaj Platina is a reliable and fuel-efficient commuter bike, designed to offer a perfect blend of performance, comfort, and convenience. Powered by a refined 115.45cc BS6 engine, it delivers a smooth and efficient ride with a power output of 8.6 bhp and a torque of 9.81 Nm. The bike features a spacious under-seat storage, allowing riders to conveniently carry their essentials. With advanced safety features like Combi Brake System (CBS) and LED DRLs, the Bajaj Platina ensures a safe and enjoyable ride. Its stylish design, combined with practical features like an analog instrument console and tubeless tires, makes it an ideal choice for urban commuters.",
    rates: ["1 Hour : ₹15", "1 Day : ₹300", "1 Week : ₹2000", "1 Month : ₹7500"],
    topclass: "flex h-[500px] bg-[#3674B5] text-white",
    imgclass: "scale-75 ml-8 hover:scale-90 transform transition-transform duration-500"
  },
  {
    id: 8,
    name: "Bajaj Pulsar",
    image: bike5,
    desc: "The Bajaj Pulsar is a powerful and stylish sports bike, designed to offer a perfect blend of performance, comfort, and convenience. Powered by a refined 149.5cc BS6 engine, it delivers a smooth and efficient ride with a power output of 14 bhp and a torque of 13.25 Nm. The bike features a spacious under-seat storage, allowing riders to conveniently carry their essentials. With advanced safety features like ABS and LED headlamps, the Bajaj Pulsar ensures a safe and enjoyable ride. Its modern design is complemented by practical features like a fully digital instrument console and tubeless tires, making it an ideal choice for urban commuters.",
    rates: ["1 Hour : ₹15", "1 Day : ₹300", "1 Week : ₹2000", "1 Month : ₹7500"],
    topclass: "flex h-[500px] bg-[#A1E3F9] text-[#1A1A1A]",
    imgclass: "ml-12 mt-14 scale-100 hover:scale-125 transform transition-transform duration-500"
  }
];

export const MediumBike = () => {
  const navigate = useNavigate();

  return (
    <>
      {mbikes.map((bike, index) => (
        <motion.div
          key={bike.id}
          className={bike.topclass}
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
                <img src={bike.image} alt={bike.name} className={bike.imgclass} />
              </motion.div>
              
              <motion.div 
                className="w-2/4 ml-4"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <BikeDetails bike={bike} navigate={navigate} />
              </motion.div>
            </>
          ) : (
            <>
              <motion.div 
                className="w-2/4 ml-4"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
                <BikeDetails bike={bike} navigate={navigate} />
              </motion.div>

              <motion.div 
                className="w-2/4"
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1 }}
              >
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
    <motion.div 
      className="font-bold text-4xl mt-8"
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.3 }}
    >
      {bike.name}
    </motion.div>

    <motion.div 
      className="font-medium text-1.5xl mt-2"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {bike.desc}
    </motion.div>

    <div className="flex items-center justify-center h-[120px]">
      <motion.button
        className={`transition-colors duration-300 rounded-xl p-3 px-4 text-3xl font-medium border-gray-600 shadow-lg shadow-gray-700 ${
          bike.topclass.includes("bg-[#3674B5]")
            ? "text-white hover:text-[#1a1a1a] hover:bg-[#A1E3F9]"
            : "text-[#1a1a1a] hover:text-white hover:bg-[#3674B5]"
        }`}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        onClick={() => navigate("/Booking", { state: { vehicle: bike } })}
      >
        Book Ride
      </motion.button>
    </div>
  </>
);

export default MediumBike;
