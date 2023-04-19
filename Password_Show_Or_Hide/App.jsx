import React, {useState, useRef} from 'react'
import IMG from "./Password_Show_Or_Hide/Eye.png"
import STYLE from "./Password_Show_Or_Hide/global.css"


const App = () => {

    let [password,setPassword] = useState(false)

    let showPassword=()=>{
        if(password==true){
            setPassword(false)
        }
        else{
            setPassword(true)
        }
    }
  return (
    <>
        <br />
      <div className='mainBlock'>
        <input type={password ? "text" : "password"} name="" id="password" placeholder='Enter Password' />
        <img src={IMG} alt="Eye" onClick={showPassword}/>
    </div>
    </>

  )
}

export default App