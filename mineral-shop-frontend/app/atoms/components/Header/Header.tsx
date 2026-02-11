import React from 'react';
import NavBar from './NavBar/NavBar';
import MenuContainer from './Menu/MenuContainer';


const Header = () => {
  return (
    <>
      <NavBar />
      <div className="h-px bg-gray-300 mx-[2%]"></div>
      <MenuContainer />
    </>
  )
};

export default Header;