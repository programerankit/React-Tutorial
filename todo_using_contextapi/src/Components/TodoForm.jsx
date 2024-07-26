import { useState } from "react"
import { useTodo } from "../Context";

export const TodoFrom=()=>{
    const {todos,addTodo,deleteTodo,updateTodo}=useTodo()
    const [todoMsg,setTodoMsg]=useState('');
    function addTodoClick(e){
        e.preventDefault();
        addTodo(todoMsg)
        setTodoMsg('')
    }
    return(
        <>
            <div>
                <input type="text" value={todoMsg} onChange={(e)=>{setTodoMsg(e.target.value)}}/>
                <button onClick={addTodoClick}>Add</button>
            </div>
            <div>
                {
                    todos&&todos.map((obj)=>{
                        return(<>
                            <p>{obj.id} and {obj.todoMsg}</p>
                        </>)
                    })
                }
            </div>
        </>
    )
}