import React, { useEffect, useState } from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import { useNavigate, useParams } from 'react-router-dom';
import ChangePageTitle from '../../hooks/ChangePageTitle';
import PaymentProcces from './PaymentProcces';


const stripePromise = loadStripe('pk_test_51L1OucIHLtV0blM21AErDQf5ZV8Kwq5Swk2lSjLH4ZUPYBS2j3QUY2ToahMxDo5fmqP63xFuHzotiDVyf7L376Z400PmXjBB1c');

const Payment = () => {

    const { id } = useParams();

    const [order, setOrder] = useState([]);
    const { _id, productName, amount, img, quantity } = order;
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://bike-backup.herokuapp.com/order/${id}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setOrder(data));
    }, [])




    return (
        <div>
            <ChangePageTitle pageTitle="Payment - Bike Backup" />
            <h1 className="text-2xl lg:text-3xl text-primary font-semibold text-center py-5">
                Payment Details
            </h1>
            <div className='flex flex-col lg:flex-row justify-center items-center'>
                <div className='card bg-white shadow-lg m-5 p-5 w-full'>
                    <div className="flex items-center justify-between">
                        <img src={img} alt="" className='rounded w-36' />
                        <div className='ml-5  w-2/3'>
                            <h2 className="text-xl">{productName}</h2>
                            <p className='text-lg text-green-600'>${amount}</p>
                            <p>Quantity: {quantity ?? 0}</p>
                        </div>
                    </div>
                </div>
                <div className='card bg-white shadow-lg m-5 p-5 w-full'>
                    <Elements stripe={stripePromise}>
                        <PaymentProcces order={order} />
                    </Elements>
                </div>
            </div>
        </div>

    );
};

export default Payment;