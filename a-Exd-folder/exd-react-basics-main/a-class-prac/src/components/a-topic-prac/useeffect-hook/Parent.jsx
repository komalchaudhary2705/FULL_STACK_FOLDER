import React, { useEffect, useState } from "react";

const EffectPrac = () => {
  const sign = "Rs";
  //   const products = [
  //     {
  //       id: 1,
  //       name: "Milk",
  //       price: 600,
  //     },
  //     {
  //       id: 2,
  //       name: "Bread",
  //       price: 200,
  //     },
  //     {
  //       id: 3,
  //       name: "Meat",
  //       price: 2000,
  //     },
  //   ];
  // display products list

  const [products, setProducts] = useState([]);
  const [searchItem, setSearchItem] = useState("");
  //   fetch products
  let url = "https://fakestoreapi.com/products/";
  // let url = 'http://dummyjson.com/products/'
  // let url = 'http://dummyjson.com/products/search?q=${searchItem}'
  const fetchProducts = () => {
    fetch(url)
      .then((response) => response.json())
      .then((data) =>
        // console.log(data)
        setProducts(data),
      );
  };
  useEffect(() => {
    fetchProducts();
  }, []);
  return (
    <div>
      <div className="row">
        <div className="col-12">
          <div className="row">
            {products.map((prod) => (
              <div
                key={prod.id}
                className="
                col-4 border d-flex flex-column items"
              >
                <img src={prod.image} alt="" width={"200px"} height={"200px"} />
                <h5>{prod.title}</h5>
                <h5>
                  {sign} {prod.price}
                </h5>
                <button className="bg-info text-white p-2">Add Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EffectPrac;
