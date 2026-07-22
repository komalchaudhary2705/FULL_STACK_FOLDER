import React, { memo } from "react";

const TodoList = ({ item, deleteTodo }) => {
  return (
    <li
      //   key={item.id}
      style={{
        border: "1px solid",
        marginTop: "10px",
        display: "flex",
        justifyContent: "space-between",
        padding: "10px",
      }}
    >
      <span>{item.name}</span>
      <div>
        <button
          style={{ background: "red", color: "white" }}
          onClick={() => {
            deleteTodo(item.id);
          }}
        >
          Delete
        </button>
      </div>
    </li>
  );
};

export default memo(TodoList);
