import react, { useState } from 'react'
function Formdemo1()
{
let [username,setUsername]=useState('')
let [password,setPassword]=useState('')

    function handleUsername(event)
    {
        setUsername(event.target.value)
    }

    function handleSubmit(event)
    {
        event.preventDefault()// prevents reload of the page.
        // the register function will take care of onChange event handling
        console.log(username)
        console.log(password)
    }

    function handlePassword(event)
    {
        setPassword(event.target.value)
    }

    return(
        <div>
            <h1 className='text-center display-3 bg-dark text-primary p-2'>THIS IS A FORM</h1>
            <form action="" className='w-50 mx-auto mt-3' onSubmit={handleSubmit}>
                <div className="mb-4 w-50">
                    <label htmlFor="username" className='form-label'>Username</label>
                    <input type="text" name='username' id='username' className='form-control' onChange={handleUsername} />
                </div>
                <div className="mb-4 w-50">
                    <label htmlFor="password" className='form-label'>Password</label>
                    <input type="password" name="password" id="password" className='form-control' onChange={handlePassword} />
                </div>
                <button type="submit" className='btn btn-dark p-2 '>LOGIN</button>
            </form>
        </div>
    );
}
// for every change that is made to the input field onChange event is fired.

export default Formdemo1;

