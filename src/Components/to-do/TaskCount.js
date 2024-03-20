import React from 'react'

function TaskCount(props) {
  // access tasks array from context api and prints its length.
  return (
    <div className='d-flex bg-dark justify-content-center' >
      <h3 className='bg-light m-3 p-3 rounded'>Task Count : {props.data.length}</h3>
      <h3 className='bg-light m-3 p-3 rounded'>Completed Tasks : {props.data2}</h3>
    </div>
  )
}

export default TaskCount