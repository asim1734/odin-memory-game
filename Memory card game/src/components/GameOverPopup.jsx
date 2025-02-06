import PropTypes from 'prop-types';
import "../styles/gameOverPopUp.css"; 

const GameOverPopup = ({ score, resetGame }) => {
  return (
    <div className="game-over-popup">
      <div className="game-over-popup-inner">
        <h2>Game Over!</h2>
        <p>Your score: {score}</p>
        <button onClick={resetGame}>Play Again</button>
      </div>
    </div>
  );
};
GameOverPopup.propTypes = {
    score: PropTypes.number.isRequired,
    resetGame: PropTypes.func.isRequired,
};

export default GameOverPopup;
