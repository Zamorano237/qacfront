/** @format */

import React from 'react';
import { Zoom } from 'react-awesome-reveal';
import emailjs from '@emailjs/browser';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';

const Contact = () => {
  const sendEmail = (e) => {
    e.preventDefault();
    alert('send mail');
    emailjs.sendForm(
      'service_pr2pf6c',
      'template_9wpq537',
      e.target,
      'R_saCWt0_6uN7cVSx'
    );
  };

  return (
    <Zoom direction='top'>
      <div className=' w-full grid place-items-center h-auto  m-auto p-12'>
        <Zoom direction='top'>
          <h2 className='w-full text-blue-800  pb-0 m-0 mt-3 pb-5 text-center demotext section__subtitle font-extrabold text-3xl  md:text-4xl  lg:text-5xl uppercase xl:pb-4 xl:mb-4'>
            Contactez Nous
          </h2>{' '}
          <br />
        </Zoom>
        <div className='bg-white rounded-md shadow-md flex flex-row '>
          <div
            className='bg-blue-800 p-8 md:hover:scale-y-110 rounded-md transition md:block'
            id='contact_info'>
            <div className='flex justify-between'>
              <h2 className='text-white text-xl'>Nos Coordonnées</h2>
              <h2
                className='text-white text-xs flex flex-row md:hidden block cursor-pointer'
                id='swtich_to_contact_us'>
                Contactez Nous{' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 ml-1'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </h2>
            </div>
            <div className='mt-6 flex flex-row'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-slate-200 mr-2'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div>
                <h2 className='text-slate-200 text-xs'>Name :</h2>
                <p className='text-white text-xs'>QHSE ACADEMIE</p>
              </div>
            </div>

            <div className='mt-1 flex flex-row'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-slate-200 mr-2'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M14.243 5.757a6 6 0 10-.986 9.284 1 1 0 111.087 1.678A8 8 0 1118 10a3 3 0 01-4.8 2.401A4 4 0 1114 10a1 1 0 102 0c0-1.537-.586-3.07-1.757-4.243zM12 10a2 2 0 10-4 0 2 2 0 004 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div>
                <h2 className='text-slate-200 text-xs'>Email :</h2>
                <p className='text-white text-xs'>contact@qhseacademie.com</p>
              </div>
            </div>

            <div className='mt-1 flex flex-row'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-slate-200 mr-2'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z' />
                </svg>
              </div>
              <div>
                <h2 className='text-slate-200 text-xs'>Phone :</h2>
                <p className='text-white text-xs'>
                  (+237) 694289819/ (+33) 769766362
                </p>
              </div>
            </div>
            <div className='mt-0 flex flex-row'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8 text-slate-200 mr-2'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path d='M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z' />
                </svg>
              </div>
              <div>
                <h2 className='text-slate-200 text-xs'>Address :</h2>
                <p className='text-white mb-0 text-xs'>Cameroun-Douala</p>
                <p className='text-white mb-0  text-xs'>France-Paris</p>
              </div>
            </div>
          </div>

          <div className='px-6 py-2' id='contact_us'>
            <div className='flex justify-between'>
              <h2 className='text-blue-800 text-xl'>Ecrivez Nous</h2>
              <h2
                className='text-red-800 text-xs flex flex-row md:hidden block cursor-pointer'
                id='swtich_to_contact_info'>
                Nos Coordonnées{' '}
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-4 w-4 ml-1'
                  viewBox='0 0 20 20'
                  fill='currentColor'>
                  <path
                    fillRule='evenodd'
                    d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </h2>
            </div>
            <form className='contact_form' onSubmit={sendEmail}>
              <input
                type='text'
                required
                name='from_name'
                placeholder='Enter Your Name'
                className='w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm'
              />
              <br />
              <input
                type='email'
                required
                name='from_email'
                placeholder='Enter Your Email'
                className='w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm'
              />
              <br />
              <input
                type='text'
                required
                name='from_number'
                placeholder='Enter Your phone number'
                className='w-full text-xs px-3 h-8 my-2 outline-none rounded-md border focus:shadow-sm'
              />
              <br />
              <textarea
                name='message'
                required
                placeholder='Entrez votre message ici'
                className='w-full text-xs px-3 py-2 h-20 my-2 outline-none rounded-md border focus:shadow-sm resize-none'></textarea>
              <br />
              <Button
                type='submit'
                variant='contained'
                endIcon={<SendIcon />}
                className='submit__btn'
                style={{ marginTop: '5px' }}>
                Send
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Zoom>
  );
};

export default Contact;
