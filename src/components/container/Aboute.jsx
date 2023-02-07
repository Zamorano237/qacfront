/** @format */
import { Slide } from 'react-awesome-reveal';
import React from 'react';
import about from '../../assets/About.jpg';

const Aboute = () => {
  return (
    <div className='section' id='about px-12 '>
      <div className='grid md:grid-cols-2 gap-8 place-items-center w-[92%] lg:w-[85%] m-auto pt-[85px] pb-[75px]'>
        <Slide direction='left'>
          <div className='border-[3px] border-solid border-Teal rounded-lg'>
            <img src={about} alt='' className='p-4' />
          </div>
        </Slide>
        <div>
          <Slide direction='right'>
            <div className='font-bold lg:text-[1.5rem] text-[0.9rem] mb-2'>
              Votre Partenaire de choix pour les formations
            </div>
            <p className='text-sm text-gray leading-7 mb-4'>
              QHSE ACADEMIE AND CONSULTING est votre partenaire idéal pour
              améliorer vos capacités et vos compétences. Nous offrons une gamme
              complète de formations en ligne et en présentiel, accessibles à
              tous ceux qui cherchent à améliorer leur performance. Que vous
              soyez une entreprise, un étudiant, un professionnel, un
              gestionnaire ou toute autre personne ou organisation soucieuse
              d'améliorer ses compétences en QHSE et en management, nous avons
              une solution qui vous conviendra. Avec notre plateforme en ligne
              innovante, vous pouvez apprendre à votre rythme, où et quand vous
              le voulez. Et avec nos formations en présentiel, vous aurez
              l'occasion de rencontrer d'autres professionnels et de partager
              votre expérience. Rejoignez notre communauté de professionnels
              déterminés à améliorer leur performance grâce à nos formations de
              qualité supérieure
            </p>
          </Slide>
        </div>
      </div>
    </div>
  );
};

export default Aboute;
