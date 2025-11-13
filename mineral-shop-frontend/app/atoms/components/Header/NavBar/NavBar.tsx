import React from 'react';
import MainLogo from './components/MainLogo';
import NavButtonsContainer from './components/NavButtonsContainer';


const NavBar = () => {
  return (
    <div className="flex items-center justify-between w-full px-6 py-4 relative">
      <div className="absolute left-1/2 transform -translate-x-1/2">
        <MainLogo />
      </div>

      <div className="ml-auto">
        <NavButtonsContainer />
      </div>
    </div>
  );
};

export default NavBar;