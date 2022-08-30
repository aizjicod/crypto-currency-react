import PropTypes from 'prop-types';

const DetailInformation = ({
  img, name, totalSupply, circulatingSupply, priceChange1yr, lastTickers,
}) => (
  <>
    <img src={img} alt={name} />
    <h1>{name}</h1>
    <p>
      {`Total supply: ${totalSupply}`}
    </p>
    <p>
      {`circulating supply: ${circulatingSupply}`}
    </p>
    <p>
      {`change of coin in a year: ${priceChange1yr}%`}
    </p>
    <p>
      {`last tickets: ${lastTickers}`}
    </p>
  </>
);

DetailInformation.propTypes = {
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  totalSupply: PropTypes.number.isRequired,
  circulatingSupply: PropTypes.number.isRequired,
  lastTickers: PropTypes.number.isRequired,
  priceChange1yr: PropTypes.number.isRequired,
};

export default DetailInformation;
