import { useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import { todo } from "./todoSlice";
import Todo from "../todo";

// const renderTodo = () =>{

// }

const TodoList = () => {
  const todoList = useSelector((state: RootState) => state.todo);
  //   //console.log("🚀 ~ TodoList ~ todoList:", todoList);

  // const todoListCount = todoList.length

  // const
  return (
    <div>
      {[...todoList].reverse().map((todo: todo, index: number) => (
        <div key={index}>
          <Todo todo={todo} />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
