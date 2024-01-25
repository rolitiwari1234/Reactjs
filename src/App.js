
import logo from './logo.svg';
import './App.css';
import Student from './Student'


function App(){
 
return (
    <div className="App">
     <h1>class component</h1>
    <Student name = {"yashi"} email = "roli@gmail.com" other = {{address:'mainpuri',mobile:'000'}}/>
     <Student name = {"roli"} email = "roli@gmail.com" other = {{address:'mainpuri',mobile:'555'}}/>
    <Student name = {"ragini"} email = "roli@gmail.com" other = {{address:'mainpuri',mobile:'777'}}/> 
    </div>)
};


export default App;
