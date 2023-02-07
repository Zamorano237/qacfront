/** @format */

import React from 'react';
import '../../styles/blog-item.css';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import { Slide } from 'react-awesome-reveal';
import Skeleton from '@mui/material/Skeleton';

const BlogList = () => {
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
  const blogData = postItem.slice(0.4);
  const postLoading = useSelector((state) => state.postItem.postLoading);

  return (
    <>
      <Slide direction='left'>
        <Slider {...settings}>
          {postLoading
            ? new Array(3).fill(null).map((el, index) => {
                return (
                  <div key={index} className='min-h-[480px] justify-between'>
                    <Skeleton variant='rectangular' width='90%' height={254} />
                    <Skeleton width='90%' height={40} />
                    <Skeleton width='90%' height={60} />
                    <Skeleton width='60%' />
                  </div>
                );
              })
            : blogData.map((item) => <BlogItem item={item} key={item.id} />)}
        </Slider>
      </Slide>
    </>
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
        <Link
          to={`/blogs/${id}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='blog__title'>
          {title}
        </Link>
        <p className='section__description mt-3'>
          {description.length > 100 ? description.substr(0, 100) : description}
          ...
        </p>

        <Link
          to={`/blogs/${id}`}
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className='read__more'>
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

export default BlogList;
