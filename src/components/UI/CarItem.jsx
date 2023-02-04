/** @format */
import React from 'react';
import { Col } from 'reactstrap';
import { Link } from 'react-router-dom';
import '../../styles/car-item.css';
import { MdShoppingBasket } from 'react-icons/md';
import { GrYoutube } from 'react-icons/gr';
import { motion } from 'framer-motion';
import { setCartProduct } from '../../redux/cartSlice';
import { useDispatch } from 'react-redux';
import Rating from '@mui/material/Rating';
import Tooltip from '@mui/material/Tooltip';
import PayButton from '../PayButton';

const CarItem = (props) => {
  const { imageURL, title, id, video, rating, price } = props.item;
  const dispatch = useDispatch();
  const cartItems = [];
  cartItems.push(props.item);

  const handleCartProduct = (e) => {
    e.stopPropagation();
    e.preventDefault();
    dispatch(setCartProduct(props.item));
  };
  return (
    <Col lg='4' md='4' sm='6' className='mb-5 w-100 '>
      <div className='car__item mx-2 min-h-[460px] flex flex-col justify-between '>
        <div className='car__img'>
          <img src={imageURL} alt='' className='w-100' />
        </div>

        <div className='car__item-content mt-4'>
          <h5 className='section__title text-center'>{title}</h5>
          <h6 className='rent__price text-center mt-'>
            {price} <span> €</span>{' '}
            <Rating
              name='half-rating'
              defaultValue={Number(rating)}
              precision={0.5}
              readOnly
            />
          </h6>
          <div className='car__item-info d-flex align-items-center gap-3 justify-content-center mt-5 mb-2'>
            <Tooltip title='Visionner la présentation sur Youtube'>
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
            <Tooltip title='Ajout au panier'>
              <span className=' d-flex align-items-center gap-1  hover:scale-125'>
                <motion.div
                  whileTap={{ scale: 0.75 }}
                  className='w-8 h-8 rounded-full bg-red-600 flex items-center justify-center cursor-pointer hover:shadow-md -mt-8'
                  onClick={handleCartProduct}>
                  <MdShoppingBasket className='text-white' />
                </motion.div>
              </span>
            </Tooltip>
          </div>

          <div className='flex justify-center aligns-center'>
            <button className=' w-50  hover:scale-110'>
              <PayButton cartItems={cartItems} />
            </button>
            <button className=' w-50 h-[40px] justify-center items-center py-1 px-5 border-2 border-solid  w-full min-w-[100px] max-w-[200px] hover:bg-red-600 hover:text-white font-semibold rounded '>
              <Link
                className='hover:text-white'
                to={'/menu/' + id}
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                Détails
              </Link>
            </button>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CarItem;
