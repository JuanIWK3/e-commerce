import React, { useState } from "react";
import { Product } from "../Product";
import styles from "./styles.module.scss";

export const NewProducts = () => {
  const [products, setProducts] = useState<number[]>([...Array(15).keys()]);
  return (
    <div className={styles.container}>
      <p>Newest Products</p>
      <div className={styles.products}>
        {products.map((product, index) => {
          return <Product key={product} product={product} />;
        })}
      </div>
    </div>
  );
};
