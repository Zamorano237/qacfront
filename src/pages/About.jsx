/** @format */

import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Helmet from '../components/Helmet/Helmet';
import AboutSection from '../components/UI/AboutSection';
import BecomeDriverSection from '../components/UI/BecomeDriverSection';
import Contact from '../components/UI/Contact';
import { Home, Aboute, Teacher } from '../components/index2';
import '../styles/about.css';

const About = () => {
  return (
    <Helmet title='About'>
      <div className='mt-5 pt-5'></div>
      <Home />
      <Aboute />
      <AboutSection aboutClass='aboutPage' />
      <Teacher />
      <BecomeDriverSection />
      <Contact />
    </Helmet>
  );
};

export default About;
