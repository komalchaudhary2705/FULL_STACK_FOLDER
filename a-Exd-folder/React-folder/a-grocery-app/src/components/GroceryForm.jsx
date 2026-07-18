import { useState } from "react";

function GroceryForm({ addItem }) {
  const [name, setName] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!name.trim()) return;

    addItem(name);

    setName("");
  };

  return (
    <form onSubmit={submitHandler} className="flex gap-2 mb-5">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="border p-2 rounded w-full"
        placeholder="Enter grocery item"
      />

      <button className="bg-green-600 text-white px-4 rounded">Add</button>
    </form>
  );
}

export default GroceryForm;
