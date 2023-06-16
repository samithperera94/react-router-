import React from "react";
import { Link, useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate(); // programmatically navigate

  const navigateHandler = () => {
    //only for demo use links otherwise
    navigate("/products");
  };
  return (
    <>
      <h1>HomePage</h1>
      <p>
        Go to <Link to="/products">Products</Link>.
      </p>
      <p>
        <button onClick={navigateHandler}>Navigate</button>
      </p>
    </>
  );
};

export default HomePage;
