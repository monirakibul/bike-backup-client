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
                <label htmlFor="dashboard-drawer" className="float-right drawer-button lg:hidden cursor-pointer">
                    <FontAwesomeIcon icon={faBars} />
                </label>
            </h2>

            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content block lg:ml-60 min-h-full  lg:border-l border-l-gray-200">
                    <div className='block m-5 min-h-1/2 lg:mt-12 mb-10 flex items-center justify-center'>
                        <Outlet />
                    </div>
                </div>
                <div className="drawer-side block">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <div className="w-60 min-h-full block bg-white absolute" id="sidenavSecExample">
                        <div className="pt-4 pb-2 px-6">
                            <a href="#!">
                                <div className="flex items-center">
                                    <div className="shrink-0">
                                        <img src={user.photoURL ?? 'https://api.lorem.space/image/face?hash=88560'} className="rounded-full w-10 h-10" alt="Avatar" />
                                    </div>
                                    <div className="grow ml-3">
                                        <p className="text-sm font-semibold text-blue-600">{user.displayName}</p>
                                    </div>
                                </div>
                            </a>
                        </div>
                        <ul className="relative px-1">
                            <li className="relative">
                                <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                    to="/dashboard/profile" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                    <FontAwesomeIcon icon={faUser} className="mr-3" />
                                    <span>My Profile</span>
                                </Link>
                            </li>
                            {
                                admin ?
                                    <>
                                        <li className="relative">
                                            <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                                to="/dashboard/manage-orders" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                                <FontAwesomeIcon icon={faListSquares} className="mr-3" />
                                                <span>Manage Orders</span>
                                            </Link>
                                        </li>
                                        <li className="relative">
                                            <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                                to="/dashboard/add" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                                <FontAwesomeIcon icon={faProductHunt} className="mr-3" />
                                                <span>Add A Product</span>
                                            </Link>
                                        </li>
                                        <li className="relative">
                                            <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                                to="/dashboard/make-admin" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                                <FontAwesomeIcon icon={faUserGraduate} className="mr-3" />
                                                <span>Make Admin</span>
                                            </Link>
                                        </li>
                                        <li className="relative">
                                            <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                                to="/dashboard/manage-products" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                                <FontAwesomeIcon icon={faFilePen} className="mr-3" />
                                                <span>Manage Products</span>
                                            </Link>
                                        </li>
                                    </>
                                    :
                                    <>
                                        <li className="relative">
                                            <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                                to="/dashboard/my-orders" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                                <FontAwesomeIcon icon={faListSquares} className="mr-3" />
                                                <span>My Orders</span>
                                            </Link>
                                        </li>
                                        <li className="relative">
                                            <Link className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out"
                                                to="/dashboard/add-review" data-mdb-ripple="true" data-mdb-ripple-color="primary">
                                                <FontAwesomeIcon icon={faFile} className="mr-3" />
                                                <span>Add A Review</span>
                                            </Link>
                                        </li>
                                    </>
                            }
                            <hr />
                            <li className="relative cursor-pointer">
                                <div onClick={() => signOut(auth)} className="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-blue-600 hover:bg-blue-50 transition duration-300 ease-in-out" data-mdb-ripple="true" data-mdb-ripple-color="primary">
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