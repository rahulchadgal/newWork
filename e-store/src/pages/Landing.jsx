import React from "react";
import { Hero, FeaturedProducts } from "../components";
import { customFetch } from "./../utils/index";

const url = "/products?featured=true";
export const loader = async () => {
  const response = await customFetch(url);
  const products = response.data.data;
  const data = {
    products,
  };
  // console.log(products);
  return data;
};
const Landing = () => {
  return (
    <>
      <Hero />
      <FeaturedProducts />
    </>
  );
};

export default Landing;
