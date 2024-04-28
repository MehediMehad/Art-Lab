import { GithubAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import auth from "../firebase/firebase.config";
import { GoogleAuthProvider } from "firebase/auth";

export const AuthContext = createContext(null);

// social auth provider
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] =useState(true)
    // create user 
    const createUser = (email, password) =>{
        setLoading(true)
       return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in user
    const logInUser = (email, password) =>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // google login
    const googleLogIn = () =>{
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }


    // github login
    const githubLogIn = () =>{
        return signInWithPopup(auth, githubProvider)
    }


     // sign out
     const logOut = () =>{
        setLoading(true)
        setUser(null)
        signOut(auth)

     }


    // observer
    useEffect(()=>{
      const unSubscribe = onAuthStateChanged(auth, currentUser => {
                setUser(currentUser)
                setLoading(false)
          });
          return () =>{
            unSubscribe();
          }
    },[])

   




    const userInfo = {
        user,
        loading,
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
AuthProvider.propTypes = {
    children: PropTypes.node,
}
export default AuthProvider;