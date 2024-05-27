import React, { useState } from 'react'
import TodoList from '../components/todoList'
import { useDispatch, useSelector } from 'react-redux'
import { addTodo } from '../components/todoList/todoSlice';
import { RootState } from '../app/store';
import styles from './todoPage.module.css';
const TodoPage = () => {

    const [todoInput, setTodoInput] = useState('')
    const todoList = useSelector((state:RootState)=>state.todo)
    const dispatch = useDispatch();
    
    const handleAddToDo = () =>{
        const newIndex = todoList.length

        todoInput && dispatch(addTodo({
            id:newIndex,
            title:todoInput,
            isCompleted:false
        }))
        todoInput && setTodoInput('')

    }
    const handleAddToDoOnEnter = (e?:React.KeyboardEvent<HTMLInputElement>) =>{
        const newIndex = todoList.length
        // //console.log(e?.code==='Enter')
        
        e?.code==='Enter' && dispatch(addTodo({
            id:newIndex,
            title:todoInput,
            isCompleted:false
        }))
        e?.code==='Enter' &&  setTodoInput('')
    }

    const handleChange = (e:React.ChangeEvent<HTMLInputElement>) =>{
        setTodoInput(e.target.value)
    }

    

  return (
    <div className={styles.container}>
        <div>
            <h2>Virtualized Todos...</h2>
        </div>
       <label htmlFor="todoInput">
       <input value={todoInput} id='todoInput' onChange={(e)=>handleChange(e)} onKeyDown={(e)=>handleAddToDoOnEnter(e)} type="text" placeholder='Add your todo' />
       <button className={styles.todoButton} onClick={()=>handleAddToDo()} type="button">Add to do</button>
       </label>
       <TodoList/>

    </div>
  )
}

export default TodoPage 