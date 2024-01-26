import {useState} from 'react'

function Profile(){
    const [loggedIn,setLoggedIn] = useState(2)
    
    return(
        <div>
            {loggedIn == 1?<h2>welcome yashi 1</h2>: loggedIn == 2 ?<h2>welcome guest 2</h2>: <h2>welcome guest 3</h2>}
        </div>
    )
}
export default Profile;

