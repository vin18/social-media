import React from 'react';
import heroImg from '../assets/images/social-hero.png';

const StartPage = () => {
  return (
    <div className="flex flex-col md:flex-row items-start md:items-center max-w-7xl mx-auto">
      <div className="md:mr-8 md:w-1/2 mt-32">
        <h1 className="text-5xl mb-4">A fun way to capture life moments</h1>
        <p className="mb-4 text-lg">
          Welcome to Twingram. A social media platform to like, share and see
          what others are up to. Happy socializing!
        </p>

        <button className="bg-skin-button-accent hover:bg-skin-button-accent-hover px-6 py-3 rounded-md">
          Join our community
        </button>
      </div>
      <div className="hidden md:block md:w-1/2">
        <img src={heroImg} alt="" />
      </div>
    </div>
  );
};

export default StartPage;
