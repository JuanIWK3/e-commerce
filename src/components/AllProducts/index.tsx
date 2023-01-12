import React, { useState } from "react";
import { Product } from "../Product";
import styles from "./styles.module.scss";

export const AllProducts = () => {
  const [products, setProducts] = useState<number[]>([...Array(100).keys()]);

  return (
    <div className={styles.container}>
      <p>All Products</p>
      <div className={styles.products}>
        {products.map((product, index) => {
          return <Product key={product} product={product} />;
        })}
      </div>
    </div>
  );
};
