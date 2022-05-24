import { faProductHunt } from '@fortawesome/free-brands-svg-icons';
import { faBars, faFile, faFilePen, faListSquares, faSignOut, faUser, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { signOut } from 'firebase/auth';
import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, Outlet } from 'react-router-dom';
import auth from '../../firebase.init';
import ChangePageTitle from '../../hooks/ChangePageTitle';
import useAdmin from '../../hooks/useAdmin';
import Loading from '../Shared/Loading';

const Dashboard = () => {
    const [user] = useAuthState(auth)
    const [admin, adminLoading] = useAdmin(user)
    if (adminLoading) return <Loading />
    return (
        <div>
            <ChangePageTitle pageTitle="Dashboard" />
            <h2 className="text-2xl  font-bold text-slate-800 bg-white border-b p-5 border-b-gray-200">Dashboard
                <label for="dashboard-drawer" class="float-right drawer-button lg:hidden">
                    <FontAwesomeIcon size='' icon={faBars} />
                </label>
            </h2>

            <div class="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" class="drawer-toggle" />
                <div class="drawer-content block lg:ml-60 min-h-full  lg:border-l border-l-gray-200">
                    <div className='block  min-h-1/2 lg:mt-12 mb-10 flex items-center justify-center'>
                        <Outlet />
                    </div>
                </div>
                <div class="drawer-side block">
                    <label for="dashboard-drawer" class="drawer-overlay"></label>
                    <div class="w-60 min-h-full block bg-white absolute" id="sidenavSecExample">
                        <div class="pt-4 pb-2 px-6">
                            <a href="#!">
                                <div class="flex items-center">
                                    <div class="shrink-0">
                                        <img src={user.photoURL ?? 'https://api.lorem.space/image/face?hash=88560'} class="rounded-full w-10 h-10" alt="Avatar" />
                                    </div>
                                    <div class="grow ml-3">
                                        <p class="text-sm font-semibold text-blue-600">{user.displayName}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <ul class="relative px-1">
                            <li class="relative">
                                <Link class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                    to="/dashboard" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                    <FontAwesomeIcon icon={faUser} className="mr-3" />
                                    <span>My Profile</span>
                                </Link>
                            </li>
                            {
                                admin ?
                                    <>
                                        <li class="relative">
                                            <Link class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                                to="/dashboard/manage-orders" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                                <FontAwesomeIcon icon={faListSquares} className="mr-3" />
                                                <span>Manage Orders</span>
                                            </Link>
                                        </li>
                                        <li class="relative">
                                            <Link class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                                to="/dashboard/add" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                                <FontAwesomeIcon icon={faProductHunt} className="mr-3" />
                                                <span>Add A Product</span>
                                            </Link>
                                        </li>
                                        <li class="relative">
                                            <Link class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                                to="/dashboard/make-admin" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                                <FontAwesomeIcon icon={faUserGraduate} className="mr-3" />
                                                <span>Make Admin</span>
                                            </Link>
                                        </li>
                                        <li class="relative">
                                            <Link class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                                to="/dashboard/manage-products" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                                <FontAwesomeIcon icon={faFilePen} className="mr-3" />
                                                <span>Manage Products</span>
                                            </Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li class="relative">
                                            <Link class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                                to="/dashboard/my-orders" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                                <FontAwesomeIcon icon={faListSquares} className="mr-3" />
                                                <span>My Orders</span>
                                            </Link>
                                        </li>
                                        <li class="relative">
                                            <Link class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                                to="/dashboard/add-review" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                                <FontAwesomeIcon icon={faFile} className="mr-3" />
                                                <span>Add A Review</span>
                                            </Link>
                                        </li>
                                    </>
                            }
                            <hr />
                            <li class="relative cursor-pointer">
                                <div onClick={() => signOut(auth)} class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                    <FontAwesomeIcon icon={faSignOut} className="mr-3" />
                                    <span> Log Out</span>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;