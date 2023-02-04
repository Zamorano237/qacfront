/** @format */

import React from 'react';
import ErroImage from '../assets/img/error.gif';
const NotFound = () => {
  return (
    <>
      <div
        className='w-full 
      h-[80vh] flex justify-center items-center h-screen '>
        <img src={ErroImage} className='h-[80vh] pt-[80px]' alt='error page' />
      </div>
    </>
  );
};

export default NotFound;
