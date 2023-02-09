/** @format */

import React from 'react';
import { FaFacebook } from 'react-icons/fa';
import { FaWhatsapp } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <>
      <div className='bg-gray-50 mt-5 pt-2 justify-center  w-full flex md:flex-col flex-col  items-center'>
        <div className='flex flex-row '>
          <ul>
            <p className='text-gray-800 font-bold lg:text-xl text-sm'>
              QHSE{' '}
              <span className='text-blue-600'> ACADEMIE AND CONSULTING</span>
            </p>
          </ul>
          <div className='flex gap-6 ml-0 lg:ml-5 pr-2 '>
            <a
              href='https://www.facebook.com/qhse.academie'
              target='_blank'
              rel='noopener noreferrer'
              className='capitalize text-blue-800'>
              <FaFacebook className='text-2xl cursor-pointer hover:text-yellow-600' />
            </a>
            <a
              href='http://wa.me/+237694289819'
              target='_blank'
              rel='noopener noreferrer'
              className='normal-case text-green-800'>
              <FaWhatsapp className='text-2xl cursor-pointer hover:text-blue-600' />
            </a>
            <a
              href='https://www.linkedin.com/company/qhse-academie-and-consulting/'
              target='_blank'
              rel='noopener noreferrer'
              className='capitalize text-blue-700'>
              <FaLinkedin className='text-2xl cursor-pointer hover:text-blue-600' />
            </a>
            <a
              href='https://www.youtube.com/@qhseacademie1043'
              target='_blank'
              rel='noopener noreferrer'
              className='normal-case text-red-600 '>
              <FaYoutube className='text-2xl cursor-pointer hover:text-red-600' />
            </a>
          </div>
        </div>
        <div className='flex flex-col justify-center items-center text-center bg-gray-50'>
          <h1 className=' text-gray-800 font-semibold text-[12px]'>
            © 2022-2023 All rights reserved | Build with ❤ by{' '}
            <span className='hover:text-blue-600 font-semibold cursor-pointer'>
              QHSE ACADEMIE{' '}
            </span>
          </h1>
        </div>
      </div>
    </>
  );
}

export default Footer;
