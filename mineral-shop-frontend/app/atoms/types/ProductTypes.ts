export interface ImageObj {
  id: number;
  upload: string;
}

export interface Stone {
  id: number;
  name: string;
  slug: string;
}

export interface Size {
  id: number;
  name: string;
}

export interface Category {
  id: number;
  name: string;
  slug: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  images: ImageObj[];
}

export interface ProductDetail extends Product {
  code: string;
  description: string;
  stones: Stone[];
  size: Size;
  category: Category;
}