import { useState } from "react";
import ProductCard from "./ProductCard";
import ShoppingCart from "./ShoppingCart";

export default function Products() {
  const symbol = "$";

  const products = [
    { id: 1, name: "Bread", price: 2.5 },
    { id: 2, name: "Milk", price: 1.75 },
    { id: 3, name: "Eggs", price: 3.2 },
    { id: 4, name: "Cheese", price: 4.1 },
    { id: 5, name: "Apples", price: 2.8 },
    { id: 6, name: "Bananas", price: 1.3 },
    { id: 7, name: "Chicken", price: 6.5 },
    { id: 8, name: "Rice", price: 2.25 },
    { id: 9, name: "Pasta", price: 1.9 },
    { id: 10, name: "Yogurt", price: 1.2 },
  ];

  const [cartItems, setCartItems] = useState([]);

  const isCartEmpty = cartItems.length === 0;
  const totalAmount = cartItems.reduce((subTotal, current) => {
    return current.price * current.quantity + subTotal;
  }, 0);

  const addToCart = ({ id, name, price }) => {
    if (isCartEmpty) {
      const newCartItem = { id, name, price, quantity: 1 };
      setCartItems([...cartItems, newCartItem]);
    } else {
      const foundCartItem = findCartProductById(id);
      if (foundCartItem) {
        increaseQuantity(id);
      } else {
        const newCartItem = { id, name, price, quantity: 1 };
        setCartItems([...cartItems, newCartItem]);
      }
    }
  };

  const increaseQuantity = (id) => {
    const updatedCartItems = cartItems.map((item) => {
      if (item.id === id) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const decreaseQuantity = (id) => {
    const foundCartItem = findCartProductById(id);

    if (foundCartItem && foundCartItem.quantity <= 1) {
      removeCartItem(id);
    } else {
      const updatedCartItems = cartItems.map((item) => {
        if (item.id === id) {
          return { ...item, quantity: item.quantity - 1 };
        }
        return item;
      });

      setCartItems(updatedCartItems);
    }
  };

  const removeCartItem = (id) => {
    const updatedCartItems = cartItems.filter((item) => {
      return item.id !== id;
    });

    setCartItems([...updatedCartItems]);
  };

  const findCartProductById = (id) => {
    return cartItems.find((item) => item.id === id);
  };

  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8">
          <div className="row">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                symbol={symbol}
                addToCart={addToCart}
              />
            ))}
          </div>
        </div>
        <div className="col-md-4">
          <h5>
            Total Amount: {symbol}
            {totalAmount.toFixed(2)}
          </h5>
          <ul className="list-group">
            {cartItems.map((item) => (
              <ShoppingCart
                key={item.id}
                item={item}
                symbol={symbol}
                increaseQuantity={increaseQuantity}
                decreaseQuantity={decreaseQuantity}
                removeCartItem={removeCartItem}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
