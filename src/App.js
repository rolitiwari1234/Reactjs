
import Users from './Users'
import './App.css';
import React, { useState,useEffect } from 'react'

function App (){
  const[data,setData]=useState(10)
  const [count,setCount] =useState(100)
  
   
  return(
   <div className='App'>
   
     <Users count = {count} data = {data} /> 
    <button onClick={()=>setCount(count+1)}>update count</button>
    <button onClick={()=>setData(data+1)}>update data</button>
   </div>
    )
  }
  
   
 export default App;
