import { useEffect, useState } from "react";
import "./App.css";
import { TodoProvider } from "./Context";
import { TodoFrom } from "./Components/TodoForm";
import { TodoCard } from "./Components/TodoCard";

function App() {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo) => {
    setTodos((prevTodo) => 
      [{ id: Date.now(), todoMsg: todo },...prevTodo]
    );
  };
  const deleteTodo = (id) => {
    setTodos(() => 
      todos.filter((todoObj) => todoObj.id != id)
    );
  };
  const updateTodo = (id, todo) => {
    setTodos(() => {
      todos.map((todoObj) => {
        if (todoObj.id == id) {
         todoObj.todoMsg=todo
         return todoObj;
        } else {
          return todoObj;
        }
      });
    });
  };


  useEffect(()=>{
    const lsData=JSON.parse(localStorage.getItem('todoData'));
    if(lsData!=null && lsData.length>0){
      setTodos(lsData);
    }
  },[])
  useEffect(()=>{
    localStorage.setItem('todoData',JSON.stringify(todos))
  },[todos])
//console.log(todos)
  return (
    <TodoProvider value={{ todos, addTodo, deleteTodo, updateTodo }}>
      <TodoFrom />
      <TodoCard/>
    </TodoProvider>
  );
}

export default App;
