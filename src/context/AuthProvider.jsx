import React, { useEffect, useState } from "react";
import { AuthContext } from "./AuthContext";
import { auth } from "../firebase/firebase.config";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(true);
  const [typedEmail, setTypedEmail] = useState("");

 // Create user with email and password.
  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
    };
    
// Login User
  const userLogin = (email, passowrd) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, passowrd);
  }

    
// Observer
  useEffect(() => {
   const unsubscribe= onAuthStateChanged(auth, (currentUser) => {
     setUser(currentUser);
     setLoading(false)
    });
    return () => {
      unsubscribe() 
    }
  }) 
    
    
    // Google Sign in
  const googleProvider = new GoogleAuthProvider()
  const googleSignin = () => {
    return signInWithPopup(auth, googleProvider)
  }
   
    
    // Signout
  const logout = () => {
    return signOut(auth);
  }
    
  const authInfo = {
    user,
    setUser,
    loading,
    setLoading,
    createUser,
    userLogin,
    logout,
    showPassword,
    setShowPassword,
    googleSignin,
    typedEmail,
    setTypedEmail,
  };

  return <AuthContext value={authInfo}>{children}</AuthContext>;
};

export default AuthProvider;
