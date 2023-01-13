import React, { useState } from "react";
import { api } from "../../utils/api";
import { ProductCard } from "../Product";
import styles from "./styles.module.scss";

export const NewProducts = () => {
  // const [products, setProducts] = useState<number[]>([...Array(15).keys()]);

  const { data: products } = api.example.getAllProducts.useQuery();

  if (!products) return <div>Loading...</div>;

  for (let i = 0; i < 10; i++) {
    if (products[0]) {
      products.push(products[0]);
    }
  }

  return (
    <div className={styles.container}>
      <p>Newest Products</p>
      <div className={styles.products}>
        {products.map((product, index) => {
          return <ProductCard key={index} product={product} />;
        })}
      </div>
    </div>
  );
};
