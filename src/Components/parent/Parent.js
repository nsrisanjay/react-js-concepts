import Child from "../child/Child";
import { useState } from "react";
function Parent()
{
    let a=10
    let [old,change]=useState('')
    function getDataFromChild(x)
    {   
        change(x)
    }
    return(
        <div className="bg-secondary mt-5 p-5 text-center">
            <h1>parent component</h1>
            <h1>{old}</h1>
        <Child func={getDataFromChild} data={a}/>
        </div>
        
    );
}

export default Parent;