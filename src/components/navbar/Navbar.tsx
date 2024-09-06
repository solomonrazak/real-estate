import React, { useState } from 'react';
import reallogo from "../../assets/images/reallogo.png";
import hamburger from "../../assets/images/hamburger.png";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false); // Default state is closed

  return (
    <nav className="flex justify-between h-[100px] items-center relative">
      <div className="flex items-center gap-10 w-[60%]">
        <a href="/" className="flex items-center hover:scale-110 transition-all duration-200 group">
          <img src={reallogo} width={90} height={70} alt="logo" />
          <span className="md:hidden lg:block">Zack Estates</span>
        </a>
        <ul className="hidden md:flex items-center gap-14">
          <li className="hover:scale-110 transition-all duration-200">Home</li>
          <li className="hover:scale-110 transition-all duration-200">About</li>
          <li className="hover:scale-110 transition-all duration-200">Contact</li>
          <li className="hover:scale-110 transition-all duration-200">Agent</li>
        </ul>
      </div>
      <div className="w-[40%] md:bg-[#fcf5f3] h-full md:flex items-center justify-end p-2">
        <ul className="hidden md:flex items-center justify-end gap-4 space-x-10">
          <li className="hover:scale-110 transition-all duration-200">Sign In</li>
          <li className="bg-[#fece51] p-2 hover:scale-110 transition-all duration-200">Sign Up</li>
        </ul>
        <div
          className="flex items-center h-[inherit] justify-end z-50 md:hidden cursor-pointer"
          onClick={() => setOpen((prev) => !prev)}
        >
          <img src={hamburger} width={30} height={30} alt="menu" />
        </div>
      </div>

      {/* Sidebar for Mobile */}
      <div
        className={`fixed md:hidden top-0 right-0 h-full w-[50%] bg-transparent text-white transition-transform duration-300 ease-out ${
          open ? 'translate-x-[100%]' : 'translate-x-[-50%]'
        }`} 
      >
        <ul className="h-full flex flex-col gap-10 justify-center items-center">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Agent</li>
          <li>Sign In</li>
          <li>Sign Up</li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
