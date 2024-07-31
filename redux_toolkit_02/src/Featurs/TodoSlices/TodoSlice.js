import {createSlice,nanoid} from '@reduxjs/toolkit';


const initialState={
    todos:JSON.parse(localStorage.getItem('TodoInfo'))!=null?JSON.parse(localStorage.getItem('TodoInfo')):[]
}



export const todoSlice=createSlice({
    name:'todo',
    initialState,
    reducers:{
        addTodo:(state,action)=>{
            const todo={
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
            localStorage.setItem('TodoInfo',JSON.stringify(state.todos))
        },
        removeTodo:(state,action)=>{
            state.todos=state.todos.filter((todoObj)=>todoObj.id!=action.payload)
            localStorage.setItem('TodoInfo',JSON.stringify(state.todos))

        },
        editTodo:(state,action)=>{
            state.todos=state.todos.map((todoObj)=>todoObj.id=action.payload.id?action.payload.todo:todoObj)
            localStorage.setItem('TodoInfo',JSON.stringify(state.todos))

        }
    }
})



export const {addTodo,removeTodo,editTodo}=todoSlice.actions;
export default todoSlice.reducer;