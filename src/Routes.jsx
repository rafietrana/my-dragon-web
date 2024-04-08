import { createBrowserRouter } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "./Component/Home";
import Login from "./Component/Login";
import SingUp from "./Component/SingUp";
import PrivetRoute from "./Component/PrivetRoute";
 
 
 

const  routes = createBrowserRouter([
      {
        path: '/',
        element: <Layout></Layout>,
        children: [
          {
            path: '/',
            element: <Home></Home>
          },
          {
           path: '/news/:id',
 
           element: <PrivetRoute><p>This is Dynamic Route</p></PrivetRoute>
          },
          {
            path: '/login',
            element: <Login></Login>
          },
          {
            path: '/singup',
            element: <SingUp></SingUp>
          }
        ]
        
      }
])
export default routes;