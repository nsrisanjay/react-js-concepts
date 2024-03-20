// changing state of a component can be done by useState hook(all states in react are immutable)
// [current state,function to change current state] = useState(initial state)
// useState hook returns an array containing 2 elements.
import {useState} from 'react'
// importing hook from library...
function Statehook()
{
    // let counter=1;
    let [counter,setCounter]=useState(1);
    let [name,setName]=useState('sanjay');
    let [emp,setEmp]=useState({eid:100,ename:'sanjayemp'})
    let [x,setX]=useState([1,2,3,4])
    function incrementCounter()
    {
        // modify the state
        setCounter(counter+1);
    }
    function changeName()
    {
        setName('vnrvjiet'+name+"sanjay")
    }
    function changeEmp()
    {
        /*setEmp({ename:"sanjay22"})*/
        // here existing object is replaced with new members..
        // hence we create copy to save the old data.
        // here in this case we loose emp id.
        setEmp({...emp,ename:"sanjay22",esal:10000})
        // we use spread operator by which a copy is created and the properties of old object are not lost upon replacement.
    }
    function changeX()
    {
        setX(['sanjay',...x])
    }
    function deleteX()
    {
        // create copy
        let copy=[...x]
        // remove a ele from copy
        copy.pop()
        setX(copy)
    }
    return(
        <div className='text-center mt-5'>
            <h1>{counter}</h1>
            <h1>{name}</h1>
            <button className='btn btn-success p-2 mx-2' onClick={incrementCounter}>Increment</button>
            <button className="btn btn-primary p-2 mx-2" onClick={changeName}>changename</button>
            <br />
            <h1>{emp.eid}</h1>
            <h1>{emp.ename}</h1>
            <h1>{emp.esal}</h1>
            <button className="btn btn-dark p-2 mx-2" onClick={changeEmp}>modify</button>
            {x.map((x,key)=><h1 key={key}>{x}</h1>)}
            <button className="btn btn-danger p-2 mx-2" onClick={changeX}>change X</button>  
            <button className="btn btn-danger p-2 mx-2" onClick={deleteX}>deleteX</button> 
        </div>
    )
}

export default Statehook;

