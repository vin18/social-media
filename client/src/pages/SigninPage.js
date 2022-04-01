import React from 'react';
import { Link } from 'react-router-dom';

const SigninPage = () => {
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
          <div>
            <label
              for="email-adress-icon"
              className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
            >
              Email address
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="text"
                id="email-adress-icon"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 p-2.5"
                placeholder="name@example.com"
              />
            </div>
          </div>

          <div>
            <label
              for="email-adress-icon"
              className="block mb-2 font-medium text-gray-700 dark:text-gray-300"
            >
              Password
            </label>
            <div className="relative">
              <div className="flex absolute inset-y-0 left-0 items-center pl-3 pointer-events-none">
                <svg
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                </svg>
              </div>
              <input
                type="text"
                id="email-adress-icon"
                className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-yellow-500 focus:border-yellow-500 block w-full pl-10 p-2.5"
                placeholder="Your password"
              />
            </div>
          </div>

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

export default SigninPage;
