import React from 'react';
import NavButton from '../NavBar/components/NavButton';


const Menu = () => {
  return (
    <div className="menu-container my-4">
      <NavButton href="/rings">
        Pierścionki
      </NavButton>

      <NavButton href="/bracelets">
        Bransoletki
      </NavButton>
    </div>
  )
};

export default Menu;