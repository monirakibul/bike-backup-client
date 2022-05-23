import React from 'react';
import Banner from './Banner';
import Features from './Features';
import Newslatter from './Newslatter';
import Summary from './Summary';

const Home = () => {
    return (
        <div>
            <Banner />
            <Summary />
            <Newslatter />
            <Features />
        </div>
    );
};

export default Home;