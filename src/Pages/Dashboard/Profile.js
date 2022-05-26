import { async } from '@firebase/util';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useQuery } from 'react-query';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import ChangePageTitle from '../../hooks/ChangePageTitle';
import Loading from '../Shared/Loading';

const Profile = () => {

    const [user] = useAuthState(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);
    const navigate = useNavigate()

    const { data: userData, isLoading, refetch } = useQuery('user', () => fetch(`https://bike-backup.herokuapp.com/user/${user.email}`, {
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

    if (isLoading) return <Loading />

    const handleUpdate = async e => {
        e.preventDefault();
        const name = e.target.name.value;
        const city = e.target.city.value;
        const education = e.target.education.value;
        const phone = e.target.phone.value;
        const linkedin = e.target.linkedin.value;

        await updateProfile({ displayName: name })

        const userDetails = {
            name: name,
            email: user.email,
            city: city,
            education: education,
            phone: phone,
            linkedin: linkedin
        }
        fetch('https://bike-backup.herokuapp.com/user', {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
                'authorization': `Bearer ${localStorage.getItem('token')}`
            },
            body: JSON.stringify(userDetails)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    toast('Profile updated')
                    e.target.reset()
                    refetch()
                }
            });

    }

    return (
        <div className="flex flex-wrap items-center  justify-center  ">
            <ChangePageTitle pageTitle="Profile - Dashboard" />
            <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3  m-4  bg-white  shadow-lg    transform   duration-200 easy-in-out">
                <div className=" h-32 overflow-hidden" >
                    <img className="w-full" src="https://images.unsplash.com/photo-1605379399642-870262d3d051?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" alt="" />
                </div>
                <div className="flex justify-center px-5  -mt-12">
                    <img className="h-32 w-32 bg-white p-2 rounded-full   " src={user.photoURL ?? 'https://cdn.lorem.space/images/face/.cache/500x0/radu-florin-JyVcAIUAcPM-unsplash.jpg'} alt="" />

                </div>
                <div className=" ">
                    <div className="text-center px-14">
                        <h2 className="text-gray-800 text-3xl font-bold">{user.displayName}</h2>
                        <p className="text-gray-400 mt-2">{user.email}</p>
                    </div>
                    <hr className="mt-6" />
                    <h3 className='p-3'>City: {userData.city}</h3>
                    <hr />
                    <h3 className='p-3'>Phone: {userData.phone}</h3>
                    <hr />
                    <h3 className='p-3'>Education: {userData.education}</h3>
                    <hr />
                    <h3 className='p-3'>Linkedin: <a href={userData.linkedin} target="_blank">LinkedIn</a></h3>
                    <hr />
                </div>
            </div>

            <div className="container lg:w-2/6 xl:w-2/7 sm:w-full md:w-2/3 m-4 bg-white  shadow-lg    transform   duration-200 easy-in-out">
                <h1 className="text-2xl lg:text-3xl text-primary font-semibold text-center py-5">
                    Update Profile
                </h1>
                <div className="p-6 rounded-lg shadow-lg  bg-white">
                    <form onSubmit={handleUpdate}>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700  bg-white bg-clip-padding  border border-solid border-gray-300 rounded  transition ease-in-out  m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Name"
                                name='name'
                                required />
                        </div>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="City"
                                name='city'
                                required />
                        </div>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Phone Number"
                                name='phone'
                                required />
                        </div>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Education"
                                name='education'
                                required />
                        </div>
                        <div className="form-group mb-6">
                            <input type="text" className="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded  transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                                placeholder="Linkedin Link"
                                name='linkedin'
                                required />
                        </div>

                        <button type="submit" className="w-full px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md  hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out">Update</button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Profile;