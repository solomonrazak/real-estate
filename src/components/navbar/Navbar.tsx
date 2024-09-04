import React from 'react';
import reallogo from "../../assets/images/reallogo.png";



const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between h-[100px] items-center">
        <div className="flex items-center gap-10 w-[60%]">
          <a href="/" className="flex items-center">
          <img src={reallogo} width={90} height={70} alt="logo"/>
          <span>Zack Estates</span>
          </a>
          <ul className="flex items-center gap-14">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Agent</li>
          </ul>
        </div>
        <div className="w-[40%] bg-[#fcf5f3] h-full flex items-center justify-end p-2">
          <ul className="flex items-center justify-end gap-4 space-x-10">
            <li>Sign In</li>
            <li className="bg-[#fece51] p-2">Sign Up</li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar