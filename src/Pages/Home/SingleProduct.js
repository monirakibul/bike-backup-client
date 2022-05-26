import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const SingleProduct = ({ product }) => {
    const { _id, name, img, available, minimum, price, description } = product;
    const navigate = useNavigate()
    return (
        <div className="mx-auto flex flex-col justify-center flex-grow bg-white rounded-2xl shadow-sm shadow-slate-300/60">
            <img className="aspect-video rounded-t-2xl object-cover object-center" src={img} alt='' />
            <div className="p-4 relative ">
                <span className='absolute bg-white px-2 rounded-lg shadow-xl font-semibold right-4 text-green-700 -top-3'>Stock {available}</span>
                <h1 className="text-2xl font-medium text-slate-600 pb-2">{name}</h1>
                <p className="text-sm  text-slate-500">{description.slice(0, 180)}</p>
            </div>
            <hr />
            <div className='flex justify-between items-center p-4 '>
                <div>
                    <p className="text-2xl font-bold text-gray-500">${price}</p>
                    <p className="text-sm">Minimum order: {minimum} Pieces</p>
                </div>
                <button onClick={() => navigate(`/purchase/${_id}`)} className="btn btn-sm"> <FontAwesomeIcon className='pr-2' icon={faCartShopping} />  Buy</button>
            </div>
        </div>
    );
};

export default SingleProduct;