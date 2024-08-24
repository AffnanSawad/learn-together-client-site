import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";


import { FcGoogle } from "react-icons/fc";


const LogIn = () => {


  
  // usecontext
 const {log_In,googleLogIn,facebookLogin} =useContext(AuthContext);

//  log in error / success

const [logInError , setLogInError] = useState('');
const [success,setSuccess] = useState('');

   
 // form handler

 const handlelogin = e =>{

     e.preventDefault();
     
     
     const email = e.target.email.value;
     const password = e.target.password.value;

     console.log(email,password);


     if(password.length<6){

      setLogInError('Password must be greater than 6 words');

      return;
     }
      
    //  regex sbsmy /  regex  / er mddhe hoi.
     if(! /^(?=.*[A-Z]).{8,}$/.test(password)){

      setLogInError('Password must have atleast  One Uppercase');
      

     }


    // jate error essage er por , right message asle => ager error message ta jate cle jai....
    setLogInError('');
    setSuccess('');


     // signup = firebase

     log_In(email,password)
     .then(result=>{

         console.log(result.user);

         setSuccess('Log In Successfully!');

         // reset form
         e.target.reset();
     })

     .catch(error=>{

         console.error(error);

         setLogInError(error.message);

         e.target.reset()
     })
 }


  // google login
 const handleGoogle = ()=>{

  googleLogIn()

 .then(result =>console.log(result.user))


 .catch(error=>{
  console.error(error.message)
 })

 }


//  facebook login

 const handlefacebook = () => {

  facebookLogin()

  .then(result =>{
    console.log(result.user);
  })
 
  
  .catch(error=>{
    console.error(error.message)
   })

 }




    return (
        <div className="hero bg-base-100 mb-20 mt-10 min-h-screen">
        <div className="hero-content flex-col">
          <div className="text-center">
            <h1 className="text-4xl text-blue-600 font-bold">Log In Now !</h1>
           
          </div>
          <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      
              {/* form & add form event handler */}
            <form  onSubmit={handlelogin} className="card-body">
           
      
       
      
           {/* email */}
      
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
      
                <input type="email" name="email" placeholder="email" className="input input-bordered" required />
              </div>
      
      
      
              {/* password */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input type="password" name="password" placeholder="password" className="input input-bordered" required />
               
                {/* forgot pass */}
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                </label>
              </div>
      
      
              <div className="form-control mt-6">
                <button 
                
                
                className="btn  

                 text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
                
              
                
                ">Log In</button>
              </div>
      
                {/* alrady registered */}
      
          <p className="font-bold"> New Here ? Please <Link to='/signup'>
          
          <button className="btn 
          
           
         text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
          
          "> Sign Up</button>
          
           </Link> First ! </p>
      
            </form>
          
          <hr />

            {/* facebook,google login  */}

          <div className="flex ml-2 mt-4 mb-4 ">


          <button onClick={handleGoogle} 
          
          className="btn text-white bg-[#4285F4] hover:bg-[#4285F4]/90 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 ml-5  mb-2">
            
             <FcGoogle />
           Google
           
           
           </button>

         


<button onClick={handlefacebook} 


className="btn btn-accent 


text-white bg-[#3b5998] hover:bg-[#3b5998]/90 focus:ring-4 focus:outline-none focus:ring-[#3b5998]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#3b5998]/55  ml-10"> 


 <FaFacebook />  Facebook</button>






          </div>

          {
            logInError && <p className="text-red-600 text-xl font-extrabold mb-10 ml-8 "> {logInError} </p>
          }
          {
            success && <p className="text-xl font-extrabold mb-10 ml-8 text-green-500"> {success} </p>
          }
        
      
      
          </div>
        </div>
      </div>
    );
};

export default LogIn;