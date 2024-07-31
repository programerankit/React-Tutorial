import { useState } from "react"
import { useDispatch } from "react-redux"
import { addTodo } from "../../Roots"
export const TodoForms =()=>{
    const [text,setText]=useState('')
    const dispatch=useDispatch();
    const addTodoClick=(e)=>{
        e.preventDefault();
        dispatch(addTodo(text))
        setText('')
    }


    return(<>
        

<form className="max-w-lg mx-auto">
  <div className="mb-5">
    <input type="text" id="todo_text" onChange={(e)=>setText(e.target.value)} value={text} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 inline  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="write todo" autoFocus required />
  </div>
  <button type="submit" onClick={addTodoClick} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Add</button>
</form>

    </>)
}