import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import ChangePageTitle from '../../hooks/ChangePageTitle';

const AddReviews = () => {

    const [user] = useAuthState(auth)

    const handleAddReview = e => {
        e.preventDefault()
        const stars = e.target.stars.value;
        const review = {
            name: user.displayName,
            img: user.photoURL,
            stars: stars,
            description: e.target.description.value
        }

        if (stars > 5 || stars < 1) {
            toast.error('Star must be a possitive number between 1 to 5')
        }
        else {
            fetch('http://localhost:5000/review', {
                method: "POST",
                headers: {
                    'content-type': 'application/json',
                    authorization: `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify(review)
            })
                .then(res => res.json())
                .then(inserted => {
                    toast.success('Review Added');
                    e.target.reset();
                })
        }

    }
    return (
        <div className='w-11/12 lg:w-6/12  '>
            <ChangePageTitle pageTitle="Add Review - Dashboard" />
            <h1 className="text-2xl lg:text-3xl text-primary font-semibold text-center py-5">
                Add Review
            </h1>
            <div class="p-6 rounded-lg shadow-lg  bg-white">
                <form onSubmit={handleAddReview}>
                    <div class="form-group mb-6">
                        <input type="number" class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                            placeholder="Star"
                            name='stars'
                            required />
                    </div>
                    <div class="form-group mb-6">
                        <textarea
                            class=" form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
                        "  rows="3" name="description"
                            placeholder='Description'
                            required
                        ></textarea>
                    </div>

                    <button type="submit" class="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Add Product</button>
                </form>
            </div>
        </div>
    );
};

export default AddReviews;