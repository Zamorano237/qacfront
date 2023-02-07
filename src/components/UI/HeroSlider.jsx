/** @format */

import React from 'react';

import Slider from 'react-slick';
import { Container } from 'reactstrap';
import { Link } from 'react-router-dom';

import '../../styles/hero-slider.css';

const HeroSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 6000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: true,
  };
  return (
    <Slider {...settings} className='hero__slider'>
      <div className='slider__item slider__item-01 mt0'>
        <Container>
          <div className='slider__content '>
            <h1 className='text-light mb-3 '>QHSE ACADEMIE AND CONSULTING</h1>
            <h4 className='text-light mb-4'>
              L'Expérience et l'expertise au service de la performance
            </h4>

            <button className='btn reserve__btn mt-4 hover:bg-cyan-200 hover:scale-110'>
              <Link to='/about'>En savoir plus</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className='slider__item slider__item-02 mt0'>
        <Container>
          <div className='slider__content '>
            <h1 className='text-light mb-3'>DES RESSOURCES ET DOCUMENTS</h1>
            <h4 className='text-light mb-4'>
              Profitez de plus de + de 350 modéles de Tableaux de Bord et des
              documents professionnels pour boostez votre performance
            </h4>

            <button className='btn reserve__btn mt-4 hover:bg-cyan-200 hover:scale-110'>
              <Link to='/store'>Visitez notre boutique</Link>
            </button>
          </div>
        </Container>
      </div>

      <div className='slider__item slider__item-03 mt0'>
        <Container>
          <div className='slider__content '>
            <h1 className='text-light mb-3'>
              DIGITALISATION DES SYSTEMES DE MANAGEMENTS
            </h1>
            <h4 className='text-light mb-4'>
              QHSE ACADEMIE propose également des services afin d'apporter aux
              organisations des solutions innovantes dans leurs systémes de
              management
            </h4>

            <button className='btn reserve__btn mt-4 hover:bg-cyan-200 hover:scale-110'>
              <Link to='/store'>Visitez notre boutique</Link>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HeroSlider;
