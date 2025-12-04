import React from 'react';
import useAuth from '../hook/useAuth';
import Slider from '../components/Slider';

const HomePage = () => {

    const {user} = useAuth()
    
    console.log(user);
    

    return (
        <div>
            <Slider></Slider>
        </div>
    );
};

export default HomePage;