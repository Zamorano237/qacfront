/** @format */

import React from 'react';
import iconGiphy from '../assets/img/giphy.gif';

const Canceled = () => {
  return (
    <div className='w-full pt-[25px] bg-slate-100 h-full min-h-[82vh] flex flex-col justify-center items-center pt-10 px-2  md:p-10'>
      <div className='bg-slate-100 w-full max-w-md text-center flex justify-center items-center flex-col rounded'>
        <div className=''>
          <img src={iconGiphy} className='h-40' alt='error' />
        </div>
        <h1 className='text-red-600 font-bold text-lg py-3 '>payment Cancel</h1>
      </div>
      <p className='text-xl w-[80%]'>
        Nous sommes désolés, il semble qu'il y ait eu une erreur lors de votre
        paiement. Veuillez vérifier les détails de votre transaction et essayer
        à nouveau. Si vous rencontrez toujours des difficultés, n'hésitez pas à
        nous contacter pour discuter d'autres options de paiement disponibles.
        Nos coordonnées sont disponibles sur notre page web. Nous sommes
        toujours à votre disposition pour vous aider.
      </p>
    </div>
  );
};

export default Canceled;
