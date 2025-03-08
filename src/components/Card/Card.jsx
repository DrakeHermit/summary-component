import "./Card.css";

export const Card = () => {
  return (
    <div className="card__top-container">
      <h2 className="card__top-header">Your Result</h2>
      <div className="card__circle">
        <p className="circle__score">76</p>
        <p className="circle__score-total">of 100</p>
      </div>
      <p className="card__status-text">Great</p>
      <p className="card__status-description">
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};
