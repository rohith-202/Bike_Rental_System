import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export const Booking = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const vehicle = location.state?.vehicle;

  const [formData, setFormData] = useState({
    name: "",
    mobile: "",
    email: "",
    age: "",
    rentalType: "",
    days: "",
    license: "",
    pickUpDate: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!/^\d{10}$/.test(formData.mobile))
      newErrors.mobile = "Enter a valid 10-digit mobile number";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Enter a valid email";
    if (!formData.age || formData.age < 18)
      newErrors.age = "Age must be at least 18";
    if (!formData.rentalType) newErrors.rentalType = "Select a rental type";
    if (!formData.license.match(/^[A-Z]{2}[0-9]{2} [0-9]{4} [0-9]{7}$/))
      newErrors.license =
        "Enter a valid license number (e.g., AB12 3456 7890123)";

    const days = parseInt(formData.days);
    if (!days || days <= 0) {
      newErrors.days = "Enter a valid number of days";
    } else {
      switch (formData.rentalType) {
        case "Hour Rental":
          if (days > 24)
            newErrors.days = "For hourly rental, must be less than 24 hours";
          break;
        case "Day Rental":
          if (days > 31)
            newErrors.days = "For daily rental, must be less than ≤ 31 days";
          break;
        case "Week Rental":
          if (days > 4)
            newErrors.days = "For weekly rental, must be less than ≤ 4 weeks";
          break;
        case "Month Rental":
          if (days > 12)
            newErrors.days =
              "For monthly rental, must be less than ≤ 12 months";
          break;
        default:
          break;
      }
    }

    const today = new Date();
    const pickUpDate = new Date(formData.pickUpDate);
    if (!formData.pickUpDate || pickUpDate <= today) {
      newErrors.pickUpDate = "Pick-up date must be in the future";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      navigate("/Payment", { state: { formData, vehicle } });
    }
  };

  return (
    <>
      <div className="flex items-center justify-center h-[550px] bg-[#A1E3F9] shadow-lg rounded-lg  ">
        <div className="w-1/2 flex justify-center">
          <img
            src={vehicle.image}
            alt={vehicle.name}
            className={`${vehicle.imgclass} object-cover `}
          />
        </div>
        <div className="w-1/2 flex flex-col items-center text-center">
          <h1 className="text-6xl font-bold text-gray-800 drop-shadow-md">
            {vehicle.name}
          </h1>
          <div className="text-3xl font-semibold mt-4 text-gray-700">
            Rental Rate
          </div>
          <div className="mt-4">
            {vehicle.rates.map((rate, i) => (
              <div
                key={i}
                className="text-2xl font-medium text-gray-600 bg-white p-2 rounded-md shadow-md mt-2"
              >
                {rate}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="">
        <div className="shadow-xl rounded-md p-8 bg-[#3674B5]">
          <div className="text-3xl font-bold text-white">Customer Details</div>
          <form
            className="pt-5 text-xl font-semibold flex bg-[#3674B5] p-6 rounded-lg text-black"
            onSubmit={handleSubmit}
          >
            <table className="min-w-full">
              <tbody>
                <tr className="text-white font-bold">
                  <td className="pb-2">Name:</td>
                  <td className="pb-2">Mobile Number:</td>
                  <td className="pb-2">Email Address:</td>
                </tr>
                <tr className="h-20 font-semibold text-2xl">
                  <td>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="h-12 w-72 border-2 border-[#3674B5] rounded-md p-3 text-lg focus:ring-2 focus:ring-[#3674B5] focus:border-[#265a8b] transition duration-200"
                    />
                    <p className="text-orange-300 text-lg">{errors.name}</p>
                  </td>
                  <td>
                    <input
                      type="number"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      className="h-12 w-72 border-2 border-[#3674B5] rounded-md p-3 text-lg focus:ring-2 focus:ring-[#3674B5] focus:border-[#265a8b] transition duration-200"
                    />
                    <p className="text-orange-300 text-lg">{errors.mobile}</p>
                  </td>
                  <td>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="h-12 w-64 border-2 border-[#3674B5] rounded-md p-3 text-lg focus:ring-2 focus:ring-[#3674B5] focus:border-[#265a8b] transition duration-200"
                    />
                    <p className="text-orange-300 text-lg">{errors.email}</p>
                  </td>
                </tr>

                {/* Age, Rental Type, No. of Days */}
                <tr className="text-white font-bold">
                  <td className="pb-2">Age:</td>
                  <td className="pb-2">Rental Type:</td>
                  <td className="pb-2">Duration:</td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="number"
                      name="age"
                      value={formData.age}
                      onChange={handleChange}
                      className="h-12 w-72 border-2 border-[#3674B5] rounded-md p-3 text-lg focus:ring-2 focus:ring-[#3674B5] focus:border-[#265a8b] transition duration-200"
                    />
                    <p className="text-orange-300 text-lg">{errors.age}</p>
                  </td>
                  <td>
                    <select
                      name="rentalType"
                      value={formData.rentalType}
                      onChange={handleChange}
                      className="h-12 w-44 border-2 border-[#3674B5] rounded-md p-3 text-lg focus:ring-2 focus:ring-[#3674B5] focus:border-[#265a8b] transition duration-200"
                    >
                      <option value="">Select Rental Type</option>
                      <option value="Hour Rental">Hour Rental</option>
                      <option value="Day Rental">Day Rental</option>
                      <option value="Week Rental">Week Rental</option>
                      <option value="Month Rental">Month Rental</option>
                    </select>
                    <p className="text-orange-300 text-lg">{errors.rentalType}</p>
                  </td>
                  <td>
                    <input
                      type="number"
                      name="days"
                      value={formData.days}
                      onChange={handleChange}
                      className="h-12 w-72 border-2 border-[#3674B5] rounded-md p-3 text-lg focus:ring-2 focus:ring-[#3674B5] focus:border-[#265a8b] transition duration-200"
                    />
                    <p className="text-orange-300 text-lg">{errors.days}</p>
                  </td>
                </tr>
                <tr className="text-white font-bold">
                  <td className="pb-2">License Number:</td>
                  <td className="pb-2">Pick Up Date:</td>
                </tr>
                <tr>
                  <td>
                    <input
                      type="text"
                      name="license"
                      value={formData.license}
                      onChange={handleChange}
                      className="h-12 w-72 border-2 border-[#3674B5] rounded-md p-3 text-lg focus:ring-2 focus:ring-[#3674B5] focus:border-[#265a8b] transition duration-200"
                    />
                    <p className="text-orange-300 text-lg">{errors.license}</p>
                  </td>
                  <td>
                    <input
                      type="date"
                      name="pickUpDate"
                      value={formData.pickUpDate}
                      onChange={handleChange}
                      className="h-12 w-72 border-2 border-[#3674B5] rounded-md p-3 text-lg focus:ring-2 focus:ring-[#3674B5] focus:border-[#265a8b] transition duration-200"
                    />
                    <p className="text-orange-300 text-lg">{errors.pickUpDate}</p>
                  </td>
                  <td>
                    <button
                      type="submit"
                      className=" text-white hover:text-[#1a1a1a] hover:bg-[#A1E3F9] font-bold py-3  transition-colors duration-300 rounded-xl p-3 px-4 text-2xl border-gray-600 shadow-lg shadow-gray-700 "
                    >
                      Confirm Booking
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </form>
        </div>
      </div>
    </>
  );
};

export default Booking;
