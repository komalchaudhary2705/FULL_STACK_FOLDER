import React, { useState } from "react";

const GroceryItems = () => {
  // state for single item
  const [item, setItem] = useState("");
  const [buy, setBuy] = useState(false);
  const [items, setItems] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  // handle change item
  const handleChange = (e) => {
    setItem(e.target.value);
  };

  //  form data submit function
  const handleSubmit = (e) => {
    e.preventDefault();

    if (item.trim() === "") return;

    if (editIndex !== null) {
      const updatedItems = [...items];
      updatedItems[editIndex] = item;
      setItems(updatedItems);
      setEditIndex(null);
    } else {
      setItems([...items, item]);
    }

    setItem("");
  };
  // console.log(items);

  const deleteItem = (index) => {
    const filteredItems = [...items];
    filteredItems.splice(index, 1);
    setItems(filteredItems);
  };

  const editItems = (index) => {
    setEditIndex(index);
    setItem(items[index]);
  };

  return (
    <div className="bg-white p-10">
      <h1 className="text-center text-xl mb-4">Grocery Items</h1>

      {/* form */}
      <form onSubmit={handleSubmit} className="w-100 shadow">
        <div className="flex">
          <input
            type="text"
            placeholder="Enter grocery item"
            className="border border-gray-300 p-4 w-full"
            value={item}
            onChange={handleChange}
          />
          <button
            className="bg-teal-600 text-white
          py-2 px-4 cursor-pointer"
          >
            {editIndex !== null ? "Update" : "Add"}
          </button>
        </div>
      </form>

      {/* grocery list */}
      <div className="mt-5">
        <ul className="flex flex-col gap-2">
          {items.map((grocery, index) => (
            <li
              key={index}
              className="flex items-center justify-between border border-gray-300 p-2 shadow"
            >
              <span>
                id: {index + 1} item : {grocery}
              </span>
              <span className="flex gap-2">
                {buy ? (
                  <button
                    onClick={() => {
                      setBuy(true);
                    }}
                    className="bg-green-600 text-white cursor-pointer p-2"
                  >
                    {buy ? "Done" : "Buy"}
                  </button>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        editItems(index);
                      }}
                      className="bg-blue-600 text-white cursor-pointer p-2"
                    >
                      Edit
                    </button>
                    <button
                      className="bg-red-600 text-white cursor-pointer p-2"
                      onClick={() => {
                        deleteItem(index);
                      }}
                    >
                      Del
                    </button>
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default GroceryItems;
