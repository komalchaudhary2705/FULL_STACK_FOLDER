import { useState } from "react";

function GroceryItem({ item, deleteItem, updateItem, toggleComplete }) {
  const [edit, setEdit] = useState(false);

  const [value, setValue] = useState(item.name);

  const saveEdit = () => {
    updateItem(item.id, value);

    setEdit(false);
  };

  return (
    <div className="flex items-center justify-between bg-gray-100 p-3 rounded mb-3">
      <div className="flex gap-3 items-center">
        <input
          type="checkbox"
          checked={item.completed}
          onChange={() => toggleComplete(item.id)}
        />

        {edit ? (
          <input
            value={value}
            onChange={(e) => setValue(e.target.value)}
            className="border p-1"
          />
        ) : (
          <p className={item.completed ? "line-through text-gray-500" : ""}>
            {item.name}
          </p>
        )}
      </div>

      <div className="flex gap-2">
        {edit ? (
          <button
            onClick={saveEdit}
            className="bg-blue-500 text-white px-3 py-1 rounded"
          >
            Save
          </button>
        ) : (
          <button
            onClick={() => setEdit(true)}
            className="bg-yellow-500 text-white px-3 py-1 rounded"
          >
            Edit
          </button>
        )}

        <button
          onClick={() => deleteItem(item.id)}
          className="bg-red-600 text-white px-3 py-1 rounded"
        >
          Delete
        </button>
      </div>
    </div>
  );
}

export default GroceryItem;
