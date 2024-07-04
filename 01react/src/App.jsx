import { useState } from 'react'
import './App.css'
import Card from './Components/Card'
import arr from './assets/obj'
function App() {
  
console.log(arr)
  return (
    <>
    <div className="flex-auto">
      {
        arr.map((value)=>{
          return(<>
            <Card userName={value.userName} Subject={value.Subject} Marks={value.Marks}/>
          </>)
        })

      }
    </div>
    </>
  )
}

export default App
