import Counterc from "../counterc/Counterc";
import { useState } from "react";
function Counterp()
{
  let [counter,countchange]=useState(0)
  function increase(a)
  { 
    countchange(a+1)
  }
  function decrease(a)
  {
    countchange(a-1)
  }
  return (
    <div className="bg-dark d-block mx-auto w-50 text-center p-3 mt-5 rounded">
        <h1 className="text-white">THIS IS PARENT</h1>
      <h1 className="text-white border w-50 mx-auto rounded m-3 p-2">COUNTER : {counter}</h1>
      <Counterc inc={increase} dec={decrease} data={counter}/>
    </div>
  );
}


export default Counterp;