import React from 'react';
import NavButton from '../NavBar/components/NavButton';
import { Category } from '@/app/atoms/types/ProductTypes';

interface CategoryListProps {
  categories: Category[];
}


const Menu: React.FC<CategoryListProps> = ({ categories }) => {
  return (
    <div className="menu-container my-4">
      {categories.map((category) => (
        <NavButton key={category.id} href={`/products/${category.slug}`}>
          {category.name}
        </NavButton>
      ))}
    </div>
  )
};

export default Menu;