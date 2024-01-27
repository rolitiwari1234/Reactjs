
import logo from './logo.svg';
import './App.css';
import React from 'react'

class App extends React.Component{
    constructor()

    {
        super();
        this.state = {
            data : "yashi"
        }
    }
    render(){
        

        return(
            <div>
                <h1>hello world {this.state.data}</h1>
            </div>
        )
    }
}


export default App;
