import React from 'react'
import STYLE from "./Counter_Application_using_Function_Based_Component/global.css"

const App = () => {

  let [count,setCount]=React.useState(0)

  let handleIncrement=()=>{
    setCount(count+1)
  }

  let handleDecrement=()=>{
    setCount(count-1)
  }

  let handleReset=()=>{
    setCount(0)
  }

  return (
    <>
    <h1>COUNTER APPLICATION</h1>
    <div className='mainBlock'>
      <h2>{count}</h2>
      <div className='btngrp'>
        <button onClick={handleIncrement}>+ Increment</button>
        <button onClick={handleDecrement}>- Decrement</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
    </>
  )
}

export default App