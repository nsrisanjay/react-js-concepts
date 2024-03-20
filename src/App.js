import './App.css'
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Rootlayout2 from './Components/rootlayout/Rootlayout2';
import Home from './Components/home/Home'
import Login from './Components/login/Login'
import Signup from './Components/signup/Signup';
import UserDashboard from './Components/user-dashboard/UserDashboard';
function App() {
  let x = createBrowserRouter([
    {
      path : '',
      element : <Rootlayout2/>,
      children:[
        {
          path : '',
          element: <Home/>
        },
        {
          path : 'login',
          element: <Login/>
        },
        {
          path :'register',
          element: <Signup/>
        },
        {
          path:'user-dashboard',
          element:<UserDashboard/>
        }
      ]
    }
  ])
  return(
    <div>
      <RouterProvider router={x}/>
    </div>
  )
}
export default App;
