/** @format */

import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import '../../styles/about-section.css';
import aboutImg from '../../assets/profile1.png';
import { Fade } from 'react-awesome-reveal';
import { Zoom } from 'react-awesome-reveal';
const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className='about__section flex-row justify-center items-start'
      style={
        aboutClass === 'aboutPage'
          ? { marginTop: '0px' }
          : { marginTop: '280px' }
      }>
      <Container style={{ margin: 'auto', width: '90%' }}>
        <Zoom direction='top'>
          <h2 className='w-full pb-0 m-0 mt-3 text-center demotext section__subtitle font-extrabold text-3xl  md:text-4xl  lg:text-5xl uppercase xl:pb-4 xl:mb-4'>
            A Propos de nous
          </h2>{' '}
          <br />
        </Zoom>
        <Row>
          <Col lg='6' md='6'>
            <Fade direction='left'>
              <div className='about__section-content xl:mt-5'>
                <span className='section__description text-xs font-normal leading-normal lg:text-lg  lg:leading-5 xl:leading-9 sm:leading-1'>
                  Nous sommes un cabinet de formation et d'accompagnement expert
                  en QHSE (qualité, santé, sécurité et environnement). Nous
                  aidons les entreprises et les professionnels à améliorer leurs
                  compétences QHSE et managériales en leur proposant des
                  services d'accompagnement et de formation personnalisés. Nous
                  concevons également des tableaux de bord de performance pour
                  suivre la progression des entreprises et identifier les points
                  à améliorer. De plus, nous digitalisons les systèmes QHSE pour
                  les rendre plus efficaces et plus accessibles. Notre équipe
                  est composée d'experts en QHSE, formateurs passionnés et
                  ingénieurs en digitalisation. Nous sommes déterminés à aider
                  les entreprises à atteindre leurs objectifs QHSE à travers une
                  formation de qualité et un accompagnement sur mesure.{' '}
                  <span style={{ color: 'red', fontWeight: '500' }}>
                    Nous sommes dévoués à fournir des services de haute qualité
                    pour garantir la satisfaction de nos clients.
                  </span>
                </span>
                <div className='about__section-item d-flex align-items-center'>
                  <p className='section__description d-flex align-items-center gap-2'>
                    <i className='ri-checkbox-circle-line'></i> Formation et
                    certification QHSE
                  </p>

                  <p className='section__description d-flex align-items-center gap-2'>
                    <i className='ri-checkbox-circle-line'></i> Accompagnement
                    et externalisation QHSE
                  </p>
                </div>
                <div className='about__section-item d-flex align-items-center'>
                  <p className='section__description d-flex align-items-center gap-2'>
                    <i className='ri-checkbox-circle-line'></i> Conception des
                    Tableaux de Bord
                  </p>

                  <p className='section__description d-flex align-items-center gap-2'>
                    <i className='ri-checkbox-circle-line'></i> Création de
                    sites et applications Web
                  </p>
                </div>
              </div>
            </Fade>
          </Col>
          <Col lg='6' md='6'>
            <Fade direction='right'>
              <div className='about__img '>
                <img src={aboutImg} alt='' className='w-100' />
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
