import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import HomeList from '../components/homeList';
import { getData } from '../redux/home/home';

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
    <>
      <select onChange={handleChange}>
        <option value="current_price">Price</option>
        <option value="market_cap">Market Price</option>
        <option value="high_24h">High Price</option>
      </select>
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
    </>
  );
};

export default Home;
