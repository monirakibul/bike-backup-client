import React from 'react';

const Newsletter = () => {
    return (
        <div class="bg-gray-800 my-10 flex justify-center">
            <div class="py-12 px-4 sm:px-6 lg:py-16 lg:px-8 mx-auto">
                <h2 class="text-2xl text-center leading-9 font-extrabold tracking-tight text-gray-300 sm:text-2xl sm:leading-10">
                    Want  updated News ?
                    <br />
                    <span class="text-primary text-3xl">Sign up for our newsletter.</span>
                </h2>
                <form class="mt-8 sm:flex">
                    <input aria-label="Email address" type="email" required class="appearance-none w-full px-5 py-3 border border-gray-300 text-base leading-6 rounded-md text-gray-900 bg-white placeholder-gray-500 focus:outline-none focus:shadow-outline focus:border-blue-300 transition duration-150 ease-in-out sm:max-w-xs" placeholder="Enter your email" />
                    <div class="mt-3 rounded-md shadow sm:mt-0 sm:ml-3 sm:flex-shrink-0">
                        <button class="w-full flex items-center justify-center px-5 py-3 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline transition duration-150 ease-in-out">
                            Subscribe
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;