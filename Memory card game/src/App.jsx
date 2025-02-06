import { useState } from "react";
import CardsList from "./components/CardsList";
import GameOverPopup from "./components/GameOverPopup";
import "./styles/App.css";

function App() {
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [finalScore, setFinalScore] = useState(0); // New state for final score

  const updateScore = () => {
    setScore(score + 1);
  };

  const gameLost = () => {
    if (score >= highScore) {
      setHighScore(score);
    }
    setFinalScore(score); // Store the current score
    setGameOver(true);
    setScore(0); // Reset the score after storing it
  };

  const resetGame = () => {
    setGameOver(false);
    setScore(0);
  };

  return (
    <div className="container">
      <h1>Memory Card Game</h1>
      <h4>Pokemon edition</h4>
      <div className="scores">
        <h3>Score: {score}</h3>
        <h3>High Score: {highScore}</h3>
      </div>
      <CardsList updateScore={updateScore} gameLost={gameLost} />

      {gameOver && (
        <GameOverPopup score={finalScore} resetGame={resetGame} /> // Use finalScore
      )}
    </div>
  );
}

export default App;
