import React, { useCallback, useEffect, useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todos, setTodos] = useState([]);
  // handle submit for form
  const handleSubmit = (e) => {
    e.preventDefault();
    const newTodo = {
      id: Date.now(),
      name: todo,
      bought: false,
    };
    setTodos([...todos, newTodo]);
    setTodo("");
    console.log(todo);
  };
  const handleChange = (e) => {
    setTodo(e.target.value);
    console.log(todo);
  };

  const deleteTodo = useCallback((id) => {
    const newdata = todos.filter((item) => item.id !== id);
    setTodos(newdata);
    console.log(newdata);
  }, []);

  //   handle bought status
  const handleBuyStatus = useCallback((id) => {
    const newdata = todos.filter((item) => item.id === id);
    console.log("object", newdata);
    if (newdata) {
      setTodo({ ...todo, bought: "true" });

      console.log([...newdata]);
    }
  }, []);

 

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div>
        <h1>Todo List</h1>
        <TodoForm
          todo={todo}
          handleSubmit={handleSubmit}
          handleChange={handleChange}
        />
        {todos.length === 0 ? (
          <div> empty todo</div>
        ) : (
          <ul style={{ listStyle: "none", marginTop: "20px" }}>
            {todos.map((item) => (
              <TodoList
                key={item.id}
                item={item}
                deleteTodo={deleteTodo}
               
              />
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};

export default Todo;
