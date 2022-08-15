import "./Product.css";

import React from "react";
import { Link } from "react-router-dom";

function Product({ product }) {
  return (
    <div className="card">
      <Link to={`/product/${product.id}`}>
        <div className="front">
          <div className="card-image">
            <img src={product.image} alt="Avatar" />
          </div>
          <div className="container">
            <h3>{product.title}</h3>
            <h3>
              <span className="price"> ${product.price}</span>
            </h3>
            <p>{product.description}</p>
          </div>
        </div>
      </Link>
    </div>
  );
}

export default Product;
