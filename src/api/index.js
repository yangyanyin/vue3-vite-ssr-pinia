import axios from './axios'


export const homeData = (params) => {
  return axios({
    url: '/api/home/data',
    method: 'get',
    params, 
  });
};