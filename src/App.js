import React from 'react'
import './App.css';
import './style.css'
import style from './custom.module.css'
function App (){
  
   
  return(
   <div className='App'>
   <h1 className='prime'>style 1 in react js</h1>
    <h1 style = {{backgroundColor:"red",color:"blue"}} >style 1 in react js</h1> 
    <h1 className = {style.h1}>style 1 in react js</h1>
   </div>
    )
  }
  
   
 export default App;
 