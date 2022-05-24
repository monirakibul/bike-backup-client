import React from 'react';
import { useQuery } from 'react-query';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { signOut } from 'firebase/auth';

const ManageProducts = () => {
    const [user] = useAuthState(auth);
    const navigate = useNavigate();
    const { data: products, isLoading, refetch } = useQuery('products', () => fetch(`http://localhost:5000/products`, {
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

    if (!products) {
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
                fetch(`http://localhost:5000/product/${id}`, {
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
        <div class="overflow-x-auto"><h2 className="text-2xl lg:text-3xl text-primary font-semibold text-center py-5">
            Manage Products</h2>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Image</th>
                        <th>Name</th>
                        <th>Amount</th>
                        <th>Available</th>
                        <th>Minimum Quantity</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        products.map((product, index) =>
                            <tr key={product._id}>
                                <th>{index}</th>
                                <td><img src={product.img} alt="" className='w-16' /></td>
                                <td>{product.name}</td>
                                <td>${product.price}</td>
                                <td>{product.available}</td>
                                <td>{product.minimum}</td>
                                <td><button onClick={() => handleDelete(product._id)} class="btn btn-sm">Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};


export default ManageProducts;