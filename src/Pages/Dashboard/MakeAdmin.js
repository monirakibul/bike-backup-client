import React from 'react';
import { useQuery } from 'react-query';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import Swal from 'sweetalert2';

const MakeAdmin = () => {
    const navigate = useNavigate();
    const { data: users, isLoading, refetch } = useQuery('users', () => fetch('https://bike-backup.herokuapp.com/users', {
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
    if (isLoading) return <Loading />;

    if (!users) {
        if (isLoading) return <Loading />;
    }




    const handleAdmin = (email, isMake) => {

        let body;
        let swalBTn;
        if (isMake) {
            body = {
                role: 'admin'
            };
            swalBTn = 'Yes , make admin!'
        } else {
            body = {
                role: ''
            };
            swalBTn = 'Yes , remove admin!'
        }

        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: swalBTn
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://bike-backup.herokuapp.com/user/admin/${email}`, {
                    method: 'PUT',
                    headers: {
                        'content-type': 'application/json',
                        authorization: `Bearer ${localStorage.getItem('token')}`
                    },
                    body: JSON.stringify(body)
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
        })
    }
    return (
        <div className="overflow-x-auto"><h2 className="text-2xl lg:text-3xl text-primary font-semibold text-center py-5">
            Make Admin</h2>
            <table className="table w-full">
                <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) =>
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.role !== 'admin' ? <button onClick={() => handleAdmin(user.email, true)} className="btn btn-primary btn-sm">Make Admin</button> : <button onClick={() => handleAdmin(user.email, false)} className="btn btn-sm btn-error">Remove Admin</button>}</td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    );
};

export default MakeAdmin;