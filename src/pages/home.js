import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import HomeList from '../components/homeList';
import { getData } from '../redux/home/home';
import './home.css';

const Home = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState('current_price');
  const data = useSelector((state) => state.cryptoData);

  useEffect(() => {
    dispatch(getData(value));
  }, []);

  const handleChange = (e) => {
    setValue(e.target.value);
    dispatch(getData(value));
  };
  return (
    <div className="home-container">
      <div className="header">
        <img className="banner-img" src="https://elcomercio.pe/resizer/tNc4BvB-sHc9itLzR2BYgt9MPWA=/1200x900/smart/filters:format(jpeg):quality(75)/cloudfront-us-east-1.images.arcpublishing.com/elcomercio/ZNFZTEQ2M5BFFEXAPKXRIVOGEA.jpg" alt="block chain" />
        <h1>Block Chain Main Coins</h1>
      </div>
      <select className="filter-selection" onChange={handleChange}>
        <option value="current_price">Price</option>
        <option value="market_cap">Market Price</option>
        <option value="high_24h">High Price</option>
      </select>
      <ul className="ul-home-list">
        {data.map((crypto) => (
          <HomeList
            text={value.split('_').join(' ')}
            key={crypto.id}
            name={crypto.name}
            img={crypto.image}
            id={crypto.id}
            value={crypto[value]}
          />
        ))}
      </ul>
    </div>
  );
};

export default Home;
