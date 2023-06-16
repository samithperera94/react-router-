import React from 'react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  return (
    <>
        <h1>HomePage</h1>
        <p>
            Go to <Link to="/products">Products</Link>.
        </p>
    </>
  )
}

export default HomePage