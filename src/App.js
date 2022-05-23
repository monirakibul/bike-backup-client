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

function App() {
  return (
    <div className='flex flex-col'>
      <Header></Header>
      <div className="flex-grow">
        <Routes >
          <Route path='/' element={<Home />}></Route>
          <Route path='/login' element={<Login />}></Route>
          <Route path='/register' element={<Register />}></Route>
          <Route path='/purchase' element={<Purchase />}></Route>
          <Route path='/blogs' element={<Blogs />}></Route>
          <Route path='/dashboard' element={<Dashboard />}>
            <Route path='/dashboard/add' element={<AddProduct />}></Route>
            <Route path='/dashboard/add-review' element={<AddReviews />}></Route>


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
