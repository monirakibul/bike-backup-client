import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleProduct = () => {
    const navigate = useNavigate()
    return (
        <div class="mx-auto flex flex-col justify-center bg-white rounded-2xl shadow-sm shadow-slate-300/60">
            <img class="aspect-video rounded-t-2xl object-cover object-center" src="https://images.pexels.com/photos/3311574/pexels-photo-3311574.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' />
            <div class="p-4 relative">
                <span className='absolute bg-white px-2 rounded-lg shadow-xl font-semibold right-4 text-green-700 -top-3'>Stock 30</span>
                <small class="text-blue-400 text-xs">Automobile company</small>
                <h1 class="text-2xl font-medium text-slate-600 pb-2">Dodge Car</h1>
                <p class="text-sm  text-slate-500">Dodge is an American brand of automobiles and a division of Stellantis, based in Auburn Hills, Michigan..</p>
            </div>
            <hr />
            <div className='flex justify-between items-center p-4 '>
                <div>
                    <p className="text-2xl font-bold">$60</p>
                    <p className="text-sm">Minimum order: 20 Pieces</p>
                </div>
                <button onClick={() => navigate('/purchase')} class="btn btn"> <FontAwesomeIcon className='pr-2' icon={faCartShopping} />  Buy</button>
            </div>
        </div>
    );
};

export default SingleProduct;