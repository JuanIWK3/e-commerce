import React from "react";

import styles from "./styles.module.scss";

import { BsCartPlus } from "react-icons/bs";

export const Product = ({ product }: { product: number }) => {
  return (
    <div className={styles.product}>
      <div className={styles.content}>
        <div className={styles.image}></div>
        <div className={styles.text}>{product}</div>
      </div>
      <button className={styles.buy}>
        <BsCartPlus />
      </button>
    </div>
  );
};
