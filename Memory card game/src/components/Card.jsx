import PropTypes from 'prop-types';
import '../styles/card.css';

const Card = function ({ name, imageURL, onClick }) {
    return (
        <div className="card" onClick={onClick}> 
            <img src={imageURL} alt="placeholder" /> 
            <p className='caption'>{name}</p>
        </div>
    );
};

Card.propTypes = {
    name: PropTypes.string,
    imageURL: PropTypes.string,
    onClick: PropTypes.func,
};

export default Card;
