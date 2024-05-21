import React from "react";
import { useDispatch } from "react-redux";
import { todo, updateTodo } from "../todoList/todoSlice";

type todoProps = { todo: todo };

const Todo = ({ todo }:todoProps) => {
  const dispatch = useDispatch();
  const handleUpdateTodo = (
    id: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    dispatch(updateTodo({ id: id, isCompleted: e.target.checked }));
  };

  return (
      <label htmlFor={`todo_${todo?.title}`}>
        {todo.title}
        <input
          type="checkbox"
          onChange={(e) => handleUpdateTodo(todo.id, e)}
          checked={todo.isCompleted}
          name={todo.title}
          id={`${todo.id}`}
        />
      </label>
    
  );
};

export default Todo;
