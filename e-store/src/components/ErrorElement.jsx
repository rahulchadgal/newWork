import React from "react";
import { useRouteError } from "react-router-dom";
const ErrorElement = () => {
  const Error = useRouteError();
  console.log(Error);
  return <h4 className="font-bold text-4xl">There was an Error...</h4>;
};

export default ErrorElement;
