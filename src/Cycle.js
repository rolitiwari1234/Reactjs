import React from 'react'

class Cycle extends React.Component{
    constructor(){
        super();
        this.state = {
            email:"roli@gmail.com"
        }
    }

    render()
    {
        console.warn("cycle rendering",this.state.email)
        return(
            <div>
                <h1> user component </h1>
                <button onClick={()=>this.setState({email:"yashi@gmail.com"})}>update email</button>
            </div>
        )
        }
}
export default Cycle;