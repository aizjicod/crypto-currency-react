import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { BiRightArrow } from 'react-icons/bi';
import { getIdData } from '../redux/details/details';

const HomeList = ({
  name, img, id, value, text,
}) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(getIdData(id));
  };
  return (
    <li className="home-list">
      <div className="list-header">
        <img src={img} alt={name} />
        <h2>{name}</h2>
        <p className="list-p">{`${text}: ${value}$`}</p>
      </div>
      <NavLink className="list-nav" to="details" onClick={handleClick}><BiRightArrow className="more-arrow" /></NavLink>
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
