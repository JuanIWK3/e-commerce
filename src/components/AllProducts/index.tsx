import Link from "next/link";
import React, { useState } from "react";
import { api } from "../../utils/api";
import { ProductCard } from "../Product";
import styles from "./styles.module.scss";

export const AllProducts = () => {
  // const [products, setProducts] = useState<number[]>([...Array(100).keys()]);

  const { data: products } = api.example.getAllProducts.useQuery();

  if (!products) return <div>Loading...</div>;

  return (
    <div className={styles.container}>
      <p>All Products</p>
      <div className={styles.products}>
        {products.map((product, index) => {
          return (
            <Link key={index} href={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          );
        })}
      </div>
    </div>
  );
};
