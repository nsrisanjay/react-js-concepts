import React from 'react'
import {useForm} from 'react-hook-form'
import { compareSync } from 'bcryptjs';
import { useNavigate } from 'react-router-dom';
function Login() {
  let {register,handleSubmit} = useForm();
  let navigate = useNavigate()
  function handleFormSubmit(x)
  {
    fetch(`http://localhost:4000/users?username=${x.username}`,
    {
      method:"GET"
    })
    .then(res=>res.json())
    .then(userObjArray=>{
      // userObjArray is an object inside array which consists of all user details
      if(userObjArray.length===0)
      {
        alert('invalid username')
      }
      // if username exists
      else{
        // compare passwords using compareSync
        let res = compareSync(x.password,userObjArray[0].password)
        if(res===true)
        {
          // navigate to user dashboard
          navigate('/user-dashboard')
        }
      }
    })
  }

  return (
    <div >
        <h3 className="display-4 text-center text-success">PLEASE LOGIN HERE!</h3>
        <form action="" className='w-50 d-block mx-auto' onSubmit={handleSubmit(handleFormSubmit)}>
          <div className="mb-3">
          <label htmlFor="username" className='form-label'>Username :</label>
          <br />
          <input type="text" name="username" id="" className='form-control'{...register('username')}/>
          </div>
          <div className="mb-3">
          <label htmlFor="password" className='form-label'>Password :</label>
          <br />
          <input type="password" name="password" id="" className='form-control'{...register('password')}/>
          </div>
          <p className="lead text-danger">FORGOT PASSWORD?</p>
          <button className="btn btn-dark">LOGIN</button> 
        </form>
    </div>
  )
}

export default Login