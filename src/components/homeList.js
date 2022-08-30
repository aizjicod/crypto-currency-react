import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';

const HomeList = ({
  name, img, id, value, text,
}) => {
  const handleClick = () => {
    console.log(id);
  };
  return (
    <li>
      <h2>{name}</h2>
      <img src={img} alt={name} />
      <p>{`${text}: ${value}$`}</p>
      <NavLink to="details" onClick={handleClick}>see more</NavLink>
    </li>
  );
};

HomeList.propTypes = {
  name: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default HomeList;
