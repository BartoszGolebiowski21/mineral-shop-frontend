import React from 'react';
import MainLogo from './components/MainLogo';
import NavButtonsContainer from './components/NavButtonsContainer';
import Hamburger from './components/Hamburger';


const NavBar = () => {
  return (
    <div className="header-container">
      <div className="logo-wrapper">
        <MainLogo />
      </div>

      <div className="nav-buttons-wrapper">
        <NavButtonsContainer />
      </div>

      {/* hamburger disabled */}
      {/* <div className="hamburger-wrapper">
        <Hamburger />
      </div> */}
    </div>
  );
};

export default NavBar;