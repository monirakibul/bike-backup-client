import React from 'react';
import ChangePageTitle from '../../hooks/ChangePageTitle';
import Banner from './Banner';
import Features from './Features';
import Newsletter from './Newsletter';
import Products from './Products';
import Reviews from './Reviews';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <ChangePageTitle pageTitle="Bike Backup" />
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