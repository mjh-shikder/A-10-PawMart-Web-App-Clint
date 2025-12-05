import React from 'react';
import useAuth from '../hook/useAuth';
import Slider from '../components/Slider';
import Category from '../components/Category';
import RecentListing from '../components/RecentListing';

const HomePage = () => {

    const {user} = useAuth()
    
    console.log(user);
    

    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <RecentListing></RecentListing>
        </div>
    );
};

export default HomePage;