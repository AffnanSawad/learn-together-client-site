import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../AuthProvider/AuthProvider";


const Navbar = () => {

    // dark theme
    const [theme ,settheme] = useState('light')

   useEffect(  ()=>{

  localStorage.setItem('theme',theme)

  const localtheme = localStorage.getItem('theme')

  document.querySelector('html').setAttribute('data-theme',localtheme)


   }   ,
  
   [theme]
  
  
  )

   
   const handletoggle = (e) => {

    console.log(e.target.checked)
   
  if(e.target.checked){
    
    settheme('retro')
 

  }
  else{
    settheme('light')
  }


   }

  console.log(theme)



    // import context

  const{user,Log_Out} = useContext(AuthContext);


  const handleLogOut = ()=>{

    Log_Out()
    .then(result =>{

      console.log(result.user);
    })

    .catch(error=>{
      console.log(error.message);
    })
  }


//   navlinks

   
    const NavLink = <>
    
    <li className="font-bold"> <Link  to="/">Home </Link>  </li>


    <li className="font-bold"> <Link  to="/assignments">Assignments </Link>  </li>



{

    user &&  <>
    
    <li className="font-bold"> <Link  to="/creating"> Create Assignments </Link>  </li>


<li className="font-bold"> <Link  to="/pending">Pending Assignments </Link>  </li>
    
    </>
}



    <li className="font-bold"> <Link  to="/login">Log In </Link>  </li>
    <li className="font-bold"> <Link  to="/signup">Sign Up </Link>  </li>
    
    
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
   






        {/* <div className="navbar-end">
          <Link to="/login">
          <a className="btn btn-accent text-white">Log In</a>
          </Link>
        </div> */}
    <div className="navbar-end">


        {/* theme */}
        <button className="btn btn-ghost btn-circle ml-6">
      
    


    <label className="cursor-pointer grid place-items-center mr-2 lg:mr-10">
  <input
  
  onChange={handletoggle}
  
  
  type="checkbox" className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"/>
  <svg className="col-start-1 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4"/></svg>
  <svg className="col-start-2 row-start-1 stroke-base-100 fill-base-100" xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path></svg>
</label>
   
    
    </button>

{

user ? <>



<p className="mr-2  md:ml-4 sm:grid grid-flow-col "> {user.email}</p> 

<div onClick={handleLogOut} className="navbar-end">
<a className="btn 

text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2


">Log Out</a>
</div>


</>

:

<div className="navbar-end gap-2">

<Link to='/login'>

<a className="btn btn-outline

text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2


">Log In</a>

</Link>


</div>
}


</div>



      </div>


    );
};

export default Navbar;