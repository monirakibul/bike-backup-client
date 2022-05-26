import { faStar } from '@fortawesome/free-solid-svg-icons';
import { faStar as star } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useMemo, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import PurchaseModal from './PurchaseModal';
import Loading from '../Shared/Loading';

const Purchase = () => {

    const [user] = useAuthState(auth);
    const { id } = useParams();
    const [product, setProduct] = useState([]);
    const [order, setOrder] = useState(null);
    const [cart, setCart] = useState(0);
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        fetch(`https://bike-backup.herokuapp.com/purchase/${id}`, {
            method: 'GET',
            headers: {
                authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => res.json())
            .then(data => setProduct(data));
    }, [])

    const { _id, name, img, available, minimum, price, description } = product;

    useEffect(() => {
        setAmount(parseInt(price) * parseInt(minimum))
        setCart(minimum)
    }, [product])

    let newPrice;
    const vauleChange = value => {

        const cartValue = parseInt(value);
        const availableValue = parseInt(available);
        const minimumValue = parseInt(minimum);
        const amount = parseInt(price);


        if (cartValue > availableValue) {
            toast.error('Out of Stock. Please decrease product quantity')
            setCart(availableValue)
            newPrice = amount * availableValue;
            setAmount(newPrice)
        }
        else if (cartValue < minimumValue) {
            toast.error(`Minimum order quantity is ${minimum}. Please increase product quantity`)
            setCart(minimumValue)
            newPrice = amount * minimumValue;
            setAmount(newPrice)
        }
        else {
            setCart(cartValue)
            newPrice = amount * cartValue;
            setAmount(newPrice)
        }

    }

    const updateCart = update => {
        let newCart;
        const oldCart = parseInt(cart);
        if (update) {
            newCart = oldCart + 1;
        }
        else {
            newCart = oldCart - 1;
        }
        vauleChange(newCart)
    }


    const handleOrder = e => {
        e.preventDefault()
        const order = {
            productId: _id,
            productName: name,
            img: img,
            amount: amount,
            email: user.email,
            name: user.displayName,
            number: e.target.phone.value,
            quantity: cart,

        }

        fetch('https://bike-backup.herokuapp.com/order', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(order)
        })
            .then(res => res.json())
            .then(data => {
                if (data.success) {
                    toast(`Order has been placed`)
                    navigate(`/payment/${data.result.insertedId}`)
                }
                else {
                    toast.error(`Failed`)
                    setOrder(null)
                }

            });
    }

    return (
        <section className="text-gray-700 body-font overflow-hidden bg-white">
            {
                !product ? <Loading /> :
                    <div className="container px-5 py-24 mx-auto">
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img alt="ecommerce" className="lg:w-1/2 w-full object-cover object-center rounded border border-gray-200" src={img} />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-green-500 tracking-widest">Stock: {available}</h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{name}</h1>
                                <div className="flex mb-4">
                                    <span className="flex items-center">
                                        <FontAwesomeIcon className='text-red-500' icon={faStar} />
                                        <FontAwesomeIcon className='text-red-500' icon={faStar} />
                                        <FontAwesomeIcon className='text-red-500' icon={faStar} />
                                        <FontAwesomeIcon className='text-red-500' icon={faStar} />
                                        <FontAwesomeIcon className='text-red-500' icon={star} />
                                        <span className="text-gray-600 ml-3">34 Reviews</span>
                                    </span>
                                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200">
                                        <span className="text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                                            </svg>
                                        </span>
                                        <span className="ml-2 text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                                            </svg>
                                        </span>
                                        <span className="ml-2 text-gray-500">
                                            <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                                                <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                                <p className="leading-relaxed">{description}</p>
                                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-200 mb-5">
                                    <div className="flex">
                                        <div className="form-control">
                                            <label className="label">
                                                <span className="label-text">Minimum Order Quantity: {minimum}</span>
                                            </label>
                                            <label className="input-group">
                                                <span onClick={() => updateCart(false)} className='hover:bg-gray-800 bg-gray-600 text-white font-bold text-2xl cursor-pointer'>-</span>
                                                <input onChange={(e) => vauleChange(e.target.value)} type="number" placeholder="10" className="input w-20 input-bordered" value={cart} />
                                                <span onClick={() => updateCart(true)} className='hover:bg-gray-800 bg-gray-600 text-white text-2xl cursor-pointer'>+</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex">
                                    <span className="title-font font-medium text-2xl text-gray-900">${amount}</span>
                                    <button onClick={() => { setOrder(product); }} className="flex ml-auto text-white bg-primary border-0 py-2 px-6 focus:outline-none rounded">Checkout</button>
                                </div>
                            </div>
                        </div>
                    </div>
            }
            {order && <PurchaseModal
                order={order}
                handleOrder={handleOrder}
                setOrder={setOrder}
            ></PurchaseModal>}
        </section>
    );
};

export default Purchase;