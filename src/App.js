

import './App.css';
import React, { useState,useEffect } from 'react'

function App (){
  const[count,setCount] = useState(0)
   useEffect(()=>{
    console.warn("useEffect")
   })
   

  return(
   <div className='App'>
    <h1>useEffect in react {count}</h1>
    <button onClick={()=>setCount(count+1)}>update counter</button>
   </div>
    )
  }
  
   
 export default App;
