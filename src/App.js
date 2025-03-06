import { useState } from "react";
const data = [
  {
    score: "1",
  },
  {
    score: "2",
  },
  {
    score: "3",
  },
  {
    score: "4",
  },
  {
    score: "5",
  },
];
export default function App() {
  const [showScore, setShowScore] = useState(true);
  const [selectedScore, setSelectedScore] = useState();

  function handleSelection(score) {
    console.log(score);
    setSelectedScore(score);
  }
  function HandleClick() {
    setShowScore(false);
  }
  return (
    <div className="card">
      {showScore && (
        <Score
          selectedScore={selectedScore}
          handleSelection={handleSelection}
          onHandleClick={HandleClick}
        />
      )}
      {!showScore && <Thanks selectedScore={selectedScore} />}
    </div>
  );
}

function Score({ selectedScore, handleSelection, onHandleClick }) {
  const [scores, setScores] = useState(data);

  return (
    <>
      <div className="circle-container">
        <img src="/images/icon-star.svg" alt="star icon"></img>
      </div>
      <h1>How did we do?</h1>
      <p>
        Please let us know how we did with your support request. All feedback is
        appreciated to help us improve our offering!
      </p>
      <div className="rating-container">
        {scores.map((prev) => (
          <Rate
            score={prev.score}
            key={prev.score}
            onHandleSelection={handleSelection}
            selectedScore={selectedScore}
          />
        ))}
      </div>
      <button onClick={() => selectedScore && onHandleClick()}>SUBMIT</button>
    </>
  );
}

function Rate({ score, onHandleSelection, selectedScore }) {
  return (
    <div
      className={`circle-container ${score === selectedScore ? "active" : ""}`}
      onClick={() => onHandleSelection(score)}
    >
      {score}
    </div>
  );
}
function Thanks({ selectedScore }) {
  return (
    <div className="thanks">
      <img src="/images/illustration-thank-you.svg" alt="star icon"></img>
      <div className="summary">You selected {selectedScore} out of 5</div>
      <h1>Thank you!</h1>
      <p>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </div>
  );
}
