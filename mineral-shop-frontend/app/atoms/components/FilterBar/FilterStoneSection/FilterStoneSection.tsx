import React from 'react'
import StoneList from './StoneList';

const fetchStones = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/stones/`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Stones not found");
  }

  return res.json();
};

const FilterStoneSection = async () => {
  const stones = await fetchStones();

  return (
    <>
      <div className='font-medium'>KAMIENIE</div>
      <StoneList stones={stones} />
    </>
  )
}

export default FilterStoneSection