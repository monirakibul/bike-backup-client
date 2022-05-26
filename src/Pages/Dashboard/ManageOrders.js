import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import ChangePageTitle from '../../hooks/ChangePageTitle';
import Loading from '../Shared/Loading';

const ManageOrders = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { data: orders, isLoading, refetch } = useQuery('orders', () => fetch(`https://bike-backup.herokuapp.com/order`, {
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
                            toast.success(" Successfully Deleted")
                            refetch()
                        }
                    })
            }
        })
    }

    const handleShipped = id => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://bike-backup.herokuapp.com/order/${id}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify({ status: 'Shipped' })
                })
                    .then(res => {
                        if (res.status === 403) {
                            toast.error('Failed')
                        }
                        return res.json()
                    })
                    .then(data => {
                        if (data.modifiedCount > 0) {
                            toast.success(" Successfully Shipped ")
                            refetch()
                        }
                    })
            }
        })
    }

    return (
        <div className="overflow-x-auto">
            <ChangePageTitle pageTitle="Manage Orders - Dashboard" />
            <h2 className="text-2xl lg:text-3xl text-primary font-semibold text-center py-5">
                Manage Orders</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Product Name</th>
                        <th>User</th>
                        <th>Email</th>
                        <th>Amount</th>
                        <th>Quantity</th>
                        <th>Action</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        orders.map((order, index) =>
                            <tr key={order._id}>
                                <th>{index + 1}</th>
                                <td><img src={order.img} alt="" className='w-16' /></td>
                                <td>{order.productName}</td>
                                <td>{order.name}</td>
                                <td>{order.email}</td>
                                <td>${order.amount}</td>
                                <td>{order.quantity}</td>
                                <td><button onClick={() => handleDelete(order._id)} className="btn btn-sm btn-error">Delete</button></td>
                                <td>{order.paid ? order.status ? 'Shipped' : <button onClick={() => handleShipped(order._id)} className="btn btn-sm m-2" disabled={!order.paid}>Mark as Shipped</button> : 'pending'}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageOrders;