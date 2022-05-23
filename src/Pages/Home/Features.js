import React from 'react';
import FeatureItems from './FeatureItems';

const Features = () => {
    return (
        <div>
            <h1 className="text-2xl lg:text-3xl text-primary font-semibold text-center py-5">
                Our Features
            </h1>
            <FeatureItems />
        </div>
    );
};

export default Features;