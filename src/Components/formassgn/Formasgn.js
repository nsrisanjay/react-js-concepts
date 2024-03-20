import {useForm} from 'react-hook-form'
import './formassgn.css'
function Formasgn()
{
    let {register,handleSubmit,formState:{errors}} = useForm()
    function handleFormSubmit(x)
    {
        console.log(x)
    }
    return(
        <div>
            <form action="" onSubmit={handleSubmit(handleFormSubmit)}>
                <h3>Registration form</h3>
            <div className="mainform mx-auto p-3 mt-5">
                <div className='left'>
                    {/* firstname */}
                    <div className='mb-3'>
                        <label htmlFor="firstname" className='form-label'>Firstname</label>
                        <input type="text" id="firstname" className='form-control' {...register('firstname',{required:true,minLength:4,maxLength:6})} />
                        {errors.firstname?.type==='required' && <p className='text-danger'>Firstname is required field</p>}
                        {errors.firstname?.type==='minLength' && <p className='text-danger'>enter atleast 4 characters</p>}
                        {errors.firstname?.type==='maxLength' && <p className='text-danger'>maximum of 6 characters</p>}
                    </div>
                    {/* date of birth */}
                    <div className="mb-3">
                        <label htmlFor="dateofbirth" className='form-label'>Date of Birth</label>
                        <input type="date" id="dateofbirth" className='form-control' {...register('dateofbirth',{required:true})} />
                        {errors.dateofbirth?.type==='required' && <p className='text-danger'>Date of Birth is required field</p>}
                    </div>
                    {/* email */}
                    <div className="mb-3">
                        <label htmlFor="email" className='form-label'>Email</label>
                        <input type="email" id="email" className="form-control" {...register('email',{required:true})} />
                        {errors.email?.type==='required' && <p className='text-danger'>Email is required field</p>}
                    </div>
                </div>
                <div className='right'>
                    {/* lastname */}
                    <div className='mb-3'>
                        <label htmlFor="lastname" className='form-label'>Lastname</label>
                        <input type="text" id='lastname' className='form-control' {...register('lastname',{required:true,minLength:4,maxLength:6})} />
                        {errors.lastname?.type==='required' && <p className='text-danger'>Lastname is required field</p>}
                        {errors.lastname?.type==='minLength' && <p className='text-danger'>enter atleast 4 characters</p>}
                        {errors.lastname?.type==='maxLength' && <p className='text-danger'>maximum of 6 characters</p>}
                    </div>
                    <div className="mb-3">
                        {/* gender */}
                        <label htmlFor="gender" className='form-label'>Gender</label>
                        <br />
                        <input type="radio" name="gender" value="Male" className='mx-2' {...register('gender',{required:true})} />Male
                        <input type="radio" name="gender" value="Female"className='mx-2' {...register('gender',{required:true})}/>Female  
                        {errors.gender?.type==='required' && <p className='text-danger'>Gender is required field</p>}
                    </div>
                    <div className="mb-3">
                        {/* phone number */}
                        <label htmlFor="phno" className="form-label">Phone No.</label>
                        <input type="text" id="number" className='form-control' {...register('phno',{required:true,minLength:10,maxLength:10})} />
                        {errors.phno?.type==='required' && <p className='text-danger'>Phone No. is required field</p>}
                        {errors.phno?.type==='minLength' && <p className='text-danger'>length of phno must be 10</p>}
                    </div>  
                </div>
            </div>
            <div className="sub">
                    <label htmlFor="subject" className='form-label'>Subject</label>
                    <select name="subject" id="subject" className='form-select' placeholder='choose' {...register('subject',{required:true})}>
                        <option></option>
                        <option value="sub1">Subject 1</option>
                        <option value="sub2">Subject 2</option>
                        <option value="sub3">Subject 3</option>
                        <option value="sub4">Subject 4</option>
                    </select>
                    {errors.subject?.type==='required' && <p className='text-danger'>Subject is required field</p>}
            </div>
                <button className="btn btn-dark d-block mx-auto mt-3">SUBMIT</button>
            </form>
        </div>
    );
}



export default Formasgn;