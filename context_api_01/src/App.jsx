import { useState } from 'react'
import './App.css'
import UserContextProvider from './context/UserContextProvider'
import GetData from './components/GetData'
import CustomerContextProvider from './context/CustomerContextProvider'
import GetCustData from './components/GetCustData'
import PostCustData from './components/PostCustData'

function App() {

  return (
    <>
    {/* <UserContextProvider> */}
      {/* <GetData/> */}
    {/* </UserContextProvider> */}


    <CustomerContextProvider>
      <PostCustData/>
      <GetCustData/>
    </CustomerContextProvider>
    </>
  )
}

export default App
