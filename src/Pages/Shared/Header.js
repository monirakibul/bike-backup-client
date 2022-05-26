import { Disclosure, Menu, Transition } from '@headlessui/react';
import React, { Fragment } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { MenuIcon, XIcon } from '@heroicons/react/outline'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faDashboard, faMotorcycle, faSignOut, faUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import CustomLink from '../../hooks/CustomLink';

const Header = () => {

    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    const navigation = [
        { name: 'Home', to: '/#', current: true },
        { name: 'Portfolio', to: '/portfolio', current: false },
        { name: 'Blogs', to: '/blogs', current: false },
    ]

    return (
        <Disclosure as="nav" className="bg-gray-800">
            {({ open }) => (
                <>
                    <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                        <div className="relative flex items-center justify-between h-16">
                            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                                {/* Mobile menu button*/}
                                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white border-none">
                                    <span className="sr-only">Open main menu</span>
                                    {open ? (
                                        <XIcon className="block h-6 w-6" aria-hidden="true" />
                                    ) : (
                                        <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                                    )}
                                </Disclosure.Button>
                            </div>
                            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                                <div onClick={() => navigate('/')} className="cursor-pointer flex-shrink-0 flex items-center text-white text-3xl font-bold">
                                    <FontAwesomeIcon size="x" icon={faMotorcycle} className='mx-2' />
                                    Bike Backup
                                </div>
                                <div className="hidden sm:block sm:ml-6">
                                    <div className="flex space-x-4">
                                        {navigation.map((item) => (
                                            <CustomLink
                                                key={item.name}
                                                to={item.to}
                                                aria-current={item.current ? 'page' : undefined}
                                            >
                                                {item.name}
                                            </CustomLink>
                                        ))}
                                    </div>
                                </div>
                            </div>
                            <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">

                                {/* Profile dropdown */}
                                <Menu as="div" className="ml-3 relative">
                                    <div>
                                        <Menu.Button className="bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white">
                                            <span className="sr-only">Open user menu</span>
                                            <img
                                                className="h-8 w-8 rounded-full ring ring-gray-400"
                                                src={user?.photoURL ?? 'https://api.lorem.space/image/face?hash=88560'}
                                                alt={user?.displayName}
                                            />
                                        </Menu.Button>
                                    </div>
                                    <Transition
                                        as={Fragment}
                                        enter="transition ease-out duration-100"
                                        enterFrom="transform opacity-0 scale-95"
                                        enterTo="transform opacity-100 scale-100"
                                        leave="transition ease-in duration-75"
                                        leaveFrom="transform opacity-100 scale-100"
                                        leaveTo="transform opacity-0 scale-95"
                                    >
                                        <Menu.Items className="z-10  origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">

                                            {
                                                user ? <>
                                                    <Menu.Item>
                                                        <Link to='/dashboard/profile'
                                                            className='hover:bg-gray-300 block px-4 py-2 text-sm text-gray-700'>
                                                            <FontAwesomeIcon className='pr-3' icon={faDashboard} />
                                                            Dashboard
                                                        </Link>
                                                    </Menu.Item>
                                                    <hr />
                                                    <Menu.Item>
                                                        <div onClick={() => signOut(auth)}
                                                            className='hover:bg-gray-300 cursor-pointer block px-4 py-2 text-sm text-gray-700'>
                                                            <FontAwesomeIcon className='pr-3' icon={faSignOut} />
                                                            Log Out
                                                        </div>
                                                    </Menu.Item>
                                                </>
                                                    :
                                                    <>
                                                        <Menu.Item>
                                                            <Link to='/login'
                                                                className='hover:bg-gray-300 block px-4 py-2 text-sm text-gray-700'>
                                                                <FontAwesomeIcon className='pr-3' icon={faUser} />
                                                                Login
                                                            </Link>
                                                        </Menu.Item>
                                                        <hr />
                                                        <Menu.Item>
                                                            <Link to='/register'
                                                                className='hover:bg-gray-300 block px-4 py-2 text-sm text-gray-700'>
                                                                <FontAwesomeIcon className='pr-3' icon={faUserPlus} />
                                                                SignUp
                                                            </Link>
                                                        </Menu.Item>
                                                    </>
                                            }
                                        </Menu.Items>
                                    </Transition>
                                </Menu>
                            </div>
                        </div>
                    </div>

                    <Disclosure.Panel className="sm:hidden">
                        <div className="px-2 pt-2 pb-3 space-y-1">
                            {navigation.map((item) => (
                                <CustomLink
                                    key={item.name}
                                    to={item.to}
                                >
                                    {item.name}
                                </CustomLink>
                            ))}
                        </div>
                    </Disclosure.Panel>
                </>
            )}
        </Disclosure>
    );
};

export default Header;