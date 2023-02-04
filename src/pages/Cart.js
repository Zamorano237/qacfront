/** @format */

import React from 'react';
import { useSelector } from 'react-redux';
import EmptyCart from '../components/EmptyCart';
import CartAddedItem from '../components/CartAddedItem';
import PaymentSummary from '../components/PaymentSummary';
import { Zoom } from 'react-awesome-reveal';

const Cart = () => {
  const cartProduct = useSelector((state) => state.cartProduct);
  // console.log(cartProduct);

  const cartTotal = cartProduct.cartProductItem.reduce(
    (acc, curr) => acc + curr.total,
    0
  );
  const deliveryCharge = 0;
  const Total = cartTotal + deliveryCharge;

  /********** */

  /***** */

  return (
    <div className='p-4 mt-[60px] min-h-[73vh]'>
      <h1 className='capitalize text-lg md:text-2xl  font-semibold before:rounded-lg relative before:absolute before:-bottom-2 before:content before:left-0 before:w-32 before:h-1 before:bg-red-500 transition-all ease-in-out duration-100'>
        Votre Panier
      </h1>

      {cartProduct.cartProductItem[0] ? (
        <>
          <Zoom direction='top'>
            <span className=' demotext2 section__subtitle mt-1'>Produits </span>{' '}
            <br />
          </Zoom>
          <div className='flex flex-col md:flex-row w-full mt-1 '>
            <div className='w-full '>
              {cartProduct.cartProductItem.map((el) => {
                return (
                  <CartAddedItem
                    id={el.id}
                    img={el.imageURL}
                    title={el.title}
                    qty={el.qty}
                    price={el.price}
                    total={el.total}
                  />
                );
              })}
            </div>
            <div className='w-full min-w-210 mt-5 md:mt-0 md:min-w-350 max-w-lg  relative'>
              <PaymentSummary
                cartTotal={cartTotal}
                deliveryCharge={deliveryCharge}
                Total={Total}
              />
            </div>
          </div>
        </>
      ) : (
        <EmptyCart />
      )}

      <></>
    </div>
  );
};

export default Cart;
