import React from 'react';
import Slider from '../components/Slider';
import Category from '../components/Category';
import RecentListing from '../components/RecentListing';
import WhyPawMart from '../components/WhyPawMart';
import PetHero from '../components/PetHero';

const HomePage = () => {

  
    

    return (
        <div>
            <Slider></Slider>
            <Category></Category>
            <RecentListing></RecentListing>
            <WhyPawMart></WhyPawMart>
            <PetHero></PetHero>
        </div>
    );
};

export default HomePage;