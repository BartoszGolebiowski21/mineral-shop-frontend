import React from 'react'
import StoneButton from './StoneButton';
import { Stone } from '@/app/atoms/types/ProductTypes';

interface StoneListProps {
  stones: Stone[];
}

const StoneList: React.FC<StoneListProps> = ({ stones }) => {
  return (
    <div className='filter-item-list'>
      {stones.map((stone) => (
        <StoneButton key={stone.id} stone={stone} />
      ))}
    </div>
  )
}

export default StoneList