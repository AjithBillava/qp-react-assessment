import {  useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import Todo from "../todo";
import { AutoSizer, List } from "react-virtualized";

// const renderTodo = () =>{

// }

const TodoList = () => {
  const todoList = useSelector((state: RootState) => state.todo);
  //   //console.log("🚀 ~ TodoList ~ todoList:", todoList);
  const revTodo = [...todoList].reverse()
  // const todoListCount = todoList.length
  // const listHeight = 800;
  const rowHeight = 50;
  // const rowWidth = 700;
  // const
  return (
    <div style={{height:'100%',width:'100%'}}>
      {/* {[...todoList].reverse().map((todo: todo, index: number) => (
        <div key={index}>
          <Todo todo={todo} />
        </div>

      ))} */}
      {/* <AutoSizer> */}
      <AutoSizer>
      {({ width, height }) => (
         <List
          width={width}
          height={height}
          rowHeight={rowHeight}
          rowRenderer={({index,key, style})=>{
            const currTodo = revTodo[index]
            console.log("🚀 ~ TodoList ~ currTodo:", currTodo)
            return(
              <div key={key} style={style}>
                <Todo todo={currTodo} />
              </div>
            )

          }}
          rowCount={todoList.length}
          overscanRowCount={10} />
      )}
    </AutoSizer>
       
          
      {/* </AutoSizer> */}



    </div>
  );
};

export default TodoList;
