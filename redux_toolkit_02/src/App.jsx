import { useState } from 'react'
import './App.css'
import { Header, TodoCard, TodoForms } from './Roots'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
    <Header/>
    <TodoForms/>
    <TodoCard/>
   </>
  )
}

export default App
