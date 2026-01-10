"use client"

import { useEffect, useState } from 'react';
import HamburgerIcon from '@/assets/svg-icons/HamburgerIcon';
import NavButtonsContainer from './NavButtonsContainer';

const Hamburger = () => {
  const [isNavOpen, setIsNavOpen] = useState<boolean>(false);

  useEffect(() => {
    console.log(isNavOpen)
  }, [isNavOpen]);

  return (
    <>
      <div className='hamburger' onClick={() => setIsNavOpen(prev => !prev)}>
        <HamburgerIcon />
      </div>

      {isNavOpen &&
        <div className='nav-dropdown'>
          <NavButtonsContainer />
        </div>
      }
    </>
  )
};

export default Hamburger;