import { faCartShopping, faCarTunnel, faHeadphonesSimple, faShieldAlt, faTruck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';

const FeatureItems = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
            <div class="flex bg-white border border-gray-200 m-5 rounded-md items-center flex-col p-5">
                <div class="py-3 md:px-3 text-primary">
                    <FontAwesomeIcon size="2x" icon={faTruck} />
                </div>
                <div class="text-center">
                    <h2 class="text-xl font-bold">Free Delivery</h2>
                    <p className='font-medium text-gray-500'>All items are eligbile for our free delivery service</p>
                </div>
            </div>
            <div class="flex bg-white border border-gray-200 m-5 rounded-md items-center flex-col p-5">
                <div class="py-3 md:px-3 text-primary">
                    <FontAwesomeIcon size="2x" icon={faCartShopping} />
                </div>
                <div class="text-center">
                    <h2 class="text-xl font-bold">Manufacturers Warranty</h2>
                    <p className='font-medium text-gray-500'>All items are guaranteed to have a minimum of 1 years warranty</p>
                </div>
            </div>
            <div class="flex bg-white border border-gray-200 m-5 rounded-md items-center flex-col p-5">
                <div class="py-3 md:px-3 text-primary">
                    <FontAwesomeIcon size="2x" icon={faHeadphonesSimple} />
                </div>
                <div class="text-center">
                    <h2 class="text-xl font-bold">Top-notch support</h2>
                    <p className='font-medium text-gray-500'>Our team are able to provide support or provide guidance with our full range of products</p>
                </div>
            </div>
            <div class="flex bg-white border border-gray-200 m-5 rounded-md items-center flex-col p-5">
                <div class="py-3 md:px-3 text-primary">
                    <FontAwesomeIcon size="2x" icon={faShieldAlt} />
                </div>
                <div class="text-center">
                    <h2 class="text-xl font-bold">Secure payments</h2>
                    <p className='font-medium text-gray-500'>SSL Secured checkout featuring Paypal, Apple Pay, Google Pay, Klarna, Shop Pay and all major card providers</p>
                </div>
            </div>
        </div>
    );
};

export default FeatureItems;