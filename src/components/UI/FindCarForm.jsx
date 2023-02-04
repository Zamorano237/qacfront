/** @format */
import React from 'react';
import '../../styles/find-car-form.css';
import { useSelector } from 'react-redux';
import Slider from 'react-slick';
import ProductCat from './ProductCat';
import Skeleton from '@mui/material/Skeleton';

const FindCarForm = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 5000,
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
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const productItems = useSelector((state) => state.productItem.productItem);
  const productLoading = useSelector(
    (state) => state.productItem.productLoading
  );

  return (
    <Slider {...settings}>
      {productLoading
        ? new Array(3).fill(null).map((el, index) => {
            return (
              <div key={index} className='min-h-[130px]'>
                <Skeleton variant='rectangular' width='90%' height={130} />
                <Skeleton width='90%' height={30} />
                <Skeleton width='80%' height={30} />
              </div>
            );
          })
        : productItems
            .slice(12, 27)
            .map((item) => <ProductCat item={item} key={item.id} />)}
    </Slider>
  );
};

export default FindCarForm;
