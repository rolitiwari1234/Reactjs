import React,{useState} from 'react'
import logo from './logo.svg';
import './App.css';
import Student from './Student'


function App(){
 const [name,setName]=useState("anil")
return (
    <div className="App">
     <h1>class component</h1>
    <Student name = {name} />
    <button onClick = {()=>{setName("siddu")}}>update data</button>
     
    </div>)
};


export default App;
