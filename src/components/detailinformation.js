import PropTypes from 'prop-types';

const DetailInformation = ({
  img, name, totalSupply, circulatingSupply, priceChange1yr, lastTickers,
}) => (
  <>
    <header className="header-detail">
      <img src={img} alt={name} className />
      <h1>{name}</h1>
    </header>
    <h2 className="detail-h2">Principal Data</h2>
    <div className="data-div">
      <p className="data-p">
        {`Total supply: ${totalSupply}`}
      </p>
      <p className="data-p">
        {`circulating supply: ${circulatingSupply}`}
      </p>
      <p className={priceChange1yr > 0 ? 'data-p green' : 'data-p red'}>
        {`change of coin in a year: ${priceChange1yr}%`}
      </p>
      <p className="data-p">
        {`last tickets: ${lastTickers}`}
      </p>

    </div>
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
