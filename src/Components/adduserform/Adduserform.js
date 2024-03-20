import {useForm} from 'react-hook-form'
import { useState } from 'react';
import Addusertable from './Addusertable';
function Adduserform()
{
    let {register,handleSubmit,formState:{errors}} = useForm();
    let [arr,modifyArr]=useState([])
    
    function handleSubmitForm(x)
    {
        modifyArr([...arr,x])
        console.log(arr)
    }
    // to delete user
    function deleteUser(x)
    {
        // console.log(x)
        let copy = [...arr]
        copy.splice(x,1)
        modifyArr(copy)
    }
    return(
        <div className='row'>
            <div className="col-sm-4">
            <h1 className="text-center text-danger">REGISTRATION FORM</h1>
            <form className=' mx-auto p-5 rounded' onSubmit={handleSubmit(handleSubmitForm)}>
                <div className="mb-3">
                    <label htmlFor="username" id='username' className='form-label'>Username</label>
                    <input type="text" name="username" id="username" className='form-control' {...register('username',{required:true,minLength:4,maxLength:8})} />
                    {errors.username?.type==='required' && <p className='text-danger'>This is required field.</p>}
                    {errors.username?.type==='maxLength' && <p className='text-danger'>Cannot exceed 8 characters</p>}
                    {errors.username?.type==='minLength' && <p className='text-danger'>Minimum of 4 characters required</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="dateofbirth" className='form-label'>Date of Birth</label>
                    <input type="date" name="dateofbirth" id="dateofbirth" className='form-control' {...register('dateofbirth',{required:true})} />
                    {errors.dateofbirth?.type==='required' && <p className='text-danger'>This is a required field</p>}
                </div>
                <div className="mb-3">
                    <label htmlFor="city" className='form-label'>City</label>
                    <select name="city" id="" className='form-select' {...register('city',{required:true})} defaultValue="">
                        <option value=""disabled>Choose a City</option>
                        <option value="hyderabad">Hyderabad</option>
                        <option value="Banglore">Banglore</option>
                        <option value="Chennai">Chennai</option>
                    </select>
                </div>
                <button className="btn btn-dark d-block mx-auto">ADD USER</button>
                <br />
            </form>
            </div> 
            <div className="col-sm-8">
            <Addusertable data={arr} func={deleteUser}/>
            </div>
        </div>
    );
}



export default Adduserform;