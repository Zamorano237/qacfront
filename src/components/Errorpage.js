/** @format */

import React from 'react';
import { useRouteError } from 'react-router-dom';
import ErroImage from '../assets/img/error.gif';

const Errorpage = () => {
  const error = useRouteError();
  if (error) {
    return (
      <div className='w-full min-h-[100vh] flex justify-center items-center h-screen '>
        <img src={ErroImage} className='h-screen' alt='error page' />
      </div>
    );
  }
};

export default Errorpage;
