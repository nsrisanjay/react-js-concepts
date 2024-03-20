import React, { useState } from 'react'
import { Conetexts } from './Conetexts'

function Store({children}) {
    let [tasks,setTasks] = useState([])
  return (
    <Conetexts.Provider value={[tasks,setTasks]}>
        {children}
    </Conetexts.Provider>
  )
}

export default Store