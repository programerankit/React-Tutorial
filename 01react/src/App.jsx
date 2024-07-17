import { useState } from "react";
import "./App.css";
import Card from "./Components/Card";
import arr from "./assets/obj";
import useCurrencyInfo from "./Hooks/useCurrencyInfo";
function App() {
  //useCurrencyInfo("usd");

  console.log('arr');
  return (
    <>
    <h1>hello</h1>
    
      {/* <div className="flex-auto">
      {
        arr.map((value)=>{
          return(<>
            <Card userName={value.userName} Subject={value.Subject} Marks={value.Marks}/>
          </>)
        })

      }
    </div> */}
    </>
  );
}

export default App;
