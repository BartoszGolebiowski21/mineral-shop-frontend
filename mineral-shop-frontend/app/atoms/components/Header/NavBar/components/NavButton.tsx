import React from 'react';
import Link from 'next/link';

interface NavButtonProps {
  href: string;
  children: React.ReactNode;
};


const NavButton: React.FC<NavButtonProps> = ({
  href,
  children
}) => {
  return (
    <Link href={href} className='nav-button'>
      {children}
    </Link>
  )
}

export default NavButton