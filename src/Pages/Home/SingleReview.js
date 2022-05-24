import { faStar } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const SingleReview = ({ review }) => {
    const { name, img, stars, description } = review;
    return (
        <div class='w-full max-w-lg px-10 py-8 mx-auto bg-white rounded-md shadow border border-gray-100' id='main-content'>
            <div className="flex justify-start">
                <div class="avatar">
                    <div class="w-10 h-10 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                        <img src={img ?? 'https://api.lorem.space/image/face?hash=88560'} />
                    </div>
                </div>
                <h2 className="ml-5 text-xl">{name}</h2>
                <div className="flex w-full justify-end ">
                    <div class="rating text-orange-600">
                        {
                            [...Array(parseInt(stars))].map(n => <FontAwesomeIcon icon={faStar} />)
                        }
                    </div>
                </div>
            </div>
            <p className='text-gray-600 mt-4'>
                {description}
            </p>
        </div>
    );
};

export default SingleReview;