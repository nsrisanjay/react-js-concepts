import React, { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'

import { Conetexts } from '../../contexts/Conetexts'
function Add() {
  let { register, handleSubmit, formState: { errors } } = useForm()
  let [tasks,setTasks] = useContext(Conetexts)
  function handleFormSubmit(x) {
    // access tasks array from context api
    setTasks([...tasks, x])
    console.log(x)
  }
  return (
    <div className='bg-dark p-3'>
      <form action="" className='w-75 bg-light mx-auto p-4 rounded' onSubmit={handleSubmit(handleFormSubmit)}>
        <div className="mb-3">
          <label htmlFor="taskname" className="form-label">Task name :</label>
          <input type="text" name="taskname" id="" className="form-control" {...register('taskname',{required:true})} />
        </div>
        <div className="mb-3">
          <label htmlFor="duration" className='form-label'>Duration :</label>
          <input type="text" name="duration" id="" className="form-control" {...register('duration')} />
        </div>
        <div className="mb-3">
        <label htmlFor="status" className='form-label'>Status :</label>
                        <br />
                        <input type="radio"  value="complete" className='mx-2' {...register('status',{required:true})} />Complete
                        <input type="radio"  value="pending" className='mx-2' {...register('status',{required:true})}/>Pending
        </div>
        <button className="btn btn-dark d-block mx-auto mt-2" type='submit'>ADD TASK</button>
      </form>
    </div>
  )
}

export default Add