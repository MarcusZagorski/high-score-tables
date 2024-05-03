/* eslint-disable react/prop-types */
// import PlayerScore from "./PlayerScore";
import "./HighScoresTable.css";
import { useState } from "react";

const HighScoresTable = ({ scores }) => {
  const [ascOrder, setAscOrder] = useState(true);
  const playerScore = (score, index) => {
    score.sort((a, b) => {
      if (ascOrder) {
        return a.s > b.s ? -1 : 1;
      } else {
        return a.s < b.s ? -1 : 1;
      }
    });
    return score.map((scores) => (
      <div key={index} className="scores">
        <span>{`${scores.n}`}</span>
        <span>{`${scores.s}`}</span>
      </div>
    ));
  };

  const handleOrderClick = () => {
    setAscOrder(!ascOrder);
  };

  const orderScores = (
    <div className="scores-order">
      SCORES ORDER
      <button onClick={handleOrderClick} className="order-btn">
        {ascOrder ? "ASC" : "DESC"}
      </button>
    </div>
  );

  const highScores = (
    <>
      {orderScores}
      <ul className="cards-container">
        {scores.map((score, index) => {
          return (
            <li key={index}>
              <h1 className="card-country">
                <span className="emoji-icon">🎮</span> {score.name}
              </h1>
              {playerScore(score.scores, index)}
            </li>
          );
        })}
      </ul>
    </>
  );

  return highScores;
};

export default HighScoresTable;
