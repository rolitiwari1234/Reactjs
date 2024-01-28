

import './App.css';
import React from 'react'
import Unmount from './Unmount';
class App extends React.Component{

  constructor(){
    super();
    this.state = {
      show:true
    }
  }
  render(){
  return(
   <div className='App'>
    {
   this.state.show ?<Unmount /> :<h1>child component removed</h1>
    }
   <button onClick={()=>this.setState({show:!this.state.show})}>toggle child component</button>
   </div>
    )
   }
  }
   
 export default App;
