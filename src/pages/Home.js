/** @format */

import React from 'react';
import Delivery from '../img/delivery.png';
import HeroBg from '../img/heroBg.png';
import { heroData } from '../utils/data';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <section
      className='grid grid-cols-1 px-4 md:grid-cols-2 gap-2 w-full mt-5 pt-10 xl:px-12'
      id='home'>
      <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
        <div className='flex items-center gap-2 justify-center bg-orange-100 px-4 py-1 rounded-full'>
          <p className='text-base text-orange-500 font-semibold m-0'>
            Téléchargement direct
          </p>
          <div className='w-8 h-8 bg-white rounded-full overflow-hidden drop-shadow-xl'>
            <img
              src={Delivery}
              className='w-full h-full object-contain'
              alt='delivery'
            />
          </div>
        </div>

        <p className='text-[1rem] lg:text-[1.8rem] font-bold tracking-wide text-headingColor'>
          Découvrez la destination ultime pour les professionnels en quête de
          ressources et de documentations de {''}
          <span className='text-orange-600 text-[1rem] lg:text-[1.8rem]'>
            Qualité supérieure.
          </span>
        </p>

        <p className='text-base text-textColor text md:text-left md:w-[80%]'>
          QHSE ACADEMIE AND CONSULTING est votre source fiable pour tout ce dont
          les professionnels du secteur QHSE ont besoin pour améliorer en
          continu leur performance. Nous offrons une gamme complète de produits,
          y compris des tableaux de bord, des kits documentaires, des
          applications QHSE et des présentations PowerPoint, pour vous aider à
          atteindre vos objectifs. Rejoignez notre communauté de professionnels
          déterminés à améliorer leur performance grâce à nos produits de
          qualité supérieure.
        </p>
        <Link to={'/cart'}>
          <button
            type='button'
            className='mx-3 text-black bg-gradient-to-br from-orange-400 to-orange-500 w-full md:w-auto px-4 py-2  rounded-lg hover:shadow-lg transition-all ease-in-out duration-100'>
            Validez vos paiements
          </button>
        </Link>
      </div>
      <div className='py-2 flex-1 flex items-center relative'>
        <img
          src={HeroBg}
          className=' ml-auto h-420 w-full lg:w-auto lg:h-650'
          alt='hero-bg'
        />

        <div className='w-full h-full absolute top-0 left-0 flex items-center justify-center lg:px-20  py-4 gap-4 flex-wrap'>
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className='  lg:w-190  p-4 bg-cardOverlay backdrop-blur-md rounded-3xl flex flex-col items-center justify-center drop-shadow-lg'>
                <img
                  src={n.imageSrc}
                  className='w-20 lg:w-40 -mt-10 lg:-mt-20 '
                  alt='I1'
                />
                <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>
                  {n.name}
                </p>

                <p className='text-[12px] lg:text-sm text-lighttextGray font-semibold my-1 lg:my-3'>
                  {n.decp}
                </p>

                <p className='text-sm font-semibold text-headingColor'>
                  {n.price} <span className='text-xs text-red-600'> € </span>
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Home;
