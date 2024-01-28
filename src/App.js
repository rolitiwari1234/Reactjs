

import './App.css';
import React, { useState,useEffect } from 'react'

function App (){
  const[data,setData] = useState("Roli")


  return(
   <div className='App'>
    <h1>{data} !</h1>
    <button onClick={()=>setData("tiwari")}>update hook</button>
   </div>
    )
  }
  
   
 export default App;
