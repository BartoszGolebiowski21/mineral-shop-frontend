"use client";

import { useEffect, useState } from "react";

const page = () => {
  const [productIds, setProductIds] = useState<number[]>([]);

  useEffect(() => {
    const cartString = localStorage.getItem("cart");
    const cartIds: number[] = cartString ? JSON.parse(cartString) : [];

    setProductIds(cartIds)
  }, []);

  return (
    <div>
      <p>Produkty w koszyku:</p>
      <p>{productIds.length > 0 ? productIds.join(", ") : "Brak produktów"}</p>
    </div>
  );
};

export default page;
