import React from 'react';
import useAuth from '../hook/useAuth';
import Slider from '../components/Slider';
import Category from '../components/Category';
import RecentListing from '../components/RecentListing';
import WhyPawMart from '../components/WhyPawMart';

const HomePage = () => {

    const {user} = useAuth()
    
    console.log(user);
    

    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <RecentListing></RecentListing>
            <WhyPawMart></WhyPawMart>
        </div>
    );
};

export default HomePage;