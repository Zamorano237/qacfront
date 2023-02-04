/** @format */

import React from 'react';
import iconSuccess from '../assets/img/success.gif';

const Success = () => {
  return (
    <div className='w-full pt-[25px] bg-slate-100 h-full min-h-[82vh] flex flex-col justify-center items-center pt-10 px-2  md:p-10'>
      <div className=' w-full max-w-md text-center flex justify-center items-center flex-col rounded'>
        <div className=''>
          <img src={iconSuccess} className='h-40' alt='success' />
        </div>
        <h1 className='text-green-600 font-bold text-lg py-3 '>
          payment successful
        </h1>
      </div>
      <p className='text-xl w-[80%]'>
        Félicitations! Votre paiement a été validé avec succès. Vous recevrez
        vos articles dans votre boîte e-mail dans un délai de 8 heures. Nous
        vous demandons de vérifier votre boîte e-mail, y compris votre dossier
        Spam, pour vous assurer de ne pas manquer les articles. Si pour une
        raison quelconque vous ne recevez pas les articles, veuillez nous
        contacter via nos coordonnées mentionnées sur notre page web. Nous
        sommes toujours à votre disposition pour vous aider.
      </p>
    </div>
  );
};

export default Success;
