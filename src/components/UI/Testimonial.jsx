/** @format */

import React from 'react';
import Slider from 'react-slick';

import '../../styles/testimonial.css';

import ava01 from '../../assets/all-images/ava-1.jpg';
import ava02 from '../../assets/all-images/ava-2.jpg';
import ava03 from '../../assets/all-images/ava-3.jpg';
import ava05 from '../../assets/all-images/motema.jpg';
import ava06 from '../../assets/all-images/OIP.jpeg';
import ava07 from '../../assets/all-images/BA.jpeg';
import { Slide } from 'react-awesome-reveal';

const Testimonial = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <Slide direction='right'>
      <Slider {...settings}>
        <div className='testimonial py-4 px-4'>
          <p className='section__description text-justify'>
            J'ai travaillé avec ce cabinet pour la création de mon tableau de
            bord QHSE et je suis absolument ravie du résultat. L'équipe a été
            très professionnelle et a su m'accompagner tout au long du processus
            pour atteindre mes objectifs en matière de qualité, de santé, de
            sécurité et d'environnement. Je recommande fortement ce cabinet pour
            tous les besoins en matière de QHSE.
          </p>

          <div className='mt-3 d-flex align-items-center gap-4'>
            <img src={ava02} alt='' className='w-25 h-25 rounded-2' />

            <div>
              <h6 className='mb-0 mt-3'>BINDA Mireille</h6>
              <p className='section__description'>Admin Transit MSF</p>
            </div>
          </div>
        </div>

        <div className='testimonial py-4 px-4'>
          <p className='section__description text-justify'>
            La formation chez ce cabinet a été une véritable révélation pour
            moi. Je suis sorti avec une compréhension approfondie de la création
            de tableaux de bord de pilotage, et ai pu immédiatement les mettre
            en pratique dans mon travail. Les formateurs étaient passionnés et
            très compétents, leur enseignement a été clair et concis. Je
            recommande fortement ce cabinet pour tout ce qui concerne la
            formation en QHSE et Tableau de bord
          </p>

          <div className='mt-3 d-flex align-items-center gap-4'>
            <img src={ava06} alt='' className='w-25 h-25 rounded-2' />

            <div>
              <h6 className='mb-0 mt-3'>MANI Armel</h6>
              <p className='section__description'>Ingenieur QHSE</p>
            </div>
          </div>
        </div>

        <div className='testimonial py-4 px-4'>
          <p className='section__description text-justify'>
            Travailler avec QHSE ACADEMIE AND CONSULTING a été un véritable
            plaisir. Leur professionnalisme et leur rapidité d'exécution ont
            dépassé toutes mes attentes. Je suis impressionné par leur capacité
            à livrer des résultats de qualité en un temps record. Je recommande
            vivement leur services
          </p>

          <div className='mt-3 d-flex align-items-center gap-4'>
            <img src={ava03} alt='' className='w-25 h-25 rounded-2' />

            <div>
              <h6 className='mb-0 mt-3'>Jacques Dubois</h6>
              <p className='section__description'>Responsable QHSE COTLIN</p>
            </div>
          </div>
        </div>

        <div className='testimonial py-4 px-4'>
          <p className='section__description'>
            Je suis extrêmement satisfait de la formation que j'ai suivie chez
            ce cabinet de formation QHSE. Les enseignements étaient clairs,
            pertinents et adaptés à mes besoins. Grâce à cette formation, je
            suis désormais capable de créer des tableaux de bord de pilotage
            avec assurance et professionnalisme
          </p>

          <div className='mt-3 d-flex align-items-center gap-4'>
            <img src={ava05} alt='' className='w-25 h-25 rounded-2' />

            <div>
              <h6 className='mb-0 mt-3'>KAMDEM MOTEMA</h6>
              <p className='section__description'>Superviseur HSEQ BIOLAIT</p>
            </div>
          </div>
        </div>
        <div className='testimonial py-4 px-4'>
          <p className='section__description text-justify'>
            L'accompagnement de notre entreprise par QHSE ACADEMIE a été un
            véritable succès. Leur professionnalisme et leur expertise ont
            permis de mettre en place des pratiques saines et sûres en matière
            de qualité, santé, sécurité et environnement. Nous sommes
            extrêmement satisfaits des résultats obtenus grâce à leur aide
          </p>

          <div className='mt-3 d-flex align-items-center gap-4'>
            <img src={ava01} alt='' className='w-25 h-25 rounded-2' />

            <div>
              <h6 className='mb-0 mt-3'>JORDAN TUSOLA</h6>
              <p className='section__description'>Superviseur HSEQ CREOLIN</p>
            </div>
          </div>
        </div>
        <div className='testimonial py-4 px-4'>
          <p className='section__description text-justify'>
            J'ai été impressionné par le professionnalisme et l'expertise de
            l'équipe du cabinet. Grâce à leur accompagnement, mon entreprise à
            pu améliorer considérablement ses performances et nous avons pu
            atteindre nos objectifs. Je recommande vivement leur service
          </p>

          <div className='mt-3 d-flex align-items-center gap-4'>
            <img src={ava07} alt='' className='w-25 h-25 rounded-2' />

            <div>
              <h6 className='mb-0 mt-3'>VANESSA BAGOUP</h6>
              <p className='section__description'>Response RH LOGTRANS</p>
            </div>
          </div>
        </div>
      </Slider>
    </Slide>
  );
};

export default Testimonial;
