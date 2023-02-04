/** @format */

import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaTwitter } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className='bg-gray-50 mt-5 pt-2 justify-center  w-full flex md:flex-col flex-col  items-center'>
        <div className='flex flex-row '>
          <ul>
            <p className='text-gray-800 font-bold lg:text-xl text-base'>
              QHSE{' '}
              <span className='text-blue-600'> ACADEMIE AND CONSULTING</span>
            </p>
          </ul>
          <div className='flex gap-6 ml-5 '>
            <FaInstagram className='text-2xl cursor-pointer hover:text-yellow-600' />
            <FaTwitter className='text-2xl cursor-pointer hover:text-blue-600' />
            <FaLinkedin className='text-2xl cursor-pointer hover:text-blue-600' />
            <FaYoutube className='text-2xl cursor-pointer hover:text-red-600' />
          </div>
        </div>
        <div className='flex flex-col justify-center items-center text-center bg-gray-50'>
          <h1 className=' text-gray-800 font-semibold text-[14px]'>
            © 2022-2023 All rights reserved | Build with ❤ by{' '}
            <span className='hover:text-blue-600 font-semibold cursor-pointer'>
              WATBO Yvan{' '}
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
