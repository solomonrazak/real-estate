import React from 'react';
import profile from "../../assets/images/profile.jpg";

import List from '../../components/list/List';

const Profile:React.FC = () => {

  return (
    <div className="w-full flex gap-7">
        <div className="w-[60%]">
            <div className='flex justify-between'>
                <p>User Information</p>
                <button className="px-3 py-1 bg-yellow-500">Update Profile</button>
            </div>
            <div className="space-y-2">
                <div className="flex gap-3">
                    <p>Avatar:</p>
                    <img src={profile} width={30} height={30} className="object-cover rounded-full w-6 h-6"/>
                </div>
                <p className="flex gap-2 items-center">
                    <span className="text-[15px]">Username:</span>
                    <span className="text-[15px] font-medium">Solomon Razak</span>
                </p>
                <p  className="flex gap-2 items-center">
                    <span className="text-[15px]">Email:</span>
                    <span className="text-[15px] font-medium">Solomonrazak99@gmail.com</span>
                </p>
            </div>

            <div className="flex justify-between mt-7">
                <p>My List</p>
                <button className="bg-yellow-500 px-3 py-1">Add New Post</button>
            </div>
           <div>
            <List />
           </div>

        </div>


        <div className="w-[40%]"></div>
    </div>
  )
}

export default Profile