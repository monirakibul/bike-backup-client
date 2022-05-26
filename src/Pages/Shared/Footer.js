import { faFacebookSquare, faInstagramSquare, faLinkedinIn, faTwitterSquare, faYoutubeSquare } from '@fortawesome/free-brands-svg-icons';
import { faMotorcycle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link, Navigate } from 'react-router-dom';

const Footer = () => {
    return (
        <footer className="bg-gray-800 pt-10">
            <div className="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">


                <div className="p-5 sm:w-full md:w-6/12">
                    <div onClick={() => Navigate('/')} className="cursor-pointer flex-shrink-0 flex items-center text-white text-3xl font-bold">
                        <FontAwesomeIcon size="x" icon={faMotorcycle} className='mx-2' />
                        Bike Backup
                    </div>
                    <p className="my-5 text-gray-400">
                        Bike Backup is a Bike parts manufacturer websites. Users will be able to create account and order products. User can pay their payment using Card.
                    </p>
                </div>

                <div className="p-5 w-1/2 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Important
                    </div>

                    <Link to="/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"> Home </Link>
                    <Link to="/dashboard/profile" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"> Dashboard</Link>
                    <Link to="/profile" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">Portfolio </Link>
                    <Link to="/blogs" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700"> Blogs </Link>
                </div>

                <div className="p-5 w-1/2 md:w-3/12">
                    <div className="text-xs uppercase text-gray-400 font-medium mb-6">
                        Community
                    </div>

                    <a href="https://github.com/monirakibul" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        GitHub
                    </a>
                    <a href="https://www.linkedin.com/in/rakibul-hasan2082/" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        LinkedIn
                    </a>
                    <a href="mailto:rakibul.hasan2082@gmail.com" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Mail
                    </a>
                    <a href="https://discordapp.com/users/8490" className="my-3 block text-gray-300 hover:text-gray-100 text-sm font-medium duration-700">
                        Discord
                    </a>
                </div>
            </div>

            <div className="pt-2">
                <div className="flex pb-5 px-3 m-auto pt-5 
            border-t border-gray-500 text-gray-400 text-sm 
            flex-col items-center  md:flex-row max-w-6xl ">
                    <div className="mt-2">
                        © Copyright 1998-year. All Rights Reserved.
                    </div>

                    <div className="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                        <a href="#" className="w-6 mx-1">
                            <FontAwesomeIcon icon={faFacebookSquare} />
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <FontAwesomeIcon icon={faTwitterSquare} />
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <FontAwesomeIcon icon={faYoutubeSquare} />
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <FontAwesomeIcon icon={faLinkedinIn} />
                        </a>
                        <a href="#" className="w-6 mx-1">
                            <FontAwesomeIcon icon={faInstagramSquare} />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;