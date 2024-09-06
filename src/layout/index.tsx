import React from 'react';
import Navbar from '../components/navbar/Navbar';
import { Outlet } from 'react-router-dom';


const Layout: React.FC = () => {
  return (
    <div className="h-screen max-w-[640px] lg:max-w-[1280px] md:max-w-[768px] mx-auto px-8 flex flex-col">
        <div>
            <Navbar />
        </div>
        <div className="flex-grow h-full min-h-full">
            <Outlet />

        </div>

    </div>
  )
}

export default Layout;