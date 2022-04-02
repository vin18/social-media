import React from 'react';
import { HiOutlineMail, HiOutlineKey, HiOutlineUser } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import TextInput from './TextInput';

const Signup = () => {
  return (
    <div className="mt-16">
      <div className="w-full bg-gradient-to-r from-yellow-500 to-orange-600 h-1 max-w-md mx-auto"></div>
      <div className="max-w-md mx-auto bg-white p-8 rounded shadow-md  text-gray-700">
        <div className="text-center mb-4">
          <h2 className="text-3xl font-bold mb-1">Create your account</h2>
          <div>
            Have an account?{' '}
            <Link to="/signin" className="text-skin-inverted hover:underline">
              Sign in
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          <TextInput
            labelName="First name"
            inputType="text"
            placeholderText="Bruce"
            icon={<HiOutlineUser />}
          />

          <TextInput
            labelName="Last name"
            inputType="text"
            placeholderText="Bruce"
            icon={<HiOutlineUser />}
          />

          <TextInput
            labelName="Username"
            inputType="text"
            placeholderText="Bruce"
            icon={<HiOutlineUser />}
          />

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
            Create your account
          </button>
        </div>
      </div>
    </div>
  );
};

export default Signup;
