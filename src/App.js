import React from 'react'
import './App.css';

function App (){
  // const students = ["roli","yashi","ryg","hgg"];
  const students = [
    {name : "roli",gmail : "roli@gmail.com",contact : 333 },
    {name : "yashi",gmail : "yashi@gmail.com",contact : 111},
    {name : "tiwari",gmail : "tiwari@gmail.com",contact:222}
  ]
 return(
   <div className='App'>
   <h2>install bootstrap</h2>
   <table border = "1">
    <tr>
      <td>name</td>
      <td>gmail</td>
      <td>contact</td>
    </tr>
  {
    students.map((data)=>
    <tr> 
      <td> {data.name}</td>
      <td>{data.gmail}</td>
      <td>{data.contact}</td>
        </tr>
    )
  }
  </table>
  </div>
      )}
   
   export default App;
 