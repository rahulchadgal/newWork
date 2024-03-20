import { Filters, PaginationContainer, ProductsContainer } from "../components";
import { customFetch } from "./../utils/index";
import React from "react";

const url = "/products";
export const loader = async ({ request }) => {
  const params = Object.fromEntries([
    ...new URL(request.url).searchParams.entries(),
  ]);
  const response = await customFetch(url, { params });
  const products = response.data.data;
  const meta = response.data.meta;
  const data = {
    products,
    meta,
    params,
  };
  return data;
};

const Products = () => {
  return (
    <>
      <Filters />
      <ProductsContainer />
      <PaginationContainer />
    </>
  );
};

export default Products;
