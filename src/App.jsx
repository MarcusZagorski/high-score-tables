import "./App.css";
import scores from "./data/scores";
import HighScoresTable from "./HighScoresTable.jsx";

function App() {
  let countriesOrdered = scores.sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  });

  return (
    <div className="container">
      <h1 className="project-title"></h1>
      <HighScoresTable scores={countriesOrdered} />
    </div>
  );
}

export default App;
