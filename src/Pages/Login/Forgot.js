import { async } from '@firebase/util';
import React from 'react';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import auth from '../../firebase.init';
import ChangePageTitle from '../../hooks/ChangePageTitle';
import Loading from '../Shared/Loading';

const Forgot = () => {

    const navigate = useNavigate()
    const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    if (sending) {
        return <Loading></Loading>
    }
    let Error;
    if (error) {
        Error = <p className='text-red-500 mb-3'><small>{error?.message}</small></p>
    }
    const onSubmit = async data => {
        await sendPasswordResetEmail(data.email, data.password);
        toast('Reset email has been send.Check your inbox or spam folder')
        navigate('/login')
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <ChangePageTitle pageTitle="Reset Password - Bike Backup" />
            <div className="m-5 container rounded  my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
                <div className="text-center my-6">
                    <h1 className="text-3xl font-semibold text-gray-700">Reset Password</h1>
                </div>
                <div className="m-6">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="mb-6">
                            <label htmlFor="email" className="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                            <input type="email" placeholder="Your email address"
                                {...register("email", {
                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a valid Email'
                                    }
                                })}
                                className="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" />
                            <label className="label">
                                {errors.email?.type === 'required' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                                {errors.email?.type === 'pattern' && <span className="label-text-alt text-red-500">{errors.email.message}</span>}
                            </label>
                        </div>
                        {Error}
                        <div className="mb-6">
                            <button type="submit" className="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out">Reset</button>
                        </div>
                        <p className="text-sm text-center text-gray-400">
                            Don&#x27;t forget password?
                            <Link to="/register" className="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"> Log in</Link>.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Forgot;