/** @format */

// import { async } from "@firebase/util";
import React, { useMemo } from 'react';
import { useSelector } from 'react-redux';
import FeatureCard from './FeatureCard';
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { useRef } from 'react';
import Skeleton from '@mui/material/Skeleton';

const Feature = () => {
  const productItem = useSelector((state) => state.productItem.productItem);
  const productLoading = useSelector(
    (state) => state.productItem.productLoading
  );

  const data = useMemo(
    () => productItem.filter((el) => el.category.toLowerCase() === 'excel', []),
    [productItem]
  );

  const fetureRef = useRef();

  const nextPart = () => {
    fetureRef.current.scrollLeft += 250;
  };
  const prevePart = () => {
    fetureRef.current.scrollLeft -= 250;
  };

  return (
    <div className='p-2  md:p-4 my-4 xl:px-12'>
      <div className='flex items-center justify-between'>
        <h2 className=' capitalize text-lg md:text-2xl  font-semibold before:rounded-lg relative before:absolute before:-bottom-2 before:content before:left-0 before:w-32 before:h-1 before:bg-red-500 transition-all ease-in-out duration-100'>
          Découvrez nos produits les plus populaires
        </h2>
        <div className='relative flex-row m-3 lg:m-5 md:flex justify-between top-0 bottom-0 text-2xl items-center'>
          <button
            className='p-1 bg-slate-300 hover:bg-slate-400 , px-0 opacity-60 text-2xl rounded xl:mr-3'
            onClick={prevePart}>
            <GrFormPrevious />
          </button>
          <button
            className='p-1 bg-slate-300 hover:bg-slate-400  px-0 opacity-60 text-2xl rounded transition-all'
            onClick={nextPart}>
            <GrFormNext />
          </button>
        </div>
      </div>
      <div
        className='w-full overflow-hidden overflow-x-auto scrollbar-none relative'
        ref={fetureRef}>
        <div className='flex mx-4'>
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
        </div>
      </div>
    </div>
  );
};

export default Feature;
