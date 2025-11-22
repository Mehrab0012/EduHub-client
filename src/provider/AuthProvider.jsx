import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.config';
import { toast } from 'react-toastify';
import { useLocation } from 'react-router';

export const AuthContext = createContext();


const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');


    const handleTheme = (e) => {
        if (e.target.checked) {
            setTheme('dark');
            localStorage.setItem('theme', 'dark');
        }
        else {
            setTheme('light');
            localStorage.setItem('theme', 'light');
        }
    }

    useEffect(() => {
        const localTheme = localStorage.getItem('theme');
        if (localTheme) {
            setTheme(localTheme);
        }
    }, []);


    const createUser = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
            setLoading(false);


        });
        return () => {
            unsubscribe();
        }
    }, []);

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const handleSignOut = () => {
        signOut(auth)
            .then(() => {
                toast.success("Sign Out Successfully");
                setUser(null);

            })
            .catch((error) => {
                console.error("Error signing out:", error);

            });
    }
    const updateUser = (updatedData) => {
        return updateProfile(auth.currentUser, updatedData);
    }
    const authData = {
        user,
        setUser,
        createUser,
        signIn,
        handleSignOut,
        loading,
        setLoading,
        updateUser,
        handleTheme,
        theme,

    }
    return <AuthContext.Provider value={authData}>
        {children}
    </AuthContext.Provider>
};

export default AuthProvider;