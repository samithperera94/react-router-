import React from "react";
import { Link, useParams } from "react-router-dom";

const ProductDetails = () => {
  const params = useParams();
  return (
    <>
      <h2>ProductDetails</h2>
      <p>{params.productID}</p>
      <p>
        <Link to=".." relative="path">
          Back
        </Link>
      </p>
    </>
  );
};

export default ProductDetails;
