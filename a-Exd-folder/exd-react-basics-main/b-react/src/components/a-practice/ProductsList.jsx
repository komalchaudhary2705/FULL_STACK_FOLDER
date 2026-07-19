import React, { useState } from "react";

const ProductsList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      name: "Rice",
      price: 500,
    },
    {
      id: 2,
      name: "Salt",
      price: 200,
    },
    {
      id: 3,
      name: "Bread",
      price: 100,
    },
    {
      id: 4,
      name: "Chicken",
      price: 2000,
    },
  ]);

  // =============
  const [cart, setCart] = useState([]);

  const addCart = (product) => {
    const exist = cart.find((item) => item.id === product.id);
    if (exist) {
      alert("product already exist");
      return;
    }
    setCart([...cart, { ...product, quantity: 1 }]);
  };

  const increaseQty = (id) => {
    const exist = cart.find((item) => item.id === id);
    if (exist) {
      setCart(
        cart.map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        ),
      );
    }
  };
  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  };
  const clearCart = () => {
    setCart([]);
  };

  const removeCart = (id) => {
    const newList = cart.filter((item) => item.id !== id);
    setCart(newList);
  };

  return (
    <div className="bg-gray-100 w-full min-h-screen p-10 md:px-30">
      {/* product table part */}
      <div className="bg-white p-10">
        <h1 className="text-xl pb-5">Product List</h1>
        <table className="w-full border">
          <thead>
            <tr className="text-xl">
              <th className="border p-2">Name</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr className="text-xl" key={item.id}>
                <td className="border text-center p-2">{item.name}</td>
                <td className="border text-center p-2">Rs: {item.price}</td>
                <td className="border text-center p-2">
                  <button
                    className="bg-teal-600 text-white p-2 rounded
                  cursor-pointer"
                    onClick={() => {
                      addCart(item);
                    }}
                  >
                    Add To Cart
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* cart part */}
      <div className="bg-white p-10">
        <h1 className="text-xl pb-5">Cart Items</h1>

        <table className="w-full border">
          <thead>
            <tr className="text-xl">
              <th className="border p-2">Name</th>
              <th className="border p-2">Price</th>
              <th className="border p-2">Quantity</th>
              <th className="border p-2">Total</th>
              <th className="border p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            {cart.length === 0 ? (
              <tr>
                <td colSpan="5">
                  <div className="text-xl flex items-center justify-center w-full p-4">
                    Cart is Empty
                  </div>
                </td>
              </tr>
            ) : (
              <>
                {cart.map((item) => (
                  <tr className="text-xl" key={item.id}>
                    <td className="border text-center p-2">{item.name}</td>
                    <td className="border text-center p-2">Rs: {item.price}</td>
                    <td
                      className="border text-center p-2 py-4 
                flex items-center justify-center gap-2"
                    >
                      <button
                        onClick={() => {
                          decreaseQty(item.id);
                        }}
                        className="bg-rose-600 px-3 text-white"
                      >
                        -
                      </button>
                      {item.quantity}
                      <button
                        className="bg-teal-600 px-2 text-white"
                        onClick={() => {
                          increaseQty(item.id);
                        }}
                      >
                        +
                      </button>
                    </td>
                    <td className="border text-center p-2">
                      Rs: {item.quantity * item.price}
                    </td>
                    <td className="border text-center p-2">
                      <button
                        onClick={() => {
                          removeCart(item.id);
                        }}
                        className="bg-teal-600 text-white p-2 rounded
                  cursor-pointer"
                      >
                        Remove
                      </button>
                    </td>
                  </tr>
                ))}
              </>
            )}
          </tbody>
        </table>
      </div>
      {/* bill detail  */}
      <div className="bg-white p-5 flex flex-col items-center justify-center">
        <div>
          <h1 className="text-xl pb-2">
            Total Quantity : &nbsp;
            {cart.reduce((total, item) => total + item.quantity, 0)}
          </h1>

          <h1 className="text-xl pb-2">
            Total Bill : Rs &nbsp;
            {cart.reduce(
              (total, item) => total + item.quantity * item.price,
              0,
            )}
          </h1>
        </div>

        <button className="bg-black text-white p-3 px-4" onClick={clearCart}>
          Clear Cart
        </button>
      </div>
    </div>
  );
};

export default ProductsList;
