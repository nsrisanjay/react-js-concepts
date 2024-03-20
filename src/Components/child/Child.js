function Child(props)
{
    let b=1234
    return(
        <div className="bg-warning text-center p-5">
            <h1>child component</h1>
            <h3 className="text-danger lead fs-2">data from parent is {props.data}</h3>
            <button className="btn btn-primary" onClick={()=>props.func(b)}>transfer to parent</button>
        </div>
    );
}


export default Child;