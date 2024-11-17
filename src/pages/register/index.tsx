import React from "react";
import bg from "../../assets/images/bg.png";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";

const Register: React.FC = () => {
  return (
    <div className="flex h-full overflow-y-hidden">
      <div className="w-full md:w-[60%] flex flex-col items-center pt-[50%] md:pt-[5rem] lg:pt-[8rem] xl:pt-[13rem] overflow-y-hidden">
        <p className="mb-7 font-bold text-[20px]">Create an Account</p>
        <form className="flex flex-col space-y-5">
          <Input type="text" placeholder="Username" />
          <Input type="text" placeholder="Email" />
          <Input type="text" placeholder="Password" />
          <Button name="Register"/>
          
          <p className="underline">Do you have an acccount?</p>
        </form>
      </div>
      <div className="hidden w-[40%] bg-[#fcf5f3] h-full relative md:flex items-center">
        <img src={bg} alt="bg" className="absolute right-0" />
      </div>
    </div>
  );
};

export default Register;
