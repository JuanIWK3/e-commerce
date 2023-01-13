import { Product } from "@prisma/client";
import axios from "axios";
import { type NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const Product: NextPage = () => {
  const [product, setProduct] = useState<Product>();

  const router = useRouter();

  useEffect(() => {
    if (!router.query.id) {
      return;
    }

    const getProduct: () => void = async () => {
      const productId = router.query.id as string;
      try {
        const response = await axios.get<Product>(`/api/products/${productId}`);

        setProduct(response.data);
      } catch (error) {
        console.log(error);
      }
    };

    getProduct();
  }, [router]);

  if (!product) {
    return <div>Loading...</div>;
  }

  return (
    <>
      <Head>
        <title>T-Commerce</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>{product?.name}</h1>
      </main>
    </>
  );
};

export default Product;
