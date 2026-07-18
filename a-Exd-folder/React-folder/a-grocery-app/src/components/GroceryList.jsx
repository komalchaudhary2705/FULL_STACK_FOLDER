import GroceryItem from "./GroceryItem";

function GroceryList({ items, deleteItem, updateItem, toggleComplete }) {
  return (
    <div>
      {items.map((item) => (
        <GroceryItem
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          updateItem={updateItem}
          toggleComplete={toggleComplete}
        />
      ))}
    </div>
  );
}

export default GroceryList;
