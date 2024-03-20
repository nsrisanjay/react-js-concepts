import React from 'react'
import Navbar from '../../Components/navbar/Navbar'
import Footer from '../../Components/footer/Footer'
import { Outlet } from 'react-router-dom'
function Rootlayout() {
  return (
    <div>
        <Navbar/>
        <div style={{minHeight: '85vh'}}>
        <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Rootlayout