import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../components/firebase.config";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword (auth, email, password);
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    // Observe auth State change

    useEffect(() =>{
        const unSubscribe = onAuthStateChanged(auth, currentUser => {            
            console.log('Observing current user inside useEffect of auth provider', currentUser);
            setUser(currentUser);
            setLoading(false);
        });

        return () => {
            unSubscribe();
        }
    }, [])


    

    const authInfo = {
        user,
        loading,
        createUser,
        signInUser,
        logOut
     }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

AuthProvider.propTypes = {
    children: PropTypes.node
}


/*
    1. create context and export it
    2. set provider with value
    3. use the auth provider in the main.jsx file
    4. access children in the AuthProvider component as children and use it in the middle of the Provider 
*/