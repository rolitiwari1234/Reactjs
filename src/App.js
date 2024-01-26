import {useState} from 'react'
import logo from './logo.svg';
import './App.css';

function App(){
  const [name,setName] = useState("")
  const [tnc,setTnc] = useState(false)
  const [interest,setInterest] = useState("")
  function getFormData(e)
  {
    console.warn(name,tnc,interest)
   e.preventDefault()
  }
  
return (
    <div className="App">
     <h2>Handle from in react</h2>
     <form onSubmit = {getFormData}>
     <input type = "text" placeholder="enter name"value = {name} onChange={(e)=>setName(e.target.value)}/><br/><br/>
     <select onChange={(e)=>setInterest(e.target.value)}>
      <option>select option</option>
      <option>marvel</option>
      <option>cd</option>
     </select><br/><br/>
     <input type = "checkbox" onChange={(e)=>setTnc(e.target.checked)}/><span>Accept term and conditional</span><br/><br/>
     <button type = "submit">submit</button>
     <button >clear</button>
      </form>
     </div>
    )
}


export default App;
