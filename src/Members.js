import React from 'react'

function Members(props) {
    return(
        <div>
            <h1>user component</h1>
            <button onClick={props.data}>call data function</button>
        </div>
    )
    
}
export default Members;