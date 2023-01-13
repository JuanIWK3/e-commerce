import React from "react";

import styles from "./styles.module.scss";

import { BsCartPlus } from "react-icons/bs";
import { Product } from "@prisma/client";
import Image from "next/image";

export const ProductCard = ({ product }: { product: Product }) => {
  return (
    <div className={styles.product}>
      <div className={styles.content}>
        <div className={styles.figure}>
          <Image
            className={styles.image}
            src={product.images[0]!}
            alt="product"
            fill={true}
            sizes="(max-width: 768px) 100vw,
              (max-width: 1200px) 50vw,
              33vw"
          />
        </div>
        <div className={styles.text}>{product.name}</div>
      </div>
      <button className={styles.buy}>
        <BsCartPlus size={20} />
      </button>
    </div>
  );
};
