import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
// import auth from "../../Firebase/firebase.config";
import { FacebookAuthProvider, GoogleAuthProvider } from "firebase/auth";
import auth from "../Firebase/firebase.config";

// creating ConText
export const AuthContext = createContext(null);




const AuthProvider = ({children}) => {

  const [user,setuser] = useState(null);

//   google provider

const google_provider = new GoogleAuthProvider();

// facebook

const facebookprovider = new FacebookAuthProvider();

//   loading

 const [loading , setloading] = useState(true);

//   Sign Up => create a new user

const sign_Up = (email,password)=>{
        
     
    setloading(true);

    return createUserWithEmailAndPassword(auth,email,password);
}


// log_in =>existing users

const log_In = (email,password)=>{

    setloading(true);        

    return signInWithEmailAndPassword(auth,email,password);
}


// LogOut

const Log_Out =() =>{

    setloading(true); 

    return signOut(auth);
}


// Google Log In
const googleLogIn = () => {

    setloading(true);

    return signInWithPopup(auth , google_provider);

}


// facebook

const facebookLogin = ()=>{

    setloading(true);


    return signInWithPopup(auth, facebookprovider);
}


// ouAuthStateChanged

 useEffect(    
    
    ()=>{

    const unSubscribe = onAuthStateChanged(auth , currentuser =>{


        setuser(currentuser);

        // false hbe
        setloading(false);
     })

     return ()=>{
        
        unSubscribe();

     }


    }
    
    ,[])


    // values
    const authvalues ={user,  sign_Up,  log_In  , Log_Out , loading , googleLogIn,facebookLogin}
    
    
    return (
        <AuthContext.Provider value={authvalues}>
             
             {/* PROPS VALUE MUST BE */}

        {children}



        </AuthContext.Provider>
    );
};

export default AuthProvider;