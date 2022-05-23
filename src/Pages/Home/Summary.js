import { faFlag, faStar, faTableList, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Summary = () => {
    return (
        <section class="m-10 text-gray-800">
            <div class="grid md:grid-cols-4 gap-4">
                <div class="mb-6 md:mb-0">
                    <div class="block shadow rounded-xl">
                        <div class="flex justify-start items-center p-6 bg-white rounded-t-lg">
                            <div class="bg-blue-600 text-white rounded-md flex justify-center items-center w-12 h-12">
                                <FontAwesomeIcon icon={faFlag} />
                            </div>
                            <div class="ml-3">
                                <p class="text-gray-500 mb-0.5">Countries</p>
                                <p class="mb-0 flex justify-start">
                                    <span class="text-xl font-semibold mr-3">60</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-6 md:mb-0">
                    <div class="block shadow rounded-xl">
                        <div class="flex justify-start items-center p-6 bg-white rounded-t-lg">
                            <div class="bg-blue-600 text-white rounded-md flex justify-center items-center w-12 h-12">
                                <FontAwesomeIcon icon={faUsers} />
                            </div>
                            <div class="ml-3">
                                <p class="text-gray-500 mb-0.5">Total Clients</p>
                                <p class="mb-0 flex justify-start">
                                    <span class="text-xl font-semibold mr-3">600</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-6 md:mb-0">
                    <div class="block shadow rounded-xl">
                        <div class="flex justify-start items-center p-6 bg-white rounded-t-lg">
                            <div class="bg-blue-600 text-white rounded-md flex justify-center items-center w-12 h-12">
                                <FontAwesomeIcon icon={faTableList} />
                            </div>
                            <div class="ml-3">
                                <p class="text-gray-500 mb-0.5">Total Projects</p>
                                <p class="mb-0 flex justify-start">
                                    <span class="text-xl font-semibold mr-3">104</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mb-0">
                    <div class="block shadow rounded-xl">
                        <div class="flex justify-start items-center p-6 bg-white rounded-t-lg">
                            <div class="bg-blue-600 text-white rounded-md flex justify-center items-center w-12 h-12">
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <div class="ml-3">
                                <p class="text-gray-500 mb-0.5">Reviews</p>
                                <p class="mb-0 flex justify-start">
                                    <span class="text-xl font-semibold mr-3">4.9</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </section>
    );
};

export default Summary;