export interface Image {
  id: number;
  upload: string;
}

export interface Product {
  id: number;
  name: string;
  price: number;
  images: Image[];
}