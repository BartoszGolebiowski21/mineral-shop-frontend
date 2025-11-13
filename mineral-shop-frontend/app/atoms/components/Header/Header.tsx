import React from 'react';
import NavBar from './NavBar/NavBar';
import Menu from './Menu/Menu';


const Header = () => {
  return (
    <>
      <NavBar />
      <div className="h-px bg-gray-300 mx-[2%]"></div>
      <Menu />
    </>
  )
};

export default Header;