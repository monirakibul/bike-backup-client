import './App.css';
import { Route, Routes } from 'react-router-dom';
import Register from './Pages/Register/Register';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import Header from './Pages/Shared/Header';
import Footer from './Pages/Shared/Footer';
import NotFound from './Pages/NotFound/NotFound';
import Purchase from './Pages/Purchase/Purchase';
import Blogs from './Pages/Blogs/Blogs';
import AddProduct from './Pages/Dashboard/AddProduct';
import Dashboard from './Pages/Dashboard/Dashboard';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddReviews from './Pages/Dashboard/AddReviews';
import MakeAdmin from './Pages/Dashboard/MakeAdmin';
import RequireAuth from './Pages/Login/RequireAuth';
import RequireAdmin from './Pages/Login/RequireAdmin';
import MyOrders from './Pages/Dashboard/MyOrders';
import ManageProducts from './Pages/Dashboard/ManageProducts';
import ManageOrders from './Pages/Dashboard/ManageOrders';
import Payment from './Pages/Purchase/Payment';
import Profile from './Pages/Dashboard/Profile';
import Portfolio from './Pages/Portfolio/Portfolio';
import Forgot from './Pages/Login/Forgot';
import ScrollToTop from './hooks/ScrollToTop';

function App() {
  return (
    <div className='flex flex-col'>
      <ScrollToTop />
      <Header></Header>
      <div className="flex-grow">
        <Routes >
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/reset' element={<Forgot />}></Route>
          <Route path='/portfolio' element={<Portfolio />}></Route>
          <Route path='/purchase/:id' element={<RequireAuth>
            <Purchase />
          </RequireAuth>}></Route>
          <Route path='/payment/:id' element={<RequireAuth>
            <Payment />
          </RequireAuth>}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/dashboard' element={
            <RequireAuth><Dashboard /></RequireAuth>
          }>
            <Route path='/dashboard/add' element={<RequireAdmin>
              <AddProduct />
            </RequireAdmin>}></Route>
            <Route path='/dashboard/profile' element={<Profile />}></Route>
            <Route path='/dashboard/add-review' element={<AddReviews />}></Route>
            <Route path='/dashboard/my-orders' element={<MyOrders />}></Route>
            <Route path='/dashboard/make-admin' element={<RequireAdmin>
              <MakeAdmin />
            </RequireAdmin>}></Route>
            <Route path='/dashboard/manage-products' element={<RequireAdmin>
              <ManageProducts />
            </RequireAdmin>}></Route>
            <Route path='/dashboard/manage-orders' element={<RequireAdmin>
              <ManageOrders />
            </RequireAdmin>}></Route>

          </Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </div>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
