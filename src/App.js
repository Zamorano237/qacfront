/** @format */

import React, { useLayoutEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import About from './pages/About';
import Blog from './pages/Blog';
import BlogDetails from './pages/BlogDetails';
import NotFound from './pages/NotFound';
import Accueil from './pages/Accueil';
import { useDispatch } from 'react-redux';
//new config
import {
  MainContainer,
  Header,
  CreateContainer,
  CreateContainerPost,
} from './components';

import MenuPage from './pages/MenuPage';
import Cart from './pages/Cart';
import MenuStatic from './pages/MenuStatic';
import Success from './pages/Success';
import Canceled from './pages/Canceled';
import { getAllProductItems, getAllPostItems } from './utils/firebaseFunctions';
import { setProductItem } from './redux/productSlice';
import { setPostItem } from './redux/postSlice';
import { Footer } from './components/index2';
import { ToastContainer } from 'react-toastify';

//end new config
import './index.css';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    (async () => {
      const data = await getAllProductItems();
      dispatch(setProductItem(data));
    })();
    (async () => {
      const data = await getAllPostItems();
      dispatch(setPostItem(data));
    })();
  }, [dispatch]);

  return (
    <AnimatePresence mode='wait'>
      <div className='w-screen h-auto flex flex-col '>
        <ToastContainer />
        <Header />
        <Routes>
          <Route path='/' element={<Accueil />} />
          <Route path='/createItem' element={<CreateContainer />} />
          <Route path='/createpost' element={<CreateContainerPost />} />
          <Route path='/store' element={<MainContainer />} />
          <Route path='/about' element={<About />} />
          <Route path='/menu' element={<MenuStatic />} />
          <Route path='/menu/:productId' element={<MenuPage />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/Success' element={<Success />} />
          <Route path='/Canceled' element={<Canceled />} />
          <Route path='/blogs' element={<Blog />} />
          <Route path='/blogs/:slug' element={<BlogDetails />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
        <Footer />
      </div>
    </AnimatePresence>
  );
};

export default App;
