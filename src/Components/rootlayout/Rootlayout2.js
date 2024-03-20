import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar2 from '../navbar/Navbar2'
// with local API
function Rootlayout2() {
  return (
    <div>
        <Navbar2/>
        <Outlet/>
    </div>
  )
}

export default Rootlayout2