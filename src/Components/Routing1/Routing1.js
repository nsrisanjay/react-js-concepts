import React from 'react'
import {createBrowserRouter,RouterProvider } from 'react-router-dom'
import Rootlayout from './Components/rootlayout/Rootlayout';
import Home from './Components/home/Home';
import Login from './Components/login/Login';
import Signup from './Components/signup/Signup';
import Technologies from './Components/technologies/Technologies'
import Java from './Components/technologies/Java';
import Python from './Components/technologies/Python';
import Reactjs from './Components/technologies/Reactjs';
function Routing1() {
    let router = createBrowserRouter([
        {
          path:'',
          element:<Rootlayout/>,
          errorElement:<h1 className='text-danger m-5 text-center lead display-4'>PLEASE ENSURE THAT THE PATH ENTERED IS CORRECT..PAGE DOES NOT EXIST</h1>,
          children:[
            {
             path:'',
             element:<Home/>
            },
            {
              path: 'login',
              element: <Login/>
            },
            {
              path: 'signup',
              element: <Signup/>
            },
            {
              path: 'technologies',
              element: <Technologies/>,
              children:[
                {
                  path:'java',
                  element:<Java/>
                },
                {
                  path:'python',
                  element:<Python/>
                },
                {
                  path:'react-js',
                  element:<Reactjs/>
                }
              ]
            }
          ]
        }
      ])
      return(
        <div>
          <RouterProvider router={router}/>
        </div>
  )
}

export default Routing1