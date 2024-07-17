import { useState } from 'react'
import './App.css'
import useCurrencyConvetor from './customHooks/useCurrencyConvetor'
import { InputBox } from './componenets'

function App() {
    
const [fromAmount,setFromAmount]=useState()
const [fromCurrency,setFromCurrency]=useState('inr')
const [toAmount,setToAmount]=useState()
const [toCurrency,setToCurrency]=useState('usd')

const currency=useCurrencyConvetor(fromCurrency)
const currencyArr=Object.keys(currency);
let convertAmt=0;
function convert(e){
  e.preventDefault();
  convertAmt=fromAmount* currency[toCurrency]
  setToAmount(convertAmt)
}
function swap(){
  setFromAmount(toAmount)
  setToAmount(fromAmount)
  setFromCurrency(toCurrency)
  setToCurrency(fromCurrency)
}
  return (
      <div
          className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
          style={{
              backgroundColor:'black',
          }}
      >
          <div className="w-full">
              <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                  <form
                      // onSubmit={(e) => {
                      //     e.preventDefault();
                         
                      // }}
                  >
                      <div className="w-full mb-1">
                          <InputBox
                              label="From"
                              amount={fromAmount}
                              onAmountChang={setFromAmount}
                              onCuurencyChange={setFromCurrency}
                              defualtCurrency={fromCurrency}
                              isAmountDisable={false}
                              isCurrencyDisable={false}
                              currencyArr={currencyArr}
                          />
                      </div>
                      <div className="relative w-full h-0.5">
                          <button
                              type="button"
                              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                              onClick={swap}
                          >
                              swap
                          </button>
                      </div>
                      <div className="w-full mt-1 mb-4">
                          <InputBox
                              label="To"
                              amount={toAmount}
                              onAmountChang={setToAmount}
                              onCuurencyChange={setToCurrency}
                              defualtCurrency={toCurrency}
                              isAmountDisable={false}
                              isCurrencyDisable={false}
                              currencyArr={currencyArr}
                          />
                      </div>
                      <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg" onClick={convert}>
                          Convert 
                      </button>
                  </form>
              </div>
          </div>
      </div>
  )
}

export default App;
