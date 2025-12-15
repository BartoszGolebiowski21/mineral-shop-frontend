"use client";
import FilterBar from '@/app/atoms/components/FilterBar/FilterBar';
import ProductList from '@/app/atoms/components/ProductList/ProductList';
import { Product } from '@/app/atoms/types/ProductTypes';
import React, { useEffect, useState } from 'react';


const page = () => {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    fetch('http://localhost:8000/api/products/')
    // fetch('https://berneice-ferniest-milo.ngrok-free.dev/api/products/')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  if (!products) return null;

  return (
    <>
      <div className='filter-bar'><FilterBar /></div>
      <ProductList products={products} />
    </>
  )
};

export default page;