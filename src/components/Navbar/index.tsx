import React from "react";

import { BiUser } from "react-icons/bi";
import { HiOutlineShoppingBag } from "react-icons/hi";
import { AiOutlineSearch } from "react-icons/ai";

import styles from "./styles.module.scss";

export const Navbar = () => {
  return (
    <div className={styles.container}>
      <h1>Logo</h1>
      <div className={styles.inputContainer}>
        <input className={styles.input} type="text" />
        <AiOutlineSearch />
      </div>
      <div className={styles.menus}>
        <div className={styles.user}>
          <BiUser size={24} />
        </div>
        <div className={styles.cart}>
          <HiOutlineShoppingBag size={24} />
        </div>
      </div>
    </div>
  );
};
