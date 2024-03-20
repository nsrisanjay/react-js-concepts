import React from 'react'
import { useForm } from 'react-hook-form'
import {useNavigate,Link} from 'react-router-dom'
// for hashing password and storing in local API
// hashsync synchronously hashes password
import {hashSync} from 'bcryptjs'
function Signup() {
  let {register,handleSubmit}=useForm();
  let navigate = useNavigate() // return a function
  function handleSubmitForm(newUser)
  {
    // make http post request to store user data in local API
    // any kind of http request we can make by using the fetch function
    // if we dont pass the 2nd argument it will by default be considered as http get request
    // hash tha password
    let hashedPassword = hashSync(newUser.password,4)
    // replace plain password with hashed password
    newUser.password = hashedPassword;
    fetch('http://localhost:4000/users',{
      method:"POST",
      headers: {"Content-Type":"application/json"},
      // here we need to convert java script object(newUser) into json
      body:JSON.stringify(newUser)
    })
    .then(res=>
      {
        if(res.status===201)// confirmation for the creation of the new user
        // then navigate to login page after the user registration
        {
          navigate('/login')
        }
      })
    .catch(err=>console.log(err,"we have an error!"))
  }
  return (
    <div >
        <h3 className="display-4 text-center text-success" >NEW? SIGNUP HERE!</h3>
        <br />
        <form action="" className='w-50 d-block mx-auto' onSubmit={handleSubmit(handleSubmitForm)}>
          <div className="mb-3">
            <label htmlFor="email" className='form-label'>Email :</label><br />
            <input type="email" name="email" id="" className='form-control' {...register('email')}/>
          </div>
          <div className="mb-3">
          <label htmlFor="username"className='form-label'>username :</label><br />
            <input type="text" name="username" id="" className='form-control' {...register('username')}/>
          </div>
          <div className="mb-3">
          <label htmlFor="password"className='form-label'>Password :</label><br />
            <input type="password" name="password" id="" className='form-control'{...register('password')}/>
          </div>
          <button className="btn btn-dark" type='submit'>REGISTER</button>
        </form>
        <p className='lead text-center'>
          already registered  
          <Link to='/login'>
            Click here!
          </Link>
        </p>
    </div>
  )
}

export default Signup