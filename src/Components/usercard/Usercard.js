import '../usercard/Usercard.css'

function Usercard(props)
{
    return(
        <div className="card">
            <img src={props.avatar} width="50%" height="150px" alt="" className="d-block mx-auto" />{/* profile pic */}
            <h2>{props.id}</h2> {/* first name*/}
            <h4>{props.email}</h4> {/* last name*/}
            <h3 className="text-warning">{props.name}</h3> {/*email*/}
            <button className="btn btn-dark" onClick={()=>props.func(props.data)}>ADD USER</button>
        </div>
    )
}


export default Usercard;