/** @format */

import React from 'react';
import { FaCartPlus } from 'react-icons/fa';
import Menu from '../components/Menu';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setCartProduct } from '../redux/cartSlice';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import style from '../styles/markdown-styles.module.css';
import Rating from '@mui/material/Rating';
import { motion } from 'framer-motion';
import { GrYoutube } from 'react-icons/gr';
import PayButton from '../components/PayButton';
import Skeleton from '@mui/material/Skeleton';

const MenuPage = () => {
  const productItem = useSelector((state) => state.productItem.productItem);
  const productLoading = useSelector(
    (state) => state.productItem.productLoading
  );
  const dispatch = useDispatch();
  const params = useParams();
  let content;
  let data;
  if (productLoading) {
    content = (
      <>
        <div className='min-h-[460px] min-w-[250px] my-6  flex justify-center flex-col items-center mt-[80px]'>
          <Skeleton variant='rectangular' width='90%' height={304} />
          <Skeleton width='90%' height={60} />
          <Skeleton width='90%' height={80} />
          <Skeleton width='85%' height={70} />
          <Skeleton width='90%' height={60} />
        </div>
      </>
    );
  } else {
    data = productItem.filter(
      (product) => product.id === params.productId,
      []
    )[0];

    console.log(data);
    const cartItems = [];
    cartItems.push(data);

    const handleCartProduct = (e) => {
      e.stopPropagation();
      e.preventDefault();
      dispatch(setCartProduct(data));
    };
    content = (
      <>
        <div className='h-full mt-[65px]'>
          <div className='w-full  p-4 max-w-[90%] m-auto h-auto flex flex-col sm:flex-row'>
            <div className='flex-col'>
              <div className='group w-full md:min-w-450 md:w-[640px] md:p-9 bg-slate-100 cursor-pointer'>
                <img
                  className='w-full h-full  rounded group-hover:scale-125 transition-all '
                  src={data.imageURL}
                  alt={data.title}
                />
              </div>
              <h1 className='text-slate-600 font-bold capitalize text-xl md:text-2xl'>
                {data.title}
              </h1>
              <div>
                <div className='text-red-600 flex items-center my-2'>
                  <p className='text-base font-semibold text-headingColor'>
                    Votes {''}
                    <span className='text-base text-red-600'></span>
                    <Rating
                      name='half-rating'
                      defaultValue={data.rating}
                      precision={0.5}
                      readOnly
                    />
                  </p>
                  <span className='bg-slate-600 p-1 ml-[25px] rounded-full'>
                    {'  '}
                  </span>
                  <span className='text-slate-600 px-1'>{data.category}</span>
                </div>
              </div>
              <p className='text-base font-bold text-red-600 text-[24px] text-headingColor'>
                {data.price}
                <span className='text-base text-red-600 text-[24px]'> € </span>
                <span className='text-base text-blue-600 text-xl ml-12'>
                  {' '}
                  {'   '} {data.download} Téléchargements
                </span>
              </p>
              <div className='flex gap-4 w-full my-2'>
                <PayButton
                  className='flex justify-center items-center py-1 px-5 border-2 border-solid  w-full min-w-[100px] max-w-[200px] hover:bg-red-600 hover:text-white font-semibold rounded'
                  cartItems={cartItems}
                />

                <button
                  className='flex justify-center items-center py-1 px-5 border-2 border-solid  w-full min-w-[100px] max-w-[200px] hover:bg-red-600 hover:text-white font-semibold rounded'
                  onClick={handleCartProduct}>
                  <span className='whitespace-nowrap'>Add to Cart</span>
                  <FaCartPlus className='text-xl text-slate-600 hover:text-red-600 cursor-pointer self-end mx-2' />
                </button>
              </div>

              <span className=' d-flex align-items-center gap-1 mt-4'>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8'>
                  <a href={`${data.video}`} target='_blank' rel='noreferrer'>
                    {' '}
                    <GrYoutube className='text-white' />
                  </a>
                </motion.div>
                Cliquez sur l'icone Pour visionner la présentation
              </span>
            </div>
            <div className='h-full sm:px-6 py-4'>
              <div>
                <h4 className='font-semibold'>Descriptions : </h4>
                <ReactMarkdown
                  className={style.reactMarkDown}
                  rehypePlugins={[rehypeRaw]}
                  children={data.description}
                />
              </div>
            </div>
          </div>
          <Menu heading={'Produits Similaire'} filterbyProps={data.category} />
        </div>
      </>
    );
  }

  return <>{content}</>;
};

export default MenuPage;
