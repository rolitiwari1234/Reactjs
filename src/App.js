import React from 'react'
import logo from './logo.svg';
import './App.css';
import Student from './Student'



class App extends React.Component{
  constructor(){
    super();
    this.state = {
      name:"roli"
    }
  }
  render(){
return (
    <div className="App">
     <h1>props</h1>
    <Student name = {this.state.name} email = "anil@gmail.com" />
    <button onClick={()=>this.setState({name:"yashi"})}>click me</button>
    </div>
    )

}
}

export default App;
