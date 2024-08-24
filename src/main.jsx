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



    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
