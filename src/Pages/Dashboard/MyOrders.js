import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';

const MyOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://bike-backup.herokuapp.com/order?email=${user.email}`, {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => {
        if (res.status === 403 || res.status === 401) {
            signOut(auth)
            navigate('/login')
        }
        return res.json();
    }))

    if (!orders) {
        if (isLoading) return <Loading />;
    }

    // delete an order 
    const handleDelete = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bike-backup.herokuapp.com/order/${id}`, {
                    method: 'DELETE',
                    headers: {
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                })
                    .then(res => {
                        if (res.status === 403) {
                            toast.error('Failed')
                        }
                        return res.json()
                    })
                    .then(data => {
                        if (data.deletedCount > 0) {
                            toast.success(" Success")
                            refetch()
                        }
                    })
            }
        })
    }

    return (
        <div className="overflow-x-auto"><h2 className="text-2xl lg:text-3xl text-primary font-semibold text-center py-5">
            My Orders</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                        <th>Action</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map(order =>
                            <tr key={order._id}>
                                <th>1</th>
                                <td><img src={order.img} alt="" className='w-16' /></td>
                                <td>{order.productName}</td>
                                <td>${order.amount}</td>
                                <td>{order.quantity}</td>
                                <td>{order.paid ?
                                    <button className="btn btn-sm" disabled={order.paid}>Paid</button>
                                    :
                                    <><button onClick={() => navigate(`/payment/${order._id}`)} className="btn btn-sm m-2">Pay</button>
                                        <button onClick={() => handleDelete(order._id)} className="btn btn-sm">Delete</button></>
                                }</td>
                                <td>{order.status ? 'Shipped' : 'Pending'}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MyOrders;