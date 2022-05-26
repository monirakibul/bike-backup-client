import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';


const PaymentProcces = ({ order }) => {
    const stripe = useStripe();
    const elements = useElements();
    const [loading, setLoding] = useState(false)
    const navigate = useNavigate(false);
    const [clientSecret, setClientSecret] = useState('');

    const { _id, name, amount, email } = order;

    useEffect(() => {
        if (amount > 0) {
            fetch('https://bike-backup.herokuapp.com/create-payment-intent', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json',
                    'authorization': `Bearer ${localStorage.getItem('token')}`
                },
                body: JSON.stringify({ amount: amount })
            })
                .then(res => res.json())
                .then(data => {
                    if (data?.clientSecret) {
                        setClientSecret(data.clientSecret);
                    }
                });
        }

    }, [amount])

    const handleSubmit = async e => {
        e.preventDefault();
        setLoding(true)

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);
        if (card === null) {
            return;
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            toast.error(error?.message)
        }

        // confirmcard payment 
        const { paymentIntent, error: intentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: name,
                        email: email
                    }
                }
            }
        );

        if (intentError) {
            toast.error(intentError?.message);
        } else {
            if (paymentIntent) {
                fetch(`https://bike-backup.herokuapp.com/order/${_id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify({ paid: true, transaction: paymentIntent.id })
                })
                    .then(res => {
                        if (res.status === 403) {
                            toast.error('Failed')
                        }
                        return res.json()
                    })
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            toast.success(" Congrats! Your payment is success")
                            navigate(`/dashboard/my-orders`)
                        }
                    })
            }
        }
    }
    return (
        <div>
            <h1 className="text-2xl lg:text-xl  font-semibold  py-5">
                Card Details
            </h1>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button type="submit" className='btn btn-sm btn-success mt-4' disabled={!stripe || !clientSecret || loading}>
                    Pay
                </button>
            </form>
        </div>
    );
};

export default PaymentProcces;