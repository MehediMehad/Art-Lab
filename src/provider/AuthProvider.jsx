import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";

export const AuthContext = createContext(null);



const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null)

    // create user 
    const createUser = (email, password) =>{
       return createUserWithEmailAndPassword(auth, email, password)
    }
    // sign in user
    const logInUser = () =>{
        return signInWithEmailAndPassword(auth, email, password)
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
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;