import React from 'react';

const TextInput = ({ labelName, inputType, placeholderText, icon }) => {
  return (
    <div>
      <label
        for="email-adress-icon"
        className="block mb-2 font-medium text-gray-700 "
      >
        {labelName}
      </label>
      <div className="relative flex items-center">
        <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none text-gray-500 text-xl">
          {/* <svg
            className="w-5 h-5 text-gray-500 dark:text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
          </svg> */}
          {icon}
        </div>
        <input
          type={inputType}
          id="email-adress-icon"
          className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 p-2.5"
          placeholder={placeholderText}
        />
      </div>
    </div>
  );
};

export default TextInput;
