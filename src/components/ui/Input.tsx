import React from "react";

interface InputProps {
  type: string;
  placeholder: string;
  name: string;
  value?: string;
  required: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({
  type,
  placeholder,
  value,
  name,
  required,
  onChange,
}) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      required={required}
      onChange={onChange}
      className="border-[1.5px] border-slate-500 w-[220px] py-2 rounded-md pl-5"
    />
  );
};

export default Input;
