
import logo from './logo.svg';
import './App.css';
import React from 'react'
import Cycle from './Cycle';

function App(){
    const [name,setName] = React.useState("yashi")
    return(
    <div>
        <h1> Render method in react</h1>
        <Cycle />
        {/* <button onClick={()=>setName("roli")}>update name</button> */}
    </div>
)
}  
    
 export default App;
