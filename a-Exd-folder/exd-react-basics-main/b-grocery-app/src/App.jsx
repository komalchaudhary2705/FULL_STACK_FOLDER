import { useState } from "react";
import GroceryForm from "./components/GroceryForm";
import GroceryList from "./components/GroceryList";


function App() {
  const [items,setItems] = useState(
    JSON.parse(localStorage.getItem("grocery")) || []
  );

  // CREATE
  const addItem = (name) => {
    const newItem = {
      id: Date.now(),
      name:name,
      completed:false
    }
    
    const updated = [...items,newItem];

    setItems(updated);

    localStorage.setItem(
      "grocery",
      JSON.stringify(updated)
    );
  }



  // UPDATE
  const updateItem = (id,newName)=>{

    const updated = items.map(item =>
      item.id === id 
      ? {...item,name:newName}
      : item
    );


    setItems(updated);

    localStorage.setItem(
      "grocery",
      JSON.stringify(updated)
    );

  }



  // DELETE
  const deleteItem=(id)=>{

    const updated =
      items.filter(item=>item.id !== id);


    setItems(updated);


    localStorage.setItem(
      "grocery",
      JSON.stringify(updated)
    );

  }



  // COMPLETE STATUS

  const toggleComplete=(id)=>{

    const updated = items.map(item=>
      item.id===id
      ? {...item,completed:!item.completed}
      : item
    );


    setItems(updated);

    localStorage.setItem(
      "grocery",
      JSON.stringify(updated)
    );
  }



  return (

    <div className="min-h-screen bg-gray-100 p-5">
      <div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-6">
        <h1 className="text-3xl font-bold text-center mb-5">
          Grocery List
        </h1>
        <GroceryForm 
          addItem={addItem}
        />
        <GroceryList
          items={items}
          deleteItem={deleteItem}
          updateItem={updateItem}
          toggleComplete={toggleComplete}
        />
      </div>
    </div>

  )
}

export default App