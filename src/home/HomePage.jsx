import React from 'react';
import useAuth from '../hook/useAuth';

const HomePage = () => {

    const {user} = useAuth()
    
    console.log(user);
    

    return (
        <div>
            Home page 
        </div>
    );
};

export default HomePage;