function Student(props)
{
    console.log(props)
    return(
        <div style = {{backgroundColor:"skyblue",margin:10}}>
             <h1> hello  {props.name}</h1>
            {/* <h1> email:  {props.email}</h1> */}
            {/* <h4>address :{props.other.address}</h4>  */}
        </div>
    )
}
export default Student;