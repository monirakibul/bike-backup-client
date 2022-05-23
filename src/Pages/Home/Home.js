import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Newsletter from './Newsletter';
import Products from './Products';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner />
            <Products />
            <Summary />
            <Newsletter />
            <Reviews />
            <Features />
        </div>
    );
};

export default Home;