import axios from 'axios';

const BASEURL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false';

const get = () => axios(BASEURL);
const getId = (id) => axios(`https://api.coingecko.com/api/v3/coins/${id}`);

const apiServices = {
  get,
  getId,
};

export default apiServices;
