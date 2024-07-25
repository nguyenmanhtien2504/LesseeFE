import {  getCookie  } from 'cookies-next';

const getTokenFromCookie = () => {
  let token;

    token = getCookie('token');
    
  return token;
};

export { getTokenFromCookie };
