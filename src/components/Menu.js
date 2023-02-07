/** @format */

import React from 'react';
import { useEffect } from 'react';
import { useMemo } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import CardFilter from './cardFilter';
import RenderFilter from './renderFilter';
import { FaFilter } from 'react-icons/fa';
import Slider from 'react-slick';
import Skeleton from '@mui/material/Skeleton';

const Menu = ({
  heading = 'Catégories de Produits',
  filterbyProps = 'excel',
}) => {
  const productItem = useSelector((state) => state.productItem.productItem);
  const productLoading = useSelector(
    (state) => state.productItem.productLoading
  );

  const allCategory = [...new Set(productItem.map((el) => el.category))];
  const [filterBy, setFilterBy] = useState(filterbyProps);

  const data = useMemo(() => productItem, [productItem]);

  const [filterData, setFilderData] = useState(data);

  useEffect(() => {
    setFilderData(
      productItem.filter(
        (el) => el.category.toLowerCase() === filterBy.toLowerCase()
      )
    );
  }, [filterBy, filterbyProps, productItem, productLoading]);

  const filterByProduct = (by) => {
    setFilterBy(by.toLowerCase());
  };
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

  return (
    <div className='p-2 md:p-4 ' id='menu'>
      <div className='flex items-center justify-between mb-3'>
        <h2 className=' capitalize text-lg md:text-2xl  font-semibold before:rounded-lg relative before:absolute before:-bottom-2 before:content before:left-0 before:w-32 before:h-1 before:bg-red-500 transition-all ease-in-out duration-100'>
          {heading}
        </h2>
      </div>
      <div className='flex flex-wrap justify-center my-6 '>
        {allCategory.map((el) => (
          <div className='hidden md:block' key={el + 'category'}>
            <CardFilter
              name={el}
              active={filterBy.toLowerCase() === el.toLowerCase()}
              onClick={() => filterByProduct(el)}
            />
          </div>
        ))}
        <div className='flex md:hidden w-full max-w-xs text-lg  items-center border-2 border-solid rounded px-3 py-1'>
          <FaFilter className='text-2xl mr-3 text-slate-600' />
          <select
            onChange={(e) => filterByProduct(e.target.value)}
            className='w-full   border-none outline-none'>
            {allCategory.map((el) => (
              <option value={el} className='capitalize' key={el + 'optionMenu'}>
                {el}
              </option>
            ))}
          </select>
        </div>
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
          : filterData.map((el) => (
              <div>
                <RenderFilter
                  key={el.id + 'menu'}
                  id={el.id}
                  name={el.title}
                  img={el.imageURL}
                  title={el.title}
                  price={el.price}
                  rating={el.rating}
                  download={el.download}
                />
              </div>
            ))}
      </Slider>
    </div>
  );
};

export default Menu;
