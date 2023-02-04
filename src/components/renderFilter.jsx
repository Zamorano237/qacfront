/** @format */

import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { setCartProduct } from '../redux/cartSlice';
import Rating from '@mui/material/Rating';

const RenderFilter = ({ id, img, title, price, rating, download }) => {
  const productItem = useSelector((state) => state.productItem.productItem);
  // console.log(productItem)
  const dispatch = useDispatch();
  const data = productItem.filter((product) => product.id === id, [])[0];

  const handleCartProduct = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(setCartProduct(data));
  };

  return (
    <Link
      to={'/menu/' + id}
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <div
        id={id}
        className='group w-full h-120 min-w-[250px] min-h-[100] max-w-[250px] bg-slate-100 hover:bg-slate-50 hover:drop-shadow-md mt-6 rounded p-1 flex items-center hover:scale-105 transition-all mr-3 cursor-pointer flex-col'>
        <div className='w-fit  p-3 h-auto  group-hover:scale-110 transition-all relative  box-border'>
          <img
            alt={title}
            src={img}
            className='w-full h-auto object-cover my-3 box-border'
          />
        </div>
        <div className='py-3 flex h-full flex-col justify-end gap-1 w-full p-3'>
          <h3 className='text-base md:text-base font-semibold text-textColor'>
            {title}
          </h3>
          <p className='text-base font-semibold text-headingColor'>
            {price}
            <span className='text-base text-red-600'> € </span>
            <span className='text-base text-blue-300 text-xs ml-12'>
              {' '}
              {'   '} {download} Téléchargements
            </span>
          </p>
          <p className='text-base font-semibold text-headingColor'>
            Votes {''}
            <span className='text-base text-red-600'></span>
            <Rating
              name='half-rating'
              defaultValue={rating}
              precision={0.5}
              readOnly
            />
          </p>
          <FaCartPlus
            className='text-xl text-slate-600 hover:text-red-600 cursor-pointer self-end'
            onClick={handleCartProduct}
          />
        </div>
      </div>
    </Link>
  );
};

export default RenderFilter;
