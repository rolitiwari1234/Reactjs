import React from 'react'
import App from './App'

class Unmount extends React.Component{
    componentWillUnmount(){
        console.warn("componentWillUnmount")
    }
    render(){


        return(
            <div className='App'>
                <h1>unmount component</h1>
            </div>
        )
    }
}
export default Unmount;