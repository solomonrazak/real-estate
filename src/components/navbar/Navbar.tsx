import React, {useState} from 'react';
import reallogo from "../../assets/images/reallogo.png";
import hamburger from "../../assets/images/hamburger.png";



const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="flex justify-between h-[100px] items-center">
        <div className="flex items-center gap-10 w-[60%] ">
          <a href="/" className="flex items-center hover:scale-110 transition-all duration-200 group">
          <img src={reallogo} width={90} height={70} alt="logo"/>
          <span className="md:hidden lg:block">Zack Estates</span>
          </a>
          <ul className="hidden md:flex items-center gap-14">
            <li className="hover:scale-110 transition-all duration-200">Home</li>
            <li className="hover:scale-110 transition-all duration-200">About</li>
            <li className="hover:scale-110 transition-all duration-200">Contact</li>
            <li className="hover:scale-110 transition-all duration-200">Agent</li>
          </ul>
        </div>
        <div className="w-[40%] bg-[#fcf5f3] h-full md:flex items-center justify-end p-2">
          <ul className="hidden md:flex items-center justify-end gap-4 space-x-10">
            <li className="hover:scale-110 transition-all duration-200">Sign In</li>
            <li className="bg-[#fece51] p-2 hover:scale-110 transition-all duration-200">Sign Up</li>
          </ul>
          <div className="flex items-center h-[inherit] justify-end z-50" onClick={() => setOpen((prev) => !prev)}>
        <img src={hamburger} width={30} height={30} alt="menu" className="md:hidden"/>
        </div>
        <div className={`absolute md:hidden h-full w-[50%] bg-black text-white right-[50%] top-0 ${open ? "right-0": "right-[100%]"}`}>
          <ul className="h-full flex flex-col gap-10 justify-center items-center">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Agent</li>
            <li>Sign In</li>
            <li>Sign Up</li>
          </ul>
        </div>
        </div>
        
        
        
    </nav>
  )
}

export default Navbar