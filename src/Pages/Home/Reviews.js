import React from 'react';
import SingleReview from './SingleReview';

const Reviews = () => {
    return (
        <div class=''>
            <h1 className="text-2xl lg:text-3xl text-primary font-semibold text-center py-5">
                Customer's Reviews
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center m-5'>
                <SingleReview />
                <SingleReview />
                <SingleReview />
            </div>
        </div>
    );
};

export default Reviews;