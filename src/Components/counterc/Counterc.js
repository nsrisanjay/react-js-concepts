function Counterc(props)
{
    return(
        <div className="p-5 m-2 bg-secondary rounded">
            <h1 className="text-warning ">THIS IS CHILD</h1>
            <button className="btn btn-warning p-2 m-3" onClick={()=>props.inc(props.data)}>INCREASE</button>
            <button className="btn btn-warning p-2 m-3" onClick={()=>props.dec(props.data)}>DECREASE</button>
        </div>
    );
}


export default Counterc;