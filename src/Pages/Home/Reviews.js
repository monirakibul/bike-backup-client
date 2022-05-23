import React, { useEffect, useState } from 'react';
import SingleReview from './SingleReview';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div class=''>
            <h1 className="text-2xl lg:text-3xl text-primary font-semibold text-center py-5">
                Customer's Reviews
            </h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 items-center justify-center m-5'>
                {
                    reviews.map(review => <SingleReview key={review._id} review={review} />)
                }
            </div>
        </div>
    );
};

export default Reviews;