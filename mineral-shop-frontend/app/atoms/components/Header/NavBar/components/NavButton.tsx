import React from 'react';
import Link from 'next/link';

interface NavButtonProps {
  href: string;
  className?: string;
  children: React.ReactNode;
};


const NavButton: React.FC<NavButtonProps> = ({
  href,
  className,
  children
}) => {
  return (
    <Link href={href} className={`nav-button ${className}`}>
      {children}
    </Link>
  )
}

export default NavButton