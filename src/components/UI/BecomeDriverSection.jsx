/** @format */

import React from 'react';
import '../../styles/become-driver.css';
import { Container, Row, Col } from 'reactstrap';
import { Slide } from 'react-awesome-reveal';
import driverImg from '../../assets/all-images/personnage.png';

const BecomeDriverSection = () => {
  return (
    <section className='become__driver mt-5'>
      <Container>
        <Row>
          <Col lg='6' md='6' sm='12' className='become__driver-img'>
            <Slide direction='left'>
              <img src={driverImg} alt='' className='w-100 h-90' />
            </Slide>
          </Col>
          <Col
            lg='6'
            md='6'
            sm='12'
            className='align-center flex flex-col justify-center items-start'>
            <Slide direction='right'>
              <h2 className='section__title become__driver-title'>
                Voulez-vous vous Former ou avez-vous besoin d'être Accompagné?
              </h2>

              <button className='rounded become__driver-btn mt-4  p-2  hover:bg-cyan-200 hover:scale-110'>
                <a
                  href='http://wa.me/+237694289819'
                  target='_blank'
                  rel='noopener noreferrer'>
                  Contactez-Nous
                </a>
              </button>
            </Slide>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default BecomeDriverSection;
