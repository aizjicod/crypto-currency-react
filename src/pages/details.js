import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { TiArrowBack } from 'react-icons/ti';
import DetailInformation from '../components/detailinformation';

const Details = () => {
  const data = useSelector((state) => state.idData);
  console.log(data);
  return (
    <>
      <header>
        <NavLink to="/"><TiArrowBack /></NavLink>
      </header>
      {data ? (
        <DetailInformation
          img={data.image.small}
          name={data.id}
          circulatingSupply={data.market_data.circulating_supply}
          totalSupply={data.market_data.total_supply}
          priceChange1yr={data.market_data.price_change_percentage_1y}
          lastTickers={data.tickers.length}
        />
      ) : <h1>no data</h1>}
    </>
  );
};

export default Details;
