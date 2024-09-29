import React from 'react';
import profile from "../../assets/images/profile.jpg";
import List from '../../components/list/List';
import Chat from '../../components/chat/Chat';
import "../list/list.css"

const Profile: React.FC = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row h-full">
      {/* Main content section */}
      <div className="w-full lg:w-[60%] pr-5 overflow-y-scroll hide-scrollbar mt-7 lg:mt-0 min-h-full">
        <div className='flex justify-between'>
          <p className="text-[19px] mb-3">User Information</p>
          <button className="px-3 py-1 bg-yellow-500">Update Profile</button>
        </div>

        {/* User info */}
        <div className="space-y-2">
          <div className="flex gap-3">
            <p>Avatar:</p>
            <img src={profile} width={30} height={30} className="object-cover rounded-full w-6 h-6"/>
          </div>
          <p className="flex gap-2 items-center">
            <span className="text-[15px]">Username:</span>
            <span className="text-[15px] font-medium">Solomon Razak</span>
          </p>
          <p className="flex gap-2 items-center">
            <span className="text-[15px]">Email:</span>
            <span className="text-[15px] font-medium">Solomonrazak99@gmail.com</span>
          </p>
        </div>

        {/* List section */}
        <div className="flex justify-between mt-7">
          <p className="text-[19px] mb-3">My List</p>
          <button className="bg-yellow-500 px-3 py-1">Add New Post</button>
        </div>
        <div>
          <List />
        </div>
        <p className="text-[19px] my-6">Saved List</p>
        <div>
          <List />
        </div>
      </div>

      {/* Chat section */}
      <div className="w-full lg:w-[40%] bg-[#fcf5f3] px-5 mt-5 lg:mt-0">
        <Chat />
      </div>
    </div>
  );
}

export default Profile;
