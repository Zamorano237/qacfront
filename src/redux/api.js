/** @format */

export const url = 'https://qac-api-stripe.onrender.com/api';

export const setHeaders = () => {
  const headers = {
    headers: {
      'x-auth-token': localStorage.getItem('token'),
    },
  };

  return headers;
};
