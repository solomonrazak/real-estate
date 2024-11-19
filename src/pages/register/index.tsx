import React, { useState } from "react";
import bg from "../../assets/images/bg.png";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import axios from "axios";

const Register: React.FC = () => {
  const [error, setError] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(username, email, password);
    try {
      const res = await axios.post("http://localhost:8005/api/auth/register", {
        username,
        email,
        password,
      });
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex h-full overflow-y-hidden">
      <div className="w-full md:w-[60%] flex flex-col items-center pt-[50%] md:pt-[5rem] lg:pt-[8rem] xl:pt-[13rem] overflow-y-hidden">
        <p className="mb-7 font-bold text-[20px]">Create an Account</p>

        <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
          <Input name="username" type="text" placeholder="Username" />
          <Input name="email" type="email" placeholder="Email" />
          <Input name="password" type="password" placeholder="Password" />
          <Button name="Register" type="submit" />

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
