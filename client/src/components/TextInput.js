import React from 'react';
import { HiOutlineEyeOff, HiOutlineEye } from 'react-icons/hi';

const TextInput = ({
  labelName,
  inputType,
  placeholderText,
  icon,
  name,
  value,
  error,
  onChange,
  isPasswordInput = false,
  showPassword,
  setShowPassword,
}) => {
  return (
    <div className="mb-3">
      <label htmlFor={name} className="block mb-2 font-medium text-gray-700 ">
        {labelName}
      </label>
      <div className="relative flex items-center">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-500 text-xl">
          {icon}
        </div>
        <input
          type={inputType}
          name={name}
          onChange={onChange}
          className={`px-4 p-2.5 pl-10 outline-none rounded-lg w-full border-2 focus:border-yellow-500 transition duration-400 ${
            error && 'border-red-500'
          }`}
          placeholder={placeholderText}
          value={value}
          onChange={onChange}
        />

        {isPasswordInput && (
          <span
            onClick={() => setShowPassword(!showPassword)}
            className="absolute right-5 top-4 cursor-pointer text-gray-700 text-xl"
          >
            {showPassword ? <HiOutlineEye /> : <HiOutlineEyeOff />}
          </span>
        )}
      </div>

      {error && <span className="text-red-500 font-bold">{error}</span>}
    </div>
  );
};

export default TextInput;
