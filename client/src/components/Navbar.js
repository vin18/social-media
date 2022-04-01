import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="containr mx-auto bg-white border-gray-200 py-2.5 my-2 px-8 md:px-12 lg:px-18 rounded dark:bg-gray-600 shadow-sm">
      <div className="container flex flex-wrap justify-between items-center mx-auto">
        <Link to="/">
          <h1 className="self-center text-3xl font-bold whitespace-nowrap dark:text-white text-transparent bg-clip-text bg-gradient-to-br from-yellow-500 to-orange-500">
            Twingram
          </h1>
        </Link>

        <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
          <ul className="flex items-center flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:font-medium">
            <li>
              <a
                href="#"
                className="py-2 pr-4 pl-3 hover:text-yellow-500 rounded md:bg-transparent md:p-0 dark:"
                aria-current="page"
              >
                Signup
              </a>
            </li>

            <li>
              <Link to="/signin">
                <button
                  type="button"
                  className="text-white bg-skin-button-accent  font-medium rounded-lg px-5 py-2"
                >
                  Sign in
                </button>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
