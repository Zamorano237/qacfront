/** @format */
import PayButton from './PayButton';
import React from 'react';
import { useSelector } from 'react-redux';
const PaymentSummary = ({ cartTotal, deliveryCharge, Total }) => {
  const cartProduct = useSelector((state) => state.cartProduct);

  const carItems = cartProduct.cartProductItem.map((item) => {
    const imageURL = item.imageURL;
    const title = item.title;
    const qty = item.qty;
    const price = item.price;
    return { imageURL, title, qty, price };
  });

  return (
    <>
      <div className='max-w-sm ml-auto drop-shadow rounded shadow-md overflow-hidden'>
        <h3 className='py-3 px-3 border-b bg-red-500 font-bold text-white'>
          Facture
        </h3>
        <div className='py-2 px-3 text-base flex justify-between'>
          <p>Prix Total</p>
          <p>{cartTotal} €</p>
        </div>
        <div className='py-2 px-3 text-base flex justify-between'>
          <p>Taxes</p>
          <p>{deliveryCharge} €</p>
        </div>
        <div className='py-2 px-3 text-base flex justify-between font-bold'>
          <p>Total</p>
          <p>{Total} €</p>
        </div>
      </div>

      <div className='max-w-sm ml-auto drop-shadow rounded shadow-md overflow-hidden mt-4'>
        <PayButton cartItems={carItems} />
      </div>
    </>
  );
};

export default PaymentSummary;
