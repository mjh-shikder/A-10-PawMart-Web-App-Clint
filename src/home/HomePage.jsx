import React from 'react';
import useAuth from '../hook/useAuth';
import Slider from '../components/Slider';
import Category from '../components/Category';

const HomePage = () => {

    const {user} = useAuth()
    
    console.log(user);
    

    return (
        <div>
            <Slider></Slider>
            <Category></Category>
        </div>
    );
};

export default HomePage;