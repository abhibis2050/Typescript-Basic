import React, { useState } from "react";

const Todo = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState<string[]>([]);

  const addTodo = () => {
    setTodoList([...todoList, todo]);
    setTodo("");
  };

  const handleChange = (e:React.ChangeEvent<HTMLInputElement> ) => {
    setTodo(e.target.value)
  };

  return (
    <div>
      <input
        type="text"
        placeholder="type todo"
        value={todo}
        onChange={(e) => {
          handleChange(e);
        }}
      />
      <button onClick={() => addTodo()}>ADD TODO</button>

      <ul>
        {todoList.map((todos) => {
          return <li key={todos}>{todos}</li>;
        })}
      </ul>
    </div>
  );
};

export default Todo;
