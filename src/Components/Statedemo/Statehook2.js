import { useState } from "react";
import './Statehook2.css'
function Statehook2()
{
      let us=[
        {
          id: 1,
          email: "michael.lawson@reqres.in",
          first_name: "Michael",
          last_name: "Lawson",
          avatar: "https://reqres.in/img/faces/7-image.jpg",
        },
        {
          id: 2,
          email: "lindsay.ferguson@reqres.in",
          first_name: "Lindsay",
          last_name: "Ferguson",
          avatar: "https://reqres.in/img/faces/8-image.jpg",
        },
        {
          id: 3,
          email: "tobias.funke@reqres.in",
          first_name: "Tobias",
          last_name: "Funke",
          avatar: "https://reqres.in/img/faces/9-image.jpg",
        },
        {
          id: 4,
          email: "byron.fields@reqres.in",
          first_name: "Byron",
          last_name: "Fields",
          avatar: "https://reqres.in/img/faces/10-image.jpg",
        },
        {
          id: 5,
          email: "george.edwards@reqres.in",
          first_name: "George",
          last_name: "Edwards",
          avatar: "https://reqres.in/img/faces/11-image.jpg",
        },
        {
          id: 6,
          email: "rachel.howell@reqres.in",
          first_name: "Rachel",
          last_name: "Howell",
          avatar: "https://reqres.in/img/faces/12-image.jpg",
        },
      ];
      let x=us.length
      let [ind,setInd]=useState(0);
      function changeIndInc()
      {
        if(ind<us.length-1)
          setInd(ind+1)
        else setInd(0)
      }
      function changeIndDec()
      {
        if(ind>0)
          setInd(ind-1)
        else setInd(x-1)
      }
      return(
        <div>
            <div className="car mt-5" style={{width: "18 rem;"}}>
                <img src={us[ind].avatar} width="200px" height="200px" alt="Card image cap"/>
                <h4 className="card-title m-2">{us[ind].first_name +" "+us[ind].last_name}</h4>
                <h6 className="m-2">{us[ind].email}</h6>
                <p className="lead m-3">id : {us[ind].id}</p>
            </div>
            <div className="text-center">
            <button className="btn btn-primary mx-5 mt-5" onClick={changeIndInc}>NEXT</button>
            <button className="btn btn-primary mx-5 mt-5" onClick={changeIndDec}>PREVIOUS</button>
            </div>
            
        </div>
    );
}

export default Statehook2;