export interface Image {
  id: number;
  upload: string;
}

export interface Product {
  id: number;
  slug: string;
  name: string;
  price: number;
  images: Image[];
}