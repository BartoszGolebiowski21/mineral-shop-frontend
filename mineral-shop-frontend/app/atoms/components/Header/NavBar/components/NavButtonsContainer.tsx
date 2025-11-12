import React from 'react'
import NavButton from './NavButton'

const NavButtonsContainer = () => {
  return (
    <div className="nav-container">
      <NavButton href="/wishlist">
        Ulubione
      </NavButton>

      <NavButton href="/account">
        Konto
      </NavButton>

      <NavButton href="/cart">
        Koszyk
      </NavButton>
    </div>
  )
}

export default NavButtonsContainer