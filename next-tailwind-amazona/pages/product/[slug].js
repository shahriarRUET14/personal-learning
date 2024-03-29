import React, { useContext } from "react";
import Layout from "../components/Layout";
import { useRouter } from "next/router";
import data from "@/utils/data";
import Link from "next/link";
import Image from "next/image";
import { Store } from "@/utils/Store";

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store);
  const { query } = useRouter();
  const { slug } = query;
  const product = data.products.find((x) => x.slug === slug);

  if (!product) {
    return <div>Product Not Found</div>;
  }

  const addToCartHandler = () => {
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity: 1 } });
  };
  return (
    <Layout title={product.name}>
      <div className="py-2">
        <Link href="/">Back to Products</Link>
      </div>
      <div className="grid md:grid-cols-4 md:gap-3">
        <div className="md:col-span-2">
          <Image
            src={product.image}
            alt={product.name}
            width={640}
            height={640}
          ></Image>
        </div>
        <div>
          <ul>
            {" "}
            <li>
              <h1 className="text-lg">{product.name}</h1>
            </li>
            <li>Category: {product.category}</li>
            <li>Brand: {product.brand}</li>
            <li>
              {product.rating} of {product.numReviews}
            </li>
            <li>Description: {product.description}</li>
          </ul>
        </div>
        <div className="card p-5 wrap">
          <div className="mb-2 flex justify-between ">
            <div>Price</div>
            <div>${product.price}</div>
          </div>
          <div className="mb-2 flex justify-between">
            <div>Status</div>
            <div>{product.countInStock > 0 ? "In Stock" : "Unavailable"} </div>
          </div>
          <button className="primary-button w-full " onClick={addToCartHandler}>
            {" "}
            Add To Cart
          </button>
        </div>
      </div>
    </Layout>
  );
}
