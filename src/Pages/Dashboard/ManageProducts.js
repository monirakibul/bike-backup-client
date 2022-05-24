import React from 'react';
import { useQuery } from 'react-query';
import ChangePageTitle from '../../hooks/ChangePageTitle';
import Loading from '../Shared/Loading';

const ManageProducts = () => {
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('http://localhost:5000/users', {
        method: "GET",
        headers: {
            authorization: `Bearer ${localStorage.getItem('token')}`
        }
    }).then(res => res.json()))
    if (isLoading) return <Loading />;


    const makeAdmin = email => {
        fetch(`http://localhost:5000/user/admin/${email}`, {
            method: 'PUT',
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
                if (data.modifiedCount > 0) {
                    toast.success(" Success")
                    refetch()
                }
            })
    }
    return (
        <div class="overflow-x-auto">
            <ChangePageTitle pageTitle="Manage Product - Dashboard" />
            <h2>All Users: {users.length}</h2>
            <table class="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Favorite Color</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map(user =>
                            <tr key={user._id}>
                                <th>1</th>
                                <td>{user.email}</td>
                                <td>{user.role !== 'admin' ? <button onClick={() => makeAdmin(user.email)} class="btn btn-sm">Make Admin</button> : <button onClick={() => makeAdmin(user.email)} class="btn btn-sm " disabled>Already Admin</button>}</td>
                                <td><button class="btn btn-sm">Delete</button></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProducts;