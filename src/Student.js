import React from 'react'

export default class Student extends React.Component{
    render(){
        console.log(this.props)
        return(
            <div style = {{backgroundColor:"Highlight",margin:"10"}}>
                <h1>students  {this.props.name}</h1>
                <h3>{this.props.email}</h3>
                </div>
        )
    }
}