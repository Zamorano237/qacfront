/** @format */
import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import { MdShoppingBasket } from 'react-icons/md';
import { motion } from 'framer-motion';
import { GrYoutube } from 'react-icons/gr';
import { AiFillEye } from 'react-icons/ai';
import { setCartProduct } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import Tooltip from '@mui/material/Tooltip';

import '../../styles/car-item.css';

const CarItem = (props) => {
  const { imageURL, title, id, video, price } = props.item;
  const dispatch = useDispatch();

  const handleCartProduct = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(setCartProduct(props.item));
  };

  return (
    <Col
      lg='4'
      md='4'
      sm='6'
      className=' w-100 relative md:mb-12 '
      style={{ paddingLeft: 0, height: '130px' }}>
      <Link
        to={'/menu/' + id}
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
        <div className='car__item cardis mx-2' key={id}>
          <div className='car__img'>
            <img src={imageURL} alt='' className='w-100 contrast-50' />
          </div>

          <div className='car__item-content cardisC mt-4 absolute top-0'>
            <p className='section__title text-center pr-8 m-0 font-bold text-black text-xs md:text-sm lg:text-base xl:text-lg'>
              {title}
            </p>
            <p className='rent__price text-center text-red-600/100 font-bold text-xl m-0'>
              ${price}
            </p>

            <div
              className='car__item-info hidden align-items-center  justify-content-between mt-5 mb-4 pl-0 ml-5'
              style={{ width: '160px' }}>
              <Tooltip title='Visionnez la présentation sur Youtube'>
                <span className=' d-flex align-items-center gap-1  hover:scale-125'>
                  <motion.div
                    whileTap={{ scale: 0.75 }}
                    className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8'>
                    <a href={`${video}`} target='_blank' rel='noreferrer'>
                      {' '}
                      <GrYoutube className='text-white' />
                    </a>
                  </motion.div>
                </span>
              </Tooltip>
              <Tooltip title='Ajoutez le produit au panier'>
                <span className=' d-flex align-items-center gap-1 hover:scale-125'>
                  <motion.div
                    whileTap={{ scale: 0.75 }}
                    className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8'
                    onClick={handleCartProduct}>
                    <MdShoppingBasket className='text-white' />
                  </motion.div>
                </span>
              </Tooltip>
              <Tooltip title='Obtenir les détails sur le produit'>
                <span className=' d-flex align-items-center gap-1 hover:scale-125'>
                  <motion.div
                    whileTap={{ scale: 0.75 }}
                    className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8'>
                    <Link to={'/menu/' + id}>
                      {' '}
                      <AiFillEye className='text-white' />
                    </Link>
                  </motion.div>
                </span>
              </Tooltip>
            </div>
          </div>
        </div>
      </Link>
    </Col>
  );
};

export default CarItem;
