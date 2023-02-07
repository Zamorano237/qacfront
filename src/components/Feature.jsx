/** @format */

// import { async } from "@firebase/util";
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import FeatureCard from './FeatureCard';
import Skeleton from '@mui/material/Skeleton';
import Slider from 'react-slick';

const Feature = () => {
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 1000,
    swipeToSlide: true,
    autoplaySpeed: 10000,
    slidesToShow: 5,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1.2,
          slidesToScroll: 1,
        },
      },
    ],
  };
  const productItem = useSelector((state) => state.productItem.productItem);
  const productLoading = useSelector(
    (state) => state.productItem.productLoading
  );

  const data = useMemo(
    () => productItem.filter((el) => el.category.toLowerCase() === 'excel', []),
    [productItem]
  );

  return (
    <div className='p-2  md:p-4 my-4 xl:px-12'>
      <div className='flex items-center justify-between'>
        <h2 className=' capitalize text-lg md:text-2xl  font-semibold before:rounded-lg relative before:absolute before:-bottom-2 before:content before:left-0 before:w-32 before:h-1 before:bg-red-500 transition-all ease-in-out duration-100'>
          Découvrez nos produits les plus populaires
        </h2>
      </div>
      <Slider {...settings}>
        {productLoading
          ? new Array(7).fill(null).map((el, index) => {
              return (
                <div
                  key={index}
                  className='min-h-[460px] min-w-[250px] m-2 my-6  flex justify-center flex-col items-center'>
                  <Skeleton variant='rectangular' width='90%' height={204} />
                  <Skeleton width='90%' height={40} />
                  <Skeleton width='90%' height={60} />
                  <Skeleton width='85%' height={50} />
                  <Skeleton width='90%' height={40} />
                </div>
              );
            })
          : data.map((el) => {
              return (
                <FeatureCard
                  key={el.id}
                  id={el.id}
                  img={el.imageURL}
                  title={el.title}
                  price={el.price}
                  rating={Number(el.rating)}
                  download={el.download}
                />
              );
            })}
      </Slider>
    </div>
  );
};

export default Feature;
