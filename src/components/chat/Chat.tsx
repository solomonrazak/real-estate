import React, { useState } from "react";
import profile from "../../assets/images/profile.jpg";
import "../../pages/list/list.css";

const Chat: React.FC = () => {
  const [chat, setChat] = useState<boolean | null>(true);
  return (
    <div className="h-full">
      <div className="h-[50%] overflow-y-scroll hide-scrollbar">
        <p className="mb-5 text-[20px] mt-6 lg:mt-0">Messages</p>
        <div className="flex flex-col gap-3">
          <div className="flex bg-white p-3 gap-3">
            <img
              src={profile}
              width={30}
              height={30}
              className="w-7 h-7 object-cover rounded-full"
              alt=""
            />
            <p className="text-[15px] font-medium">Solomon Razak</p>
            <p className="text-[15px]">This is a new message</p>
          </div>
          <div className="flex bg-white p-3 gap-3">
            <img
              src={profile}
              width={30}
              height={30}
              className="w-7 h-7 object-cover rounded-full"
              alt=""
            />
            <p className="text-[15px] font-medium">Solomon Razak</p>
            <p className="text-[15px]">This is a new message</p>
          </div>
          <div className="flex bg-white p-3 gap-3">
            <img
              src={profile}
              width={30}
              height={30}
              className="w-7 h-7 object-cover rounded-full"
              alt=""
            />
            <p className="text-[15px] font-medium">Solomon Razak</p>
            <p className="text-[15px]">This is a new message</p>
          </div>
          <div className="flex bg-white p-3 gap-3">
            <img
              src={profile}
              width={30}
              height={30}
              className="w-7 h-7 object-cover rounded-full"
              alt=""
            />
            <p className="text-[15px] font-medium">Solomon Razak</p>
            <p className="text-[15px]">This is a new message</p>
          </div>
          <div className="flex bg-white p-3 gap-3">
            <img
              src={profile}
              width={30}
              height={30}
              className="w-7 h-7 object-cover rounded-full"
              alt=""
            />
            <p className="text-[15px] font-medium">Solomon Razak</p>
            <p className="text-[15px]">This is a new message</p>
          </div>
          <div className="flex bg-white p-3 gap-3">
            <img
              src={profile}
              width={30}
              height={30}
              className="w-7 h-7 object-cover rounded-full"
              alt=""
            />
            <p className="text-[15px] font-medium">Solomon Razak</p>
            <p className="text-[15px]">This is a new message</p>
          </div>
          <div className="flex bg-white p-3 gap-3">
            <img
              src={profile}
              width={30}
              height={30}
              className="w-7 h-7 object-cover rounded-full"
              alt=""
            />
            <p className="text-[15px] font-medium">Solomon Razak</p>
            <p className="text-[15px]">This is a new message</p>
          </div>
          <div className="flex bg-white p-3 gap-3">
            <img
              src={profile}
              width={30}
              height={30}
              className="w-7 h-7 object-cover rounded-full"
              alt=""
            />
            <p className="text-[15px] font-medium">Solomon Razak</p>
            <p className="text-[15px]">This is a new message</p>
          </div>
          <div className="flex bg-white p-3 gap-3">
            <img
              src={profile}
              width={30}
              height={30}
              className="w-7 h-7 object-cover rounded-full"
              alt=""
            />
            <p className="text-[15px] font-medium">Solomon Razak</p>
            <p className="text-[15px]">This is a new message</p>
          </div>
          <div className="flex bg-white p-3 gap-3">
            <img
              src={profile}
              width={30}
              height={30}
              className="w-7 h-7 object-cover rounded-full"
              alt=""
            />
            <p className="text-[15px] font-medium">Solomon Razak</p>
            <p className="text-[15px]">This is a new message</p>
          </div>
          <div className="flex bg-white p-3 gap-3">
            <img
              src={profile}
              width={30}
              height={30}
              className="w-7 h-7 object-cover rounded-full"
              alt=""
            />
            <p className="text-[15px] font-medium">Solomon Razak</p>
            <p className="text-[15px]">This is a new message</p>
          </div>
          <div className="flex bg-white p-3 gap-3">
            <img
              src={profile}
              width={30}
              height={30}
              className="w-7 h-7 object-cover rounded-full"
              alt=""
            />
            <p className="text-[15px] font-medium">Solomon Razak</p>
            <p className="text-[15px]">This is a new message</p>
          </div>
        </div>
      </div>

      {chat && (
        <div className="flex flex-col bg-white justify-between h-[50%]">
          <div className="bg-yellow-400 flex justify-between px-4 py-4 items-center">
            <div className="flex items-center gap-4">
              <img
                src={profile}
                width={30}
                height={30}
                className="h-8 w-8 object-cover rounded-full"
                alt=""
              />
              <p className="font-medium">Solomon Razak</p>
            </div>
            <span className="text-[19px] font-medium cursor-pointer" onClick={() => setChat(null)}>X</span>
          </div>
          <div className="flex flex-col gap-3 overflow-y-scroll md:h-[350px] lg:h-[400px] px-3 hide-scrollbar">
            <div className="">
              <p>This is a random message now </p>
              <span>1 hour ago</span>
            </div>
            <div className="text-end">
              <p>This is a random message now </p>
              <span>1 hour ago</span>
            </div>
            <div>
              <p>This is a random message now </p>
              <span>1 hour ago</span>
            </div>
            <div className="text-end">
              <p>This is a random message now </p>
              <span>1 hour ago</span>
            </div>
            <div>
              <p>This is a random message now </p>
              <span>1 hour ago</span>
            </div>
            <div className="text-end">
              <p>This is a random message now </p>
              <span>1 hour ago</span>
            </div>
            <div>
              <p>This is a random message now </p>
              <span>1 hour ago</span>
            </div>
            <div className="text-end">
              <p>This is a random message now </p>
              <span>1 hour ago</span>
            </div>
          </div>
          <div className="flex border border-t-yellow-400 justify-between">
            <textarea className="w-[85%] px-3 py-1 focus:outline-none"></textarea>
            <button className="bg-yellow-400 px-4 font-medium">Send</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Chat;
