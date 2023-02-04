/** @format */

import React from 'react';
import { Col } from 'reactstrap';
import '../../styles/services-list.css';
import servicesData from '../../assets/data/serviceData';
import { Slide } from 'react-awesome-reveal';

const ServicesList = () => {
  return (
    <>
      {servicesData.map((item) => (
        <ServiceItem item={item} key={item.id} />
      ))}
    </>
  );
};

const ServiceItem = ({ item }) => (
  <Col lg='4' md='4' sm='6' className='mb-3'>
    <Slide direction='left'>
      <div className='service__item my-2 mx-2 min-h-[600px]'>
        <img
          src={item.url}
          alt=''
          className='w-100 mb-3'
          style={{ height: '250px', borderRadius: '25px', background: 'white' }}
        />
        <h6>
          {item.icon} {item.title}
        </h6>
        <p className='section__description'>{item.desc}</p>
      </div>
    </Slide>
  </Col>
);

export default ServicesList;
