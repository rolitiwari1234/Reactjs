import './App.css';
import React, { useState,useEffect } from 'react'

function App (props){
  useEffect(()=>{
    alert("count is"+props.count)
  },[props.count,props.data])
   
  return(
   <div className='App'>
    <h1>count props : {props .count}</h1>
    <h1>data props : {props .data}</h1>
    
   </div>
    )
  }
  
   
 export default App;