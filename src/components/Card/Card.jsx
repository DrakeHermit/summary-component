import "./Card.css";

export const Card = () => {
  return (
    <div className="card__top-container">
      <h2>Your Result</h2>
      <div className="card__circle">
        <p>76</p>
        <p>of 100</p>
      </div>
      <p>Great</p>
      <p>
        You scored higher than 65% of the people who have taken these tests.
      </p>
    </div>
  );
};
