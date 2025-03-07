import React from "react";
import { useLocation } from "react-router-dom";

export const Payment = () => {
  const location = useLocation();
  const formData = location.state?.formData;
  const vehicle = location.state?.vehicle;
  const k =
    " " + formData.rentalType.slice(0, formData.rentalType.indexOf(" "));
  let rates, value;
  if (vehicle.id < 5) rates = [15, 300, 2000, 7500];
  else if (vehicle.id > 4 && vehicle.id < 9) rates = [20, 400, 2600, 9800];
  if (vehicle.id > 8) rates = [30, 600, 4000, 14000];
  switch (formData.rentalType) {
    case "Hour Rental":
      value = rates[0];
      break;
    case "Day Rental":
      value = rates[1];
      break;
    case "Week Rental":
      value = rates[2];
      break;
    case "Month Rental":
      value = rates[3];
      break;
    default:
      break;
  }
  const amount = formData.days * value;
  return (
    <>
      <div className="flex h-screen pt-36 bg-[#A1E3F9] text-black">
        <div className="w-[30%]">
          <div className={vehicle.imgclass}>
            <img src={vehicle.image} alt={vehicle.name} />
          </div>
        </div>
        <div className="w-[60%] pl-12 flex  ">
          <div className="w-2/3 shadow-2xl p-8 hover:scale-125 transform transition-transform duration-500 h-fit rounded-3xl bg-[#3674B5] text-white">
            <div className="text-4xl font-bold flex justify-center ">
              Booking Succesfull
            </div>
            <div className="font-medium text-3xl mt-4">
              Customer Name: {formData.name}
            </div>
            <div className="font-medium text-3xl mt-4">
              Vehicle Name: {vehicle.name}
            </div>
            <div className="font-medium text-3xl mt-4">
              Rental Type: {formData.rentalType}
            </div>
            <div className="font-medium text-3xl mt-4">
              Duration : {formData.days}
              {k}
            </div>
            <div className="font-medium text-3xl mt-4">
              Total Amount: {amount}
            </div>
            <div className="font-medium text-3xl mt-4">
              Pick Up Date : {formData.pickUpDate}
            </div>
            <div className="font-bold text-3xl mt-4 ">
              Thank you For Choosing Us
            </div>
          </div>
          <div className="w-[50%] pl-20">
            <div className="font-medium text-2xl mt-4 ">
              You can pick up the vehicle at our office. The further procedures
              (payment and document verification) will be completed on-site.
            </div>
            <div className="font-medium text-2xl pt-4">
              Drive safe and wear a helmet because your safety matters. Note: We
              don't provide you a helmet, so kindly bring yours.
            </div>
            <div className="font-medium text-2xl pt-4">
              "Heads up, helmets on. Safe driving starts with you."
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Payment;
