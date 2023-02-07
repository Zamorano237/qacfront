/** @format */

import React from 'react';
import { Container, Row } from 'reactstrap';
import Helmet from '../components/Helmet/Helmet';
import { Col } from 'reactstrap';
import '../styles/blog-item.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { Slide } from 'react-awesome-reveal';
import { Zoom } from 'react-awesome-reveal';
import Skeleton from '@mui/material/Skeleton';

const Blog = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 4000,
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

  const postItem = useSelector((state) => state.postItem.postItem);
  const blogData1 = postItem.filter((post) => post.category === 'SST');
  const blogData2 = postItem.filter(
    (post) => post.category === 'environnement'
  );
  const blogData3 = postItem.filter((post) => post.category === 'RSE et DD');
  const postLoading = useSelector((state) => state.postItem.postLoading);

  return (
    <Helmet title='Blogs'>
      <section className='min-h-[81vh]'>
        <Container>
          <Row>
            <Col lg='12' className='mb-5 text-center mt-5'>
              <Zoom direction='top'>
                <span className=' demotext2 section__subtitle mt-5'>
                  Explorez Notre Blog{' '}
                </span>{' '}
                <br />
              </Zoom>
            </Col>
            <h2 className=' capitalize text-lg md:text-2xl  font-semibold before:rounded-lg relative before:absolute before:-bottom-2 before:content before:left-3 before:w-32 before:h-1 before:bg-red-500 transition-all ease-in-out duration-100'>
              Santé et Sécurité au travail
            </h2>
            <div className='relative flex-row m-3 lg:m-6 md:flex justify-between top-0 bottom-0 text-2xl items-center'></div>
            <Slide direction='left'>
              <Slider {...settings}>
                {postLoading
                  ? new Array(3).fill(null).map((el, index) => {
                      return (
                        <div
                          key={index}
                          className='min-h-[480px] justify-between'>
                          <Skeleton
                            variant='rectangular'
                            width='90%'
                            height={254}
                          />
                          <Skeleton width='90%' height={40} />
                          <Skeleton width='90%' height={60} />
                          <Skeleton width='60%' />
                        </div>
                      );
                    })
                  : blogData1.map((item) => (
                      <BlogItem item={item} key={item.id} />
                    ))}
              </Slider>
            </Slide>
            <div className='relative flex-row m-3 lg:m-6 md:flex justify-between top-0 bottom-0 text-2xl items-center'></div>
            <h2 className=' capitalize text-lg md:text-2xl  font-semibold before:rounded-lg relative before:absolute before:-bottom-2 before:content before:left-3 before:w-32 before:h-1 before:bg-red-500 transition-all ease-in-out duration-100 mb-8'>
              Environnement
            </h2>
            <Slide direction='left'>
              <Slider {...settings}>
                {postLoading
                  ? new Array(3).fill(null).map((el, index) => {
                      return (
                        <div
                          key={index}
                          className='min-h-[480px] justify-between'>
                          <Skeleton
                            variant='rectangular'
                            width='90%'
                            height={254}
                          />
                          <Skeleton width='90%' height={40} />
                          <Skeleton width='90%' height={60} />
                          <Skeleton width='60%' />
                        </div>
                      );
                    })
                  : blogData2.map((item) => (
                      <BlogItem item={item} key={item.id} />
                    ))}
              </Slider>
            </Slide>
            <div className='relative flex-row m-3 lg:m-6 left-25 md:flex justify-between top-0 bottom-0 text-2xl items-center'></div>
            <h2 className=' mb-8 capitalize text-lg md:text-2xl  font-semibold before:rounded-lg relative before:absolute before:-bottom-2 before:content before:left-3 before:w-20 before:h-1 before:bg-red-500 transition-all ease-in-out duration-100'>
              RSE et DD
            </h2>
            <Slide direction='left'>
              <Slider {...settings}>
                {postLoading
                  ? new Array(3).fill(null).map((el, index) => {
                      return (
                        <div
                          key={index}
                          className='min-h-[480px] justify-between'>
                          <Skeleton
                            variant='rectangular'
                            width='90%'
                            height={254}
                          />
                          <Skeleton width='90%' height={40} />
                          <Skeleton width='90%' height={60} />
                          <Skeleton width='60%' />
                        </div>
                      );
                    })
                  : blogData3.map((item) => (
                      <BlogItem item={item} key={item.id} />
                    ))}
              </Slider>
            </Slide>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

const BlogItem = ({ item }) => {
  const { imageURL, title, author, date, description, time, id } = item;

  return (
    <div className='blog__item mx-2 min-h-[480px] flex flex-col justify-between'>
      <img
        src={imageURL}
        alt=''
        className='w-100 p-2'
        style={{ height: '220px' }}
      />
      <div className='blog__info p-3'>
        <Link to={`/blogs/${id}`} className='blog__title'>
          {title}
        </Link>
        <p className='section__description mt-3'>
          {description.length > 100 ? description.substr(0, 100) : description}
          ...
        </p>

        <Link to={`/blogs/${id}`} className='read__more'>
          Read More
        </Link>

        <div className='blog__time pt-3 mt-3 d-flex align-items-center justify-content-between'>
          <span className='blog__author'>
            <i className='ri-user-line'></i> {author}
          </span>

          <div className=' d-flex align-items-center gap-3'>
            <span className=' d-flex align-items-center gap-1 section__description'>
              <i className='ri-calendar-line'></i> {date}
            </span>

            <span className=' d-flex align-items-center gap-1 section__description'>
              <i className='ri-time-line'></i> {time}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Blog;
