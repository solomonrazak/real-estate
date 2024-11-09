import React from "react";
import bg from "../../assets/images/bg.png";

const Register: React.FC = () => {
  return (
    <div className="flex h-full overflow-y-hidden">
      <div className="w-full md:w-[60%] flex flex-col items-center pt-[50%] md:pt-[5rem] lg:pt-[8rem] xl:pt-[13rem] overflow-y-hidden">
        <p className="mb-7 font-bold text-[20px]">Create an Account</p>
        <form className="flex flex-col space-y-5">
          <input
            type="text"
            className="border-[1.5px] border-slate-500 w-[220px] py-2 rounded-md pl-5"
            placeholder="Username"
          />
          <input
            type="text"
            className="border-[1.5px] border-slate-500 w-[220px] py-2 rounded-md pl-5"
            placeholder="Email"
          />
          <input
            type="text"
            className="border-[1.5px] border-slate-500 w-[220px] py-2 rounded-md pl-5"
            placeholder="Password"
          />
          <button></button>
        </form>
      </div>
      <div className="hidden w-[40%] bg-[#fcf5f3] h-full relative md:flex items-center">
        <img src={bg} alt="bg" className="absolute right-0" />
      </div>
    </div>
  );
};

export default Register;
