
import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component{

    constructor(){
        super();
        this.state = {
            name:"roli"
        }
        console.warn("constructor")
    }

    componentDidMount(){
        console.warn("componentDidMount")
    }
    render()
    { 
        console.warn("render")       
    return(
    <div className = "App">
        <h1>component did mount {this.state.name}</h1>
        <button onClick={()=>{this.setState({name:"yashi"})}}>update name</button>
        
    </div>
)
}  
} 
 export default App;
