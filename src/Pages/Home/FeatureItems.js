import { faCartShopping, faCarTunnel, faHeadphonesSimple, faShieldAlt, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FeatureItems = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div className="flex bg-white border border-gray-200 m-5 rounded-md items-center flex-col p-5">
                <div className="bg-blue-600 text-white rounded-md flex justify-center items-center w-12 h-12 mb-3">
                    <FontAwesomeIcon icon={faTruck} />
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-medium">Free Delivery</h2>
                    <p className=' text-gray-500'>All items are eligbile for our free delivery service</p>
                </div>
            </div>
            <div className="flex bg-white border border-gray-200 m-5 rounded-md items-center flex-col p-5">
                <div className="bg-blue-600 text-white rounded-md flex justify-center items-center w-12 h-12 mb-3">
                    <FontAwesomeIcon icon={faCartShopping} />
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-medium">Manufacturers Warranty</h2>
                    <p className=' text-gray-500'>All items are guaranteed to have a minimum of 1 years warranty</p>
                </div>
            </div>
            <div className="flex bg-white border border-gray-200 m-5 rounded-md items-center flex-col p-5">
                <div className="bg-blue-600 text-white rounded-md flex justify-center items-center w-12 h-12 mb-3">
                    <FontAwesomeIcon icon={faHeadphonesSimple} />
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-medium">Top-notch support</h2>
                    <p className='text-gray-500'>Our team are able to provide support or provide guidance with our full range of products</p>
                </div>
            </div>
            <div className="flex bg-white border border-gray-200 m-5 rounded-md items-center flex-col p-5">
                <div className="bg-blue-600 text-white rounded-md flex justify-center items-center w-12 h-12 mb-3">
                    <FontAwesomeIcon icon={faShieldAlt} />
                </div>
                <div className="text-center">
                    <h2 className="text-xl font-medium">Secure payments</h2>
                    <p className=' text-gray-500'>SSL Secured checkout featuring Paypal, Apple Pay, Google Pay, Klarna, Shop Pay and all major card providers</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureItems;