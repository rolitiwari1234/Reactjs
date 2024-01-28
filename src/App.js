

import './App.css';
import React from 'react'

class App extends React.Component{
 constructor(){
  super();
  this.state = {
    count :0
  }
}
shouldComponentUpdate(){
  console.warn("shouldComponentUpdate",this.state.count)
  if(this.state.count > 5 && this.state.count < 10)
  {
    return true;
  }
  
  }
  
render(){
   return(
   <div className='App'>
   <h2> should component  update {this.state.count} </h2>
   <button onClick={()=>{this.setState({ count:this.state.count+1})}}>update name</button>
   </div>
    )
    
   
   }
  }
 export default App;
