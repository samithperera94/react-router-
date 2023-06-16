import React from "react";
import { useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  return (
    <>
      <h2>ProductDetails</h2>
      <p>{params.productID}</p>
    </>
  );
};

export default ProductDetails;
