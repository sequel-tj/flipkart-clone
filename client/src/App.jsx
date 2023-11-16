import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';

import DataProvider from './context/DataProvider';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';
import Dashboard from './components/dashboard/Dashboard';
import Success from './components/payment/Success';
import Failure from './components/payment/Failure';
import MyOrders from './components/orders/MyOrders';


const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ margin: '65px 0 10px 10px' }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailView />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/dashboard' element={<Dashboard />} />
            <Route path='/myOrders' element={<MyOrders />} />
            <Route path='/paymentsuccess' element={<Success />} />
            <Route path='/paymentfailure' element={<Failure />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
