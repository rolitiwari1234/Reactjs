import React,{useState} from 'react'

function Login(){
    
    const [user,setUser] = useState("")
    const [password,setPassword] = useState("")
    const [userErr,setUserErr] =useState(false)
    const [passErr,setPassErr] = useState(false)
    
    function loginHandle(e)
    {
    if(user.length < 3 || password.length < 6 )
    {
     alert("type correct value")
    }
     else{
        alert("all good:)")
     }
        
        e.preventDefault()
     }

    function userHandler(e){
        let item = e.target.value;
        if(item.length  < 3)
        {
       setUserErr(true)
        }
        else
        {
         setUserErr(false)
        }
        setUser(item)
    }

        function passwordHandler(e){
            let item = e.target.value;
            if(item.length < 6)
            {
                setPassErr(true)
            }
            else{
                setPassErr(false)
            }
            setPassword(item)
        }
    
       
    return(
        <div>
            <h1 onSubmit={loginHandle}>Login app</h1>
            <form>
            <input type = "text" placeholder = "enter   user  id" onChange={userHandler}/> { userErr? <span>user not valid</span>:""}<br/><br/>
            <input type = "text" placeholder = "enter   user  password" onChange={passwordHandler}/> {passErr ? <span>password not valid</span> :""}  <br/><br/>
            <button type = "submit">login</button> 
            </form>    
            </div>
    )
}
export default Login;