import React, { useState } from "react";
import bg from "../../assets/images/bg.png";
import Input from "../../components/ui/Input";
import Button from "../../components/ui/Button";
import axios from "axios";
import apiRequest from "../../lib/apiRequest";
import { Link } from "@tanstack/react-router";
import { useNavigate } from "@tanstack/react-router";

const Login: React.FC = () => {
  const navigate = useNavigate({from: "/login"})
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);
    const formData = new FormData();
    const username = formData.get("username");
    const password = formData.get("password");

    console.log(username, password);

    try {
        const res = await apiRequest.post("/auth/login", {
            username,
            password
        })
        // using local storage to save user data
        localStorage.setItem("user", JSON.stringify(res.data))
        navigate({to: "/"})
    } catch (err) {
      if (axios.isAxiosError(err) && err.response) {
        setError(err.response.data.message); // Safely access response data
      } else {
        setError("An unexpected error occurred.");
      }
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-full overflow-y-hidden">
      <div className="w-full md:w-[60%] flex flex-col items-center pt-[50%] md:pt-[5rem] lg:pt-[8rem] xl:pt-[13rem] overflow-y-hidden">
        <p className="mb-7 font-bold text-[20px]">Welcome Back</p>

        <form className="flex flex-col space-y-5" onSubmit={handleSubmit}>
          <Input name="username" required type="text" placeholder="Username" />
          <Input name="password" required type="password" placeholder="Password" />
          <Button disabled={isLoading} name="Login" type="submit" />
          {error && <span>{error}</span>}

          <Link to="/about"><p className="underline">Don't have an acccount?</p></Link>
        </form>
      </div>
      <div className="hidden w-[40%] bg-[#fcf5f3] h-full relative md:flex items-center">
        <img src={bg} alt="bg" className="absolute right-0" />
      </div>
    </div>
  );
};

export default Login;
