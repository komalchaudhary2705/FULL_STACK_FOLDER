import React, { useState } from "react";

const GroceryApp = () => {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);

  const handleChange = (e) => {
    setItem(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (item.trim() === "") return alert("enter item");

    const newItem = {
      id: Date.now(),
      name: item,
      bought: false,
    };

    setItems([...items, newItem]);
    setItem("");
  };

  const BuyStatus = (id) => {
    const updatedItems = items.map((item) =>
      item.id === id ? { ...item, bought: true } : item,
    );

    setItems(updatedItems);
  };

  const deleteItem = (id) => {
    const updatedItems = items.filter((item) => item.id !== id);

    setItems(updatedItems);
  };

  return (
    <div
      className="bg-gray-100 w-full min-h-screen p-10
      flex justify-center pt-10"
    >
      <div className="w-2xl">
        <h1 className="py-5 text-2xl text-center">Grocery Form</h1>

        <form onSubmit={handleSubmit} className="w-full">
          <div className="flex">
            <input
              type="text"
              placeholder="Enter grocery..."
              className="border p-2 w-full"
              value={item}
              onChange={handleChange}
            />

            <button
              type="submit"
              className="bg-teal-600 p-4 text-white text-xl cursor-pointer"
            >
              Add
            </button>
          </div>
        </form>

        {/* Item List */}

        <ul className="pt-5 flex flex-col gap-1">
          {items.map((item) => (
            <li
              key={item.id}
              className="flex items-center justify-between 
              w-full border p-2"
            >
              <span
                className={
                  item.bought ? "font-bold line-through text-gray-500" : ""
                }
              >
                {item.name}
              </span>

              <span className="flex gap-2">
                <button
                  onClick={() => BuyStatus(item.id)}
                  className="bg-blue-500 text-white p-2 cursor-pointer"
                >
                  {item.bought ? "Done" : "Buy"}
                </button>

                {!item.bought && (
                  <button
                    onClick={() => deleteItem(item.id)}
                    className="bg-rose-500 text-white p-2 px-4 cursor-pointer"
                  >
                    Del
                  </button>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GroceryApp;
