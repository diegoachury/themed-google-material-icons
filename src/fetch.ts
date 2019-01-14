import axios from 'axios';

const fetchDom = async () => {
  return axios.get('https://material.io/tools/icons/?style=round', { responseType: 'json' })
    .then(console.log)
    .catch(console.warn);
};

fetchDom();