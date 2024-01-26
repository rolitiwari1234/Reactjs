import React from 'react'
import logo from './logo.svg';
import './App.css';

function App(){
  const [status,setStatus] = React.useState(true)
  
return (
    <div className="App">
     {
      status ?<h1>hello world !</h1> : null
     }
     {/* <button onClick = {()=>setStatus(false)}>hide</button>
     <button onClick = {()=>setStatus(true)}>show</button> */}
     <button onClick = {()=>setStatus(!status)}>toogle</button>
     </div>
    )
}


export default App;
