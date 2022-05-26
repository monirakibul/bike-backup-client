import { faFlag, faStar, faTableList, faUser, faUsers } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const Summary = () => {
    return (
        <section className="m-5 text-gray-800">
            <h1 className="text-2xl lg:text-3xl text-primary font-semibold text-center py-10">
                Summary
            </h1>
            <div className="grid md:grid-cols-4 gap-4">
                <div className="">
                    <div className="block shadow rounded-xl">
                        <div className="flex justify-start items-center p-6 bg-white rounded-t-lg">
                            <div className="bg-blue-600 text-white rounded-md flex justify-center items-center w-12 h-12">
                                <FontAwesomeIcon icon={faFlag} />
                            </div>
                            <div className="ml-3">
                                <p className="text-gray-500 mb-0.5">Countries</p>
                                <p className="mb-0 flex justify-start">
                                    <span className="text-xl font-semibold mr-3">60</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="block shadow rounded-xl">
                        <div className="flex justify-start items-center p-6 bg-white rounded-t-lg">
                            <div className="bg-blue-600 text-white rounded-md flex justify-center items-center w-12 h-12">
                                <FontAwesomeIcon icon={faUsers} />
                            </div>
                            <div className="ml-3">
                                <p className="text-gray-500 mb-0.5">Total Clients</p>
                                <p className="mb-0 flex justify-start">
                                    <span className="text-xl font-semibold mr-3">600</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="block shadow rounded-xl">
                        <div className="flex justify-start items-center p-6 bg-white rounded-t-lg">
                            <div className="bg-blue-600 text-white rounded-md flex justify-center items-center w-12 h-12">
                                <FontAwesomeIcon icon={faTableList} />
                            </div>
                            <div className="ml-3">
                                <p className="text-gray-500 mb-0.5">Total Projects</p>
                                <p className="mb-0 flex justify-start">
                                    <span className="text-xl font-semibold mr-3">104</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <div className="block shadow rounded-xl">
                        <div className="flex justify-start items-center p-6 bg-white rounded-t-lg">
                            <div className="bg-blue-600 text-white rounded-md flex justify-center items-center w-12 h-12">
                                <FontAwesomeIcon icon={faStar} />
                            </div>
                            <div className="ml-3">
                                <p className="text-gray-500 mb-0.5">Reviews</p>
                                <p className="mb-0 flex justify-start">
                                    <span className="text-xl font-semibold mr-3">4.9</span>
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