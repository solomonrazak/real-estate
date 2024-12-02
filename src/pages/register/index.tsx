import React, { useState } from "react";
import bg from "../../assets/images/bg.png";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import axios from "axios";
import { useNavigate } from "@tanstack/react-router";
import apiRequest from "../../lib/apiRequest";

const Register: React.FC = () => {
  const navigate = useNavigate({ from: "/register" });
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    const form = e.target as HTMLFormElement;
    const formData = new FormData(form);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");

    console.log(username, email, password);
    try {
      const res = await apiRequest.post("auth/register", {
        username,
        email,
        password,
      });
      navigate({ to: "/login" });
      // console.log(res.data);
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message); // Safely access response data
      } else {
        setError("An unexpected error occurred.");
      }
      console.error(err);
    }
    finally{
      setIsLoading(false);
    }
  };
  return (
    <div className="flex h-full overflow-y-hidden">
      <div className="w-full md:w-[60%] flex flex-col items-center pt-[50%] md:pt-[5rem] lg:pt-[8rem] xl:pt-[13rem] overflow-y-hidden">
        <p className="mb-7 font-bold text-[20px]">Create an Account</p>

        <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
          <Input name="username" required type="text" placeholder="Username" />
          <Input name="email" required type="email" placeholder="Email" />
          <Input name="password" required type="password" placeholder="Password" />
          <Button disabled={isLoading} name="Register" type="submit" />
          {error && <span className="text-red-500">{error}</span>}

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
