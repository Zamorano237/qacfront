/** @format */
import { Typewriter, Cursor } from 'react-simple-typewriter';
import React from 'react';
import teacher1 from '../../assets/teacher1.png';
import teacher2 from '../../assets/teacher2.png';
import { accordions } from '../../Data';
import { Slide } from 'react-awesome-reveal';
import { Zoom } from 'react-awesome-reveal';
import Accordion from './Accordion';
const Teacher = () => {
  return (
    <div className='section' id='teacher'>
      <Zoom direction='top'>
        <h2 className='w-full pb-0 m-0 mt-3 pb-5 text-center demotext section__subtitle font-extrabold text-3xl  md:text-4xl  lg:text-5xl uppercase xl:pb-4 xl:mb-4'>
          Notre Equipe
        </h2>{' '}
        <br />
      </Zoom>
      <div className='grid sm:grid-cols-2 place-items-center gap-1 w-[92%] m-auto'>
        <div className='pl-5'>
          <Slide direction='right'>
            <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-0'>
              <span className='demotext3  h-[20px] font-extrabold text-xl  xl:text-3xl uppercase section__title'>
                Yvan WATBO :{' '}
                <span
                  style={{ color: 'blue', fontWeight: '600' }}
                  className='demotext4 shadow-transparent'>
                  <Typewriter
                    words={[
                      'ingénieur  QHSE.',
                      'Développeur Full Stack JS.',
                      'Consultant-Formateur',
                    ]}
                    loop={0}
                    typeSpeed={50}
                    deleteSpeed={100}
                    delaySpeed={3000}
                  />
                </span>{' '}
                <Cursor cursorStyle='' />
              </span>
            </div>
            <p className='text-sm leading-7 text-gray mb-5'>
              En tant qu'ingénieur en qualité, sécurité et environnement aguerri
              et expert certifié en management opérationnel, je suis fier de
              fournir une expertise exceptionnelle pour aider les entreprises à
              atteindre leurs objectifs en matière de satisfaction clients, de
              maîtrise des risques et d'engagement responsable. Je suis
              passionné par l'accompagnement des entreprises en mettant en œuvre
              une approche à la fois technique et culturelle pour garantir leur
              réussite. Mon grand savoir-faire en matière de conception de
              tableaux de bord de pilotage de la performance est une force
              supplémentaire qui me permet de fournir une aide précieuse aux
              entreprises dans leur lutte pour l'amélioration continue de leur
              performance. Avec mon parcours éprouvé en conseil et formation en
              matière de QSHE, je suis en mesure de fournir une perspective
              unique et de travailler de manière constructive avec les
              dirigeants et les opérateurs pour les aider à atteindre leurs
              objectifs. Mon approche personnalisée permet d'obtenir des
              résultats tangibles pour les entreprises et proffessionnels qui
              choisissent de faire appel à mon savoir faire.
            </p>
          </Slide>
        </div>
        <div className='p-1 md:w-3/4 sm:row-start-1'>
          <Slide direction='left'>
            <img src={teacher1} alt='' />
          </Slide>
        </div>
        <div className='pl-5'>
          <Slide direction='left'>
            <div className='font-bold sm:text-[1.875rem] text-[1.5rem] mb-0'>
              <span className='demotext3  h-[20px] font-extrabold text-xl  xl:text-3xl uppercase section__title'>
                Georges KOUAM:{' '}
                <span
                  style={{ color: 'blue', fontWeight: '700' }}
                  className='demotext4 shadow-transparent'>
                  <Typewriter
                    words={[
                      'ingénieur  QHSE.',
                      'Manageur RSE et DD.',
                      'Consultant-Formateur',
                    ]}
                    loop={0}
                    typeSpeed={50}
                    deleteSpeed={100}
                    delaySpeed={3000}
                  />
                </span>{' '}
                <Cursor cursorStyle='' />
              </span>
            </div>
            <p className='text-sm leading-7 text-gray mb-5'>
              En tant qu'Ingénieur en Qualité, Sécurité et Environnement et
              expert en Développement Durable grâce à mon Master II, je suis un
              véritable atout pour les entreprises souhaitant optimiser leur
              performance dans les domaines QHSE. Avec une solide formation
              technique et une connaissance approfondie des référentiels
              réglementaires et volontaires, je suis en mesure de proposer des
              solutions concrètes pour la mise en place de systèmes de
              management de la qualité efficaces, la gestion des risques et la
              mise en place d'une politique éco-responsable.je suis non
              seulement un expert en management RSE et développement durable,
              mais également un accompagnateur expérimenté pour les entreprises
              dans la mise en place de leur système de management qualité, la
              gestion des risques et leur politique éco-responsable. Mon
              expertise et mon approche adaptée aux besoins des entreprises font
              de moi un consultant de confiance pour les dirigeants et les
              opérateurs.
            </p>
          </Slide>
        </div>
        <div className='p-4 md:w-3/4'>
          <Slide direction='right'>
            <img src={teacher2} alt='' />
          </Slide>
        </div>
      </div>
      <div className='text-center my-8 font-bold sm:text-[1.875rem] text-[1.5rem]'>
        <Zoom direction='top'>
          <h2 className='w-full pb-0 m-0 mt-3 text-center demotext section__subtitle font-extrabold text-3xl  md:text-4xl  lg:text-5xl uppercase xl:pb-4 xl:mb-4'>
            Questions frequentes
          </h2>{' '}
          <br />
        </Zoom>
      </div>
      <div className='mt-12 max-w-[700px] mx-auto px-5 '>
        {accordions.map((accordion) => {
          return <Accordion key={accordion.id} {...accordion} />;
        })}
      </div>
    </div>
  );
};

export default Teacher;
