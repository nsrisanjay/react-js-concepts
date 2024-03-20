import { useState } from "react";

function Usercount(props) // {data:counter}
{
    
    return(
        <div>
            <h1 className="m-5 text-center bg-dark text-warning w-50 mx-auto rounded">COUNTER : {props.data}</h1>
        </div>
    );
}



export default Usercount