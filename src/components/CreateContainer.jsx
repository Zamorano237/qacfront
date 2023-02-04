/** @format */

import React, { useState } from 'react';
import { MdDriveFileRenameOutline } from 'react-icons/md';
import { categories } from '../utils/data';
import {
  MdCloudUpload,
  MdDownload,
  MdVideoCall,
  MdAccountBalanceWallet,
  MdOutlineEuroSymbol,
  MdSource,
  MdDelete,
} from 'react-icons/md';

import Loading from '../utils/Loading';
import { motion } from 'framer-motion';
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytesResumable,
} from 'firebase/storage';
import { storage } from '../firebase.config';
import { saveProductItem } from '../utils/firebaseFunctions';
import RecentUpload from './RecentUpload';

const CreateContainer = () => {
  const [product, setProduct] = useState({
    productTitle: '',
    productVideo: '',
    productDescription: '',
    productRating: '',
    productDownload: '',
    productPrice: '',
    productCategory: '',
    productImageAsset: '',
  });

  const [isLoadingImage, setIsLoadingImage] = useState(false);
  const [msg, setMsg] = useState('WATBO Yvan');
  const [danger, setDanger] = useState('success');
  const [isMsg, setIsMsg] = useState(false);

  const handleOnChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    setProduct((preve) => {
      return {
        ...preve,
        [name]: value,
      };
    });
  };

  const uploadImage = (e) => {
    setIsLoadingImage(true);
    const file = e.target.files[0];
    console.log(file);

    const storegeRef = ref(storage, `Images/${Date.now()}-${file.name}`);
    const uploadImage = uploadBytesResumable(storegeRef, file);

    uploadImage.on(
      'state_changed',
      (snapshot) => {},
      (error) => {
        console.log(error);
        setMsg('Error While uploading : Try Again 🙇!!!');
        setDanger('danger');
        setIsMsg(true);

        setTimeout(() => {
          setIsMsg(false);
          setIsLoadingImage(false);
        }, 5000);
      },
      () => {
        getDownloadURL(uploadImage.snapshot.ref).then((downloadURL) => {
          setProduct((preve) => {
            return {
              ...preve,
              productImageAsset: downloadURL,
            };
          });
          setIsLoadingImage(false);
          setIsMsg(true);
          setMsg('Image uploaded successfully 😊');
          setDanger('success');

          setTimeout(() => {
            setIsMsg(false);
            setIsLoadingImage(false);
          }, 5000);
        });
      }
    );
  };

  const handleDelete = () => {
    setIsLoadingImage(true);
    const deleteRef = ref(storage, product.productImageAsset);
    deleteObject(deleteRef).then(() => {
      setProduct((preve) => {
        return {
          ...preve,
          productImageAsset: '',
        };
      });
      setIsLoadingImage(false);
      setIsMsg(true);
      setMsg('Image delete successfully 😊');
      setDanger('success');

      setTimeout(() => {
        setIsMsg(false);
        setIsLoadingImage(false);
      }, 5000);
    });
  };

  const saveProductDetails = () => {
    setIsLoadingImage(true);
    try {
      if (
        !product.productTitle ||
        !product.productVideo ||
        !product.productDescription ||
        !product.productRating ||
        !product.productDownload ||
        !product.productPrice ||
        !product.productImageAsset ||
        !categories
      ) {
        setIsMsg(true);
        setMsg("Required fields can't be empty 🙇!!");
        setDanger('danger');

        //not display alert after 5sec
        setTimeout(() => {
          setIsMsg(false);
          setIsLoadingImage(false);
        }, 5000);
      } else {
        const productData = {
          id: `${Date.now()}`,
          title: product.productTitle,
          imageURL: product.productImageAsset,
          category: product.productCategory,
          video: product.productVideo,
          description: product.productDescription,
          rating: product.productRating,
          download: product.productDownload,
          qty: 1,
          price: product.productPrice,
        };
        saveProductItem(productData);
        setIsLoadingImage(false);
        setIsMsg(true);
        setMsg('Data Up successfully 😊!!');
        setDanger('success');
        clearData();
        setTimeout(() => {
          setIsMsg(false);
        }, 5000);
      }
    } catch (error) {
      console.log(error);
      setIsMsg(true);
      setMsg('Error While uploading !! Try Again 🙇');
      setDanger('danger');
      clearData();

      setTimeout(() => {
        setIsMsg(false);
        setIsLoadingImage(false);
      }, 4000);
    }
  };

  function clearData() {
    setProduct((preve) => {
      return {
        ...preve,
        productTitle: '',
        productVideo: '',
        productDescription: '',
        productRating: '',
        productDownload: '',
        productPrice: '',
        productCategory: 'Select categorie',
        productImageAsset: '',
      };
    });
  }

  console.log(product);

  return (
    <div className='py-5 md:py-10 mt-12'>
      <div className='w-11/12 max-w-2xl m-auto  bg-slate-100 p-4 rounded shadow-md relative py-10 box-border'>
        <div className='absolute top-0 left-0 right-0'>
          {isMsg && (
            <>
              <motion.p
                initial={{ opacity: 0, scale: 0.6 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.6 }}
                className={`text-white text-center p-1 rounded ${
                  danger === 'success' ? 'bg-green-500' : 'bg-red-500'
                }`}>
                {msg}
              </motion.p>
            </>
          )}
        </div>
        <div className='border-black border-b-2 border-solid flex items-center box-border'>
          <MdDriveFileRenameOutline className='text-2xl' />
          <input
            type='text'
            placeholder='Enter Le nom du produit'
            name='productTitle'
            value={product.productTitle}
            onChange={handleOnChange}
            className='px-3 py-1 w-full bg-transparent text-slate-600 border-none outline-none text-base box-border'
          />
        </div>
        <div className='box-border'>
          <select
            className='w-full my-3 py-2 px-3 text-base bg-slate-100 border-2 border-solid rounded box-border'
            name='productCategory'
            onChange={handleOnChange}
            value={product.productCategory}>
            <option value='Other'>Select categories</option>
            {categories &&
              categories.map((el) => (
                <option value={el.urlParamName} key={el.id}>
                  {el.name}
                </option>
              ))}
          </select>
        </div>

        <div className='group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-225 md:h-340 cursor-pointer rounded-lg'>
          {isLoadingImage ? (
            <Loading />
          ) : (
            <>
              {!product.productImageAsset ? (
                <>
                  <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                    <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
                      <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-700' />
                      <p className='text-gray-500 hover:text-gray-700'>
                        Click here to upload
                      </p>
                    </div>
                    <input
                      type='file'
                      name='productImageAsset'
                      accept='image/*'
                      onChange={uploadImage}
                      className='w-0 h-0'
                    />
                  </label>
                </>
              ) : (
                <>
                  <div className='relative h-full'>
                    <img
                      src={product.productImageAsset}
                      alt='uploaded'
                      className='w-full h-full object-cover'
                    />
                    <button
                      type='button'
                      className='absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl cursor-pointer outline-none hover:shadow-md  duration-500 transition-all ease-in-out'
                      onClick={handleDelete}>
                      <MdDelete className='text-white' />
                    </button>
                  </div>
                </>
              )}
            </>
          )}
        </div>

        <div className='md:flex md:gap-8'>
          <div className='border-black border-b-2 border-solid flex items-center my-3 flex-1'>
            <MdAccountBalanceWallet className='text-2xl' />
            <input
              type='number'
              placeholder='Enter la moyenne du produit'
              name='productRating'
              value={product.productRating}
              onChange={handleOnChange}
              className='px-3 py-1 w-full bg-transparent text-slate-600 border-none outline-none text-base box-border'
            />
          </div>
          <div className='border-black border-b-2 border-solid flex items-center my-3 flex-1'>
            <MdOutlineEuroSymbol className='text-2xl' />
            <input
              type='number'
              placeholder='Enter le prix du produit'
              name='productPrice'
              value={product.productPrice}
              onChange={handleOnChange}
              className='px-3 py-1 w-full bg-transparent text-slate-600 border-none outline-none text-base box-border'
            />
          </div>
        </div>
        <div className='md:flex md:gap-8'>
          <div className='border-black border-b-2 border-solid flex items-center my-3 flex-1'>
            <MdVideoCall className='text-2xl' />
            <input
              type='text'
              placeholder='Enter le lien de la video descriptive'
              name='productVideo'
              value={product.productVideo}
              onChange={handleOnChange}
              className='px-3 py-1 w-full bg-transparent text-slate-600 border-none outline-none text-base box-border'
            />
          </div>
          <div className='border-black border-b-2 border-solid flex items-center my-3 flex-1'>
            <MdDownload className='text-2xl' />
            <input
              type='number'
              placeholder='Enter le nombre de telechargement '
              name='productDownload'
              value={product.productDownload}
              onChange={handleOnChange}
              className='px-3 py-1 w-full bg-transparent text-slate-600 border-none outline-none text-base box-border'
            />
          </div>
        </div>

        <div className='border-black border-b-2 border-solid flex items-center my-3 flex-1'>
          <MdSource className='text-2xl' />
          <textarea
            type='text'
            placeholder='Enter la description du produit'
            name='productDescription'
            value={product.productDescription}
            onChange={handleOnChange}
            className='px-3 py-1 w-full bg-transparent text-slate-600 border-none outline-none text-base resize-none box-border'></textarea>
        </div>

        <button
          type='button'
          onClick={saveProductDetails}
          className='w-full bg-slate-300 hover:bg-slate-200 text-base p-2 rounded box-border'>
          Save
        </button>
      </div>

      <div className='my-7 p-2 md:p-4'>
        <h1 className='capitalize text-lg md:text-2xl  font-semibold before:rounded-lg relative before:absolute before:-bottom-2 before:content before:left-0 before:w-32 before:h-1 before:bg-red-500 transition-all ease-in-out duration-100'>
          Recent Upload
        </h1>
        <div className='flex '>
          <RecentUpload />
        </div>
      </div>
    </div>
  );
};

export default CreateContainer;
