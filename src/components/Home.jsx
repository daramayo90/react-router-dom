import React from "react";
import Product from "./Product";

function Home({ products }) {
  return (
    <div className="Grid animated bounceInUp">
      {products.map((product) => (
        <Product duration={150} key={product.id} product={product} />
      ))}
    </div>
  );
}

export default Home;
