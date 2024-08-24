import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import './index.css'



// react router
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import AddAss from './Components/AddAss/AddAss';





const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,

    children: [

  {
    path:"/",
    element: <Home></Home>
  },
  {
    path:"/about",
    element: <About></About>
  },
  {
    path:"/login",
    element: <LogIn></LogIn>
  },
  {
    path:"/signup",
    element: <SignUp></SignUp>
  },
  {
    path:"/creating",
    element: <AddAss></AddAss>
  },
 




    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     
     
     <AuthProvider>
     <RouterProvider router={router} />
     </AuthProvider>
     
     
  </StrictMode>,
)
