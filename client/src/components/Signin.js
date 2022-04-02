import React from 'react';
import { Link } from 'react-router-dom';
import { HiOutlineMail, HiOutlineKey } from 'react-icons/hi';
import TextInput from './TextInput';

const Signin = () => {
  return (
    <div className="mt-16">
      <div className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 h-1 max-w-md mx-auto"></div>
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md  text-gray-700">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold mb-1">Sign in</h2>
          <div>
            Don't have an account?{' '}
            <Link to="/signup" className="text-skin-inverted hover:underline">
              Sign up
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <TextInput
            labelName="Email address"
            inputType="text"
            placeholderText="name@example.com"
            icon={<HiOutlineMail />}
          />

          <TextInput
            labelName="Password"
            inputType="password"
            placeholderText="Your password"
            icon={<HiOutlineKey />}
          />

          <button className="bg-skin-button-accent hover:bg-skin-button-accent-hover w-full py-2 rounded-md text-skin-base mt-4 shadow">
            Continue
          </button>

          <button className="w-full py-2 rounded-md mt-4 border border-gray-300 shadow">
            Login as guest
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signin;
