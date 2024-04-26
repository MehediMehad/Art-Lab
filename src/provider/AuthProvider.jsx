import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

// social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    console.log(user);

    // create user 
    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in user
    const logInUser = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogIn = () =>{
        return signInWithPopup(auth, googleProvider)
    }


    // github login
    const githubLogIn = () =>{
        return signInWithPopup(auth, githubProvider)
    }


     // sign out
     const logOut = () =>{
        setUser(null)
        signOut(auth)
     }


    // observer
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
          });
    },[])

   




    const userInfo = {
        user,
        createUser,
        logInUser,
        googleLogIn,
        githubLogIn,
        logOut,
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;