import React from 'react'
import { Link,Outlet } from 'react-router-dom'
function Technologies() {
    
  return (
    <div>
        <ul className='nav justify-content-center gap-5'>
                <li>
                    {/* link to JAVA */}
                    <Link to="java" className='nav-item nav-link active' >
                        JAVA
                    </Link>
                </li>
                <li>
                    {/* link to REACT */}
                    <Link to="react-js" className='nav-item nav-link active'>
                        REACT-JS
                    </Link>
                </li>
                <li>
                    {/* link to PYTHON */}
                    <Link to="python" className='nav-item nav-link active'>
                        PYTHON
                    </Link>
                </li>
            </ul>
        <Outlet/>   
        {/* place holder for the components to be rendered
        should be used in parent route elements to render their child route elements. */}
    </div>
  )
}

export default Technologies