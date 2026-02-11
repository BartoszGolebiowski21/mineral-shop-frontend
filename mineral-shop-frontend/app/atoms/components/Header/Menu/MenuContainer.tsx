import React from 'react'
import Menu from './Menu';

const fetchCategories = async () => {
  const res = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/api/categories/`,
    {
      next: { revalidate: 60 },
    }
  );

  if (!res.ok) {
    throw new Error("Categories not found");
  }

  return res.json();
};

const MenuContainer = async () => {
  const categories = await fetchCategories();

  return (
    <Menu categories={categories}/>
  )
}

export default MenuContainer