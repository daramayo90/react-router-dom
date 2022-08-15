import "./Product.css";

import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails({ products }) {
  const params = useParams();
  const product = products[params.id - 1];

  return (
    <>
      {product && (
        <div className="card">
          <div className="front">
            <img src={product.image} alt="Avatar" className="card-image" />
            <div className="container">
              <h3>{product.title}</h3>
              <h3>
                <span className="price"> ${product.price}</span>
              </h3>
              <p>{product.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ProductDetails;
