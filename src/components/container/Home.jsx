/** @format */

import React from 'react';
import hero from '../../assets/hero.png';
import { logos } from '../../Data';
import { Slide, Zoom } from 'react-awesome-reveal';
import { motion } from 'framer-motion';
const Home = () => {
  const container = {
    hidden: {
      opacity: 0,
      scale: 0,
    },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  };
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 },
  };
  return (
    <div className='section' id='home'>
      <div className='md:flex items-center justify-center'>
        <div>
          <Slide direction='left'>
            <div className='font-bold text-XL  mb-4'>
              {' '}
              Votre partenaire pour une formation en ligne de Qualité
            </div>
            <div className='sm:text-[2rem] text-[1.5rem] font-bold'>
              Révolutionnez votre façon d'apprendre en ligne
            </div>
            <p className='text-xl leading-7 text-gray max-w-xl'>
              Rejoignez les milliers de professionnels et managers qui ont fait
              de QHSE ACADEMIE en CONSULTING leur meilleur partenaire pour une
              formation en ligne et en présentiel de qualité supérieure.
            </p>
          </Slide>
        </div>
        <div className='md:w-[30%] m-0 '>
          <Slide direction='right'>
            <img src={hero} alt='' className='pl-10 ' />
          </Slide>
        </div>
      </div>
      <div>
        <Zoom direction='top'>
          <p className='text-center text-xl'>
            Nous collaborons avec les{' '}
            <span className='text-Teal'>Compagnies suivantes</span>
          </p>
        </Zoom>
        <motion.div
          variants={container}
          initial='hidden'
          whileInView='visible'
          className='flex items-center justify-center flex-wrap gap-8 p-2'>
          {logos.map((logo, index) => (
            <motion.div variants={item} className='w-28' key={index}>
              <img src={logo} alt='' className='w-full object-cover' />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
