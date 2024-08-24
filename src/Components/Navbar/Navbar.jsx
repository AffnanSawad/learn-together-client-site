import { Link } from "react-router-dom";


const Navbar = () => {

   
    const NavLink = <>
    
    <li className="font-bold"> <Link Link to="/">Home </Link>  </li>


    <li className="font-bold"> <Link Link to="/assignments">Assignments </Link>  </li>



    <li className="font-bold"> <Link Link to="/creating"> Create Assignments </Link>  </li>


    <li className="font-bold"> <Link Link to="/pending">Pending Assignments </Link>  </li>



    <li className="font-bold"> <Link Link to="/login">Log In </Link>  </li>
    
    
    </>












    return (
        <div className="navbar bg-base-100 ">
        <div className="navbar-start h-1/2">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="https://i.ibb.co/wK70v5C/download.png"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16" />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
             
            
            {NavLink}



            </ul>
          </div>
        
       <div className="flex">

       


<a className="btn btn-ghost font-bold  text-2xl">Learn Together</a>

       </div>

          
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            

          {NavLink}

              
          </ul>
        </div>
   






        <div className="navbar-end">
          <a className="btn btn-accent text-white">Log In</a>
        </div>
      </div>


    );
};

export default Navbar;