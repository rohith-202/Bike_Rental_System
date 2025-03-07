import React from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../img/logo.png';

const Navigations = [
  {
    id: "1",
    name: "Home",
    link: "/#Home",
  },
  {
    id: "2",
    name: "Bike",
    link: "/Bike",
  },
  {
    id: "3",
    name: "Services",
    link: "/#Services",
  },
  {
    id: "4",
    name: "Contact",
    link: "/#Contact",
  },
];

export const Navbar = () => {
  const navigate = useNavigate();

  const handleNavigation = (link) => {
    navigate(link);
    const sectionId = link.split("#")[1];
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <nav className='shadow-xl flex justify-center bg-[#3674B5] sticky top-0 z-50'>
        <div className="container">
          <div className="flex justify-between items-center">
            <div className='flex items-center grid-cols-2 gap-0'>
              <span className='text-3xl font-bold font-serif text-white '>Shelby's <br /> Garage</span>
              <img src={logo} alt="logo" className='ml-2 bg-white rounded-[20rem] scale-75' />
            </div>
            <div className='hidden md:block'>
              <ul className='flex items-center gap-8'>
                {Navigations.map((info) => (
                  <li key={info.id}>
                    <button
                      className='inline-block hover:border-b-2 text-white hover:text-white hover:border-white transition-colors duration-300 text-lg font-medium'
                      onClick={() => handleNavigation(info.link)}
                    >
                      {info.name}
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            <div className='hidden md:block text-lg font-medium'>
              <div className='flex items-center gap-2'>
                <button className='hover:border-b-2 hover:text-white hover:border-white text-white transition-colors duration-300'
                onClick={()=>navigate("/LoginPage")}>
                  Sign In
                </button>
                <button className='hover:text-[#000080] transition-colors duration-300 rounded-xl  p-2 m-0 bg-[#A1E3F9] text-[#1a518b] px-5 hover:shadow-lg' onClick={()=>{
                  navigate("/LoginPage",{state:{Register : true}})}}>
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
