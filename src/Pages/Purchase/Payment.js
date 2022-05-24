import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
const Payment = () => {

    const { id } = useParams();
    let amount = (new URLSearchParams(window.location.search)).get("amount")

    const [product, setProduct] = useState([]);
    const { _id, name, img, available, minimum, price, description } = product;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`http://localhost:5000/purchase/${id}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])




    return (
        <div>
            <h1 className="text-2xl lg:text-3xl text-primary font-semibold text-center py-5">
                Payment Details
            </h1>
            <div className='flex flex-col lg:flex-row justify-center items-center'>
                <div className='card bg-white shadow-lg m-5 p-5 w-full'>
                    <div className="flex items-center justify-between">
                        <img src={img} alt="" className='rounded w-24' />
                        <div className='ml-5'>
                            <h2 className="text-xl">{name}</h2>
                            <p>${amount}</p>
                        </div>
                    </div>
                </div>
                <div className='card bg-white shadow-lg m-5 p-5 w-full'>
                    hi
                </div>
            </div>
        </div>

    );
};

export default Payment;