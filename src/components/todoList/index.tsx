import {  useSelector } from "react-redux";
import type { RootState } from "../../app/store";
import Todo from "../todo";
import { AutoSizer, List } from "react-virtualized";
import styles from './todoList.module.css';

const TodoList = () => {
  const todoList = useSelector((state: RootState) => state.todo);
  
  const revTodo = [...todoList].reverse()
  
  const rowHeight = 50;
  
  
  return (
    <div className={styles.list}>
     
      <AutoSizer>
      {({ width, height }) => (
         <List
          width={width}
          height={height}
          rowHeight={rowHeight}
          rowRenderer={({index,key, style})=>{
            const currTodo = revTodo[index]
           
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
       
          



    </div>
  );
};

export default TodoList;
