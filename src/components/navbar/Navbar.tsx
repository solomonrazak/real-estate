import React from 'react'



const Navbar: React.FC = () => {
  return (
    <nav className="flex justify-between h-[100px] items-center">
        <div className="flex w-[60%]">
          <a href="/" className="flex">
          <img src="/logo.png" alt="logo"/>
          <span>Zack Estates</span>
          </a>
          <ul className="flex">
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
            <li>Agent</li>
          </ul>
        </div>
        <div className="w-[40%]">
          <ul className="flex">
            <li>Sign In</li>
            <li>Sign Up</li>
          </ul>
        </div>
    </nav>
  )
}

export default Navbar