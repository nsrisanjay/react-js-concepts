// REACT HOOK FORM
import {useForm} from 'react-hook-form'
function Formdemo2()
{
    // we need to register the input fields to the useForm hook so that all validations are taken care of the useForm hook.
    // for displaying error messages we add 3rd object during object destructuring on useForm() 
    let {register,handleSubmit,formState:{errors}}=useForm()
    // use form hook internally manages the changes in the inputs fields
    function handleFormSubmit(x){
        console.log(x)
    }
    // console.log(errors)
    return(
        <div>
            <h1 className="text-center text-primary bg-dark display-4 p-2">FORM VALIDATION AND CREATION</h1>
            <form className="w-50 mx-auto" onSubmit={handleSubmit(handleFormSubmit)}>
                {/* username */}
                <div className="mb-3">
                    <label htmlFor="username" className="form-label">Username</label>
                    {/* input registration can be done by {...register('inputFieldName')} */}
                    <input type="text" id="username" className="form-control" 
                    {...register("username",{ required:true })} 
                    />
                    {/* validation error message for username */}
                    {errors.username?.type==='required' && <p className='text-danger'>USERNAME IS A REQUIRED FIELD</p>}
                </div>
                {/* email */}
                <div className="bg-whitemb-3">
                    <label htmlFor="email" className="form-label">Email</label>
                    <input type="email" id="email" className="form-control" 
                    {...register('email',{required:true})}
                    />
                    {/* validation errormessage for email */}
                    {errors.email?.type==='required' && <p className='text-danger'>EMAIL IS A REQUIRED FIELD</p>}
                    {/* the error message needs to be compared when the errors.email object is not empty... hence email?
                    is the indication.
                    ie if errors is not empty then checks username if empty then it is ignored */}
                    
                </div>
                {/* SUBMIT BUTTON */}
                <button className="btn btn-dark" type="submit">LOGIN</button>
            </form>
        </div>
    );
}
/* FORM VALIDATIONS :
1. REQUIRED : if true then it means that this input field is a required field
2. MIN
3. MAX
4. MINLENGTH
5. MAXLENGTH
6. PATTERN */

export default Formdemo2;