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
        <img className="banner-img" src="https://images.unsplash.com/photo-1639152201517-7eaa34c6a28c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80" alt="block chain" />
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
