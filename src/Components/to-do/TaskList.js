import React from 'react'

function TaskList(props) {
  // create a table and send the array to tasklist as child of add

  return (
    <div>
      <h1 className="display-5 bg-light text-center text-primary rounded mx-auto  p-2   ">TASKS LIST</h1>
                <table className="table text-center border-2 m-4 table-primary  mx-auto">
                    <thead>
                        <tr>
                            <th>TASK NAME</th>
                            <th>DURATION</th>
                            <th>STATUS</th>
                            <th>Operations</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            props.data.map((ele,index)=><tr key={index}>
                                <td>{ele.taskname}</td>
                                <td>{ele.duration}</td>
                                <td>{ele.status}</td>
                                <td>
                                    <button className="btn btn-dark mx-2" onClick={()=>props.func(index)}>D</button>
                                    <button className="btn btn-success" onClick={()=>props.func2(props.data2)}>C</button>
                                </td>
                            </tr>)
                        }
                    </tbody>
                </table>
    </div>
  )
}

export default TaskList