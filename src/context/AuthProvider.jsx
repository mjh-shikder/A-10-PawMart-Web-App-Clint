import React, { useState } from 'react';
import { AuthContext } from './AuthContext';


const AuthProvider = ({ children }) => {
    
const [user, setUser]= useState('helo')






    const authInfo = {
        user, 
        setUser,
}

    return <AuthContext value={authInfo}>{children}</AuthContext>
};

export default AuthProvider;