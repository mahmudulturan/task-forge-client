import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import auth from "../../firebase.config";

export const AuthContext = createContext(null);
const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }
    const goggleLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider)
    }
    const updateUser = (user, name, image) => {
        return updateProfile(user, { displayName: name, photoURL: image })
    }
    const logOut = () => {
        return signOut(auth);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log(user);
            setLoading(false)
        })
        return () => {
            unsubscribe()
        }
    }, [user])
    const authUser = {
        user,
        loading,
        createUser,
        loginUser,
        goggleLogin,
        updateUser,
        logOut,
    }
    return (
        <AuthContext.Provider value={authUser}>
            {children}
        </AuthContext.Provider >
    );
};

AuthProvider.propTypes = {
    children: PropTypes.node,
}

export default AuthProvider;