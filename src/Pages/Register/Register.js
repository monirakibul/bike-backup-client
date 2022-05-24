import React from 'react';
import { useCreateUserWithEmailAndPassword, useSignInWithGoogle, useUpdateProfile } from 'react-firebase-hooks/auth';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import ChangePageTitle from '../../hooks/ChangePageTitle';
import useToken from '../../hooks/useToken';
import Loading from '../Shared/Loading';

const Register = () => {
    const navigate = useNavigate();
    const [signInWithGoogle, gUser, gLoading, gError] = useSignInWithGoogle(auth);
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

    const [token] = useToken(user || gUser);
    if (token) {
        navigate('/appointment')
    }

    if (loading || gLoading || updating) {
        return <Loading></Loading>
    }

    let signUpError;
    if (error || gError) {
        signUpError = <p className='text-red-500 mb-3'><small>{error?.message || gError?.message}</small></p>
    }
    const onSubmit = async data => {
        await createUserWithEmailAndPassword(data.email, data.password)
        await updateProfile({ displayName: data.name })

    };
    return (
        <div class="flex justify-center items-center min-h-screen bg-gray-100">
            <ChangePageTitle pageTitle="Sign up - Bike Backup" />
            <div class="container rounded  my-auto max-w-md border-2 border-gray-200 p-3 bg-white">
                <div class="text-center my-6">
                    <h1 class="text-3xl font-semibold text-gray-700">Sign Up</h1>
                </div>
                <div class="m-6">
                    <form class="mb-4">
                        <div class="mb-6">
                            <label for="name" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Full Name</label>
                            <input type="text" name="name" id="name" placeholder="Your Full Name" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required />
                        </div>
                        <div class="mb-6">
                            <label for="email" class="block mb-2 text-sm text-gray-600 dark:text-gray-400">Email Address</label>
                            <input type="email" name="email" id="email" placeholder="Your email address" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required />
                        </div>
                        <div class="mb-6">
                            <div class="flex justify-between mb-2">
                                <label for="password" class="text-sm text-gray-600 dark:text-gray-400">Password</label>
                                <a href="#!" class="text-sm text-gray-400 focus:outline-none focus:text-indigo-500 hover:text-indigo-500 dark:hover:text-indigo-300">Forgot password?</a>
                            </div>
                            <input type="password" name="password" id="password" placeholder="Your password" class="w-full px-3 py-2 placeholder-gray-300 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-indigo-100 focus:border-indigo-300 dark:bg-gray-700 dark:text-white dark:placeholder-gray-500 dark:border-gray-600 dark:focus:ring-gray-900 dark:focus:border-gray-500" required />
                        </div>
                        {signUpError}
                        <div class="mb-6">
                            <button type="button" class="w-full px-3 py-4 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 focus:outline-none duration-100 ease-in-out">Sign Up</button>
                        </div>
                        <p class="text-sm text-center text-gray-400">
                            Already have an account yet?
                            <Link to="/login" class="font-semibold text-indigo-500 focus:text-indigo-600 focus:outline-none focus:underline"> Log In</Link>.
                        </p>
                    </form>
                    <div class="flex flex-row justify-center mb-8">
                        <span class="absolute bg-white px-4 text-gray-500">or sign-up with</span>
                        <div class="w-full bg-gray-200 mt-3 h-px"></div>
                    </div>
                    <div class="flex flex-row gap-2">
                        <button onClick={() => signInWithGoogle()} class="bg-green-500 text-white w-full p-2 flex flex-row justify-center gap-2 items-center rounded-sm hover:bg-green-600 duration-100 ease-in-out">
                            <svg className='w-5 fill-white text-white' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" /></svg>
                            Google
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;