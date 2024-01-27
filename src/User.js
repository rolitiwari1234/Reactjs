import React from 'react'

function User(props) {
    return(
        <div>
            <h2>user page</h2>
            <button onClick={props.data}>call data function</button>
        </div>
    )
}
export default User;