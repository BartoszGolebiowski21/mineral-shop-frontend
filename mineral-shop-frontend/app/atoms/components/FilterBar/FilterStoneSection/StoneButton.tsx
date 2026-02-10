"use client"

import React, { useState } from 'react'
import { Stone } from '@/app/atoms/types/ProductTypes';

interface StoneButtonProps {
  stone: Stone;
}

const StoneButton: React.FC<StoneButtonProps> = ({ stone }) => {
  const [isChecked, setIsChecked] = useState<boolean>(false);

  const checkButton = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className={`filter-button ${isChecked ? "checked" : ""}`} onClick={checkButton}>
      {stone.name}
    </div>
  )
}

export default StoneButton