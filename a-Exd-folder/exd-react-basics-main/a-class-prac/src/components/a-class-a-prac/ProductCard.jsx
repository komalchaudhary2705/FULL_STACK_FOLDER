import React from "react";

const ProductCard = ({ product, symbol, addToCart }) => {
  // product, symbol, addToCart
  // console.log(product.name);
  return (
    <div className="d-flex col col-sm-2 col-md-3 col-lg-4">
      <div className="card mb-4 box-shadow w-100">
        <div className="card-header">
          <h4 className="my-0 font-weight-normal"> {product.name}</h4>
        </div>
        <div className="card-body">
          <h1 className="card-title pricing-card-title">
            {symbol} <small className="text-muted">{product.price}</small>
          </h1>
          <button
            onClick={() => {
              addToCart(product);
            }}
            className="btn btn-sm btn-success ms-2 w-100"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
