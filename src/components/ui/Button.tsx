import React from "react";

interface IButtonProps extends  React.ButtonHTMLAttributes<HTMLButtonElement>{
  name: string;
  onClick?: () => void;
  className?: string;
}

const Button: React.FC<IButtonProps> = ({ name, className, type, onClick }) => {
  return (
    <button
      className={`bg-teal-600 py-2 px-4 rounded-md font-medium text-white ${className}`}
      type={type}
      onClick={onClick}
    >
      {name}
    </button>
  );
};

export default Button;
