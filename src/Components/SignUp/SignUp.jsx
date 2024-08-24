import { useContext, useState } from "react";
import { AuthContext } from "../AuthProvider/AuthProvider";
import { Link } from "react-router-dom";


const SignUp = () => {

//    import context

 const {sign_Up} =useContext(AuthContext)


//  signup success/ error

const [success , setSuccess] = useState('');
const [error , setError] = useState('');

   
    // form handler

    const handlesignUp = e =>{

        e.preventDefault();
        
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        console.log(name,email,password);



        if(password.length < 6 ){

          setError('Password must have atleast 6 characters');

          return;
        }
       
        // regex 
        if(!/^(?=.*[A-Z])(?=.*\d).+$/.test(password)){

          setError('Password must have atleast One Uppercase');

          return;
        }

       
        //  jate error essage er por , right message asle => ager error message ta jate cle jai....
        setError('');
        setSuccess('');


        // signup = firebase

        sign_Up(email,password)
        .then(result=>{

            console.log(result.user);

            setSuccess('Sign Up Successfully');

            // reset form
            e.target.reset();
        })

        .catch(error=>{

            console.error(error);

            setError(error.message);
        })
    }



    return (
        <div className="hero bg-base-100 mb-20 mt-10 min-h-screen">
  <div className="hero-content flex-col">
    <div className="text-center">
      <h1 className="text-4xl text-green-600 font-bold">Sign Up Now !</h1>
     
    </div>
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">

        {/* form & add form event handler */}
      <form  onSubmit={handlesignUp} className="card-body">
     

     {/* name */}
     <div className="form-control">
          <label className="label">
            <span className="label-text">Your Name</span>
          </label>
          
          <input type="text" name="name" placeholder="text" className="input input-bordered" required />
        </div>
 

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
          
         text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 shadow-lg shadow-green-500/50 dark:shadow-lg dark:shadow-green-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
          
          ">Sign Up</button>
        </div>

          {/* alrady registered */}

    <p className="font-bold"> Already Registered ? Please <Link to='/login'>
    
    <button className="btn 
    
    text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 shadow-lg shadow-blue-500/50 dark:shadow-lg dark:shadow-blue-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2
    
    "> Log In</button>
    
     </Link> Now ! </p>

      </form>

      {
            error && <p className="text-red-600 text-xl font-extrabold mb-10 ml-8 "> {error} </p>
          }
          {
            success && <p className="text-xl font-extrabold mb-10 ml-8 text-green-500"> {success} </p>
          }


    </div>
  </div>
</div>
    );
};

export default SignUp;