import React from 'react'

const TodoForm = ({todo,handleSubmit,handleChange}) => {
  return (
    <form onSubmit={handleSubmit}>
          <input
          style={{border:"1px solid"}}
            type="text"
            placeholder="Enter Todo"
            value={todo}
            onChange={handleChange}
          />
          <button type="submit">Add</button>
        </form>
  )
}

export default TodoForm
