/** @format */

import React from 'react';
import Home from '../pages/Home';
import Feature from './Feature';
import Menu from './Menu';

const MainContainer = () => {
  return (
    <>
      <div className='w-full '>
        <Home />
        <Feature />
        <Menu />
      </div>
    </>
  );
};

export default MainContainer;
