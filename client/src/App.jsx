import { Box } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Home from './components/home/Home';

import DataProvider from './context/DataProvider';
import DetailView from './components/details/DetailView';
import Cart from './components/cart/Cart';
import Dashboard from './components/dashboard/Dashboard';


const App = () => {
  return (
    <DataProvider>
      <BrowserRouter>
        <Header />
        <Box style={{ marginTop: 55 }}>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/product/:id' element={<DetailView />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/dashboard' element={<Dashboard />} />
          </Routes>
        </Box>
      </BrowserRouter>
    </DataProvider>
  );
}

export default App;
