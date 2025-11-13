import React from 'react'
import NavButton from './NavButton';
import HeartIcon from '@/assets/svg-iconts/HeartIcon';
import PersonIcon from '@/assets/svg-iconts/PersonIcon';
import CartIcon from '@/assets/svg-iconts/CartIcon';


const NavButtonsContainer = () => {
  return (
    <div className="nav-container">
      <NavButton href="/wishlist">
        <HeartIcon />
        Ulubione
      </NavButton>

      <NavButton href="/account">
        <PersonIcon />
        Konto
      </NavButton>

      <NavButton href="/cart">
        <CartIcon />
        Koszyk
      </NavButton>
    </div>
  )
};

export default NavButtonsContainer;