import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface todo {
  id: number;
  title: string;
  isCompleted: boolean;
}

const totalCount = 10000;

const initialState: todo[] = Array(totalCount)
  .fill()
  .map((_item: todo, idx: number): todo => {
    return {
      id: idx,
      title: "first todo",
      isCompleted: false,
    };
  });

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<todo>) => {
        const latestState = [...state]
        latestState.push(action.payload)

        //console.log("🚀 ~ latestState:", latestState)


      return latestState;
    },
    updateTodo:(state, action: PayloadAction<{id:number,isCompleted:boolean}>) =>{
        const latestState = [...state]
        //console.log("🚀 ~ latestState:", latestState)
        const {id,isCompleted} = action.payload
        //console.log("🚀 ~ id:", id)
        latestState[id] = { ...latestState[id],  isCompleted:isCompleted}

        return latestState
    },
  },
});

export const { addTodo,updateTodo } = todoSlice.actions;
export default todoSlice.reducer

