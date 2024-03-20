import React from 'react'
import Add from './Add'
import TaskCount from './TaskCount'
import TaskList from './TaskList'
import { Conetexts } from '../../contexts/Conetexts'
import { useContext,useState } from 'react'
function ManageTask() {
  // main driver
  let [compTasks, setCompTasks] = useState(0)
  let [tasks,setTasks] = useContext(Conetexts)
  // uncompleted tasks is total array (length-comptasks)
  function inCompTasks(x,index) {
    // send this func into forms and use onclick for this function in that table
    setCompTasks(x + 1)
    let copy = [...tasks]
    copy.splice(index,1)
    setTasks(copy)
  }
  function delTask(index)
  {
    let copy = [...tasks]
    copy.splice(index,1)
    setTasks(copy)
  }
  return (
    <div>
      <div className=''>
        <Add className=''/>
        <TaskCount data={tasks} func2={inCompTasks} data2={compTasks}/>
      </div>
        <TaskList data={tasks} func={delTask} func2={inCompTasks} data2={compTasks}/>
    </div>
  )
}

export default ManageTask