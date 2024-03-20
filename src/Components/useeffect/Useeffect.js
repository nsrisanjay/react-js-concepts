// useEffect hook does not return anything...
// useEffect hook executes once components in rendered first
// it is executed everytime when state of the any component is changing.
// if we want the useEffect hook to work only when a certain component is changed
import {useEffect,useState} from "react";
import Usercount from "../user-count/Usercount";
import './Useeffect.css'
function Useeffect()
{
    let [counter,setCounter]=useState(0)
    function incount(x)
    {
        setCounter(x+1)
    }
    let [users,setUsers]=useState([])
    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/users')
        .then(res=>res.json())
        .then(usersList=>setUsers(usersList))
    },[])

    console.log(users)

    return(
        <div>
             <h1 className="text-center bg-dark text-primary display-3">ASSIGNMENT-6</h1>
            <Usercount data={counter}/>
        <div className="allcards">
             {
                users.map(ele=><div className="car rounded p-3" key={ele.id}><h4>{ele.name}</h4>
                    <h5 className="w-100">{ele.email}</h5>
                    <h4>{ele.username}</h4>
                    <p className="lead m-1 w-100">{ele.address.suite +" "+ ele.address.street +" "+ ele.address.city +" "+ ele.address.zipcode}</p>
                    <h5>{ele.company.name}</h5>
                    <button className="btn btn-dark mt-4" onClick={()=>incount(counter)}>ADD USER</button>
                </div>)
             }
            </div>
        </div>
           
    );
}
export default Useeffect;