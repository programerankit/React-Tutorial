import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


// function abc(){
//   return<>
//     <h3>this is normal function 1</h3>
//   </>
// }

// let name="Ankit Kumar";


// const reactElement=React.createElement(
//   'a',
//   {
//     'href':'https://google.com',
//     'target':'_blank'
//   },
//   'click me',
//   name
// )
// const reactDiv=React.createElement(
//   'div',
//   {},
//   [reactElement]  //this way to add child in any tage
// )



ReactDOM.createRoot(document.getElementById('root')).render(
  //reactDiv
  // abc() //it is bad prectice but we can use this way, every component afterall is a function
  // reactElement  //this element created by react.createElement. our bundler all jsx code convert in this format.
  
  // <React.StrictMode>
     <App />
  // </React.StrictMode>,



  
)
