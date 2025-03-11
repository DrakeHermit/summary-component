import { CategoryList } from "../Category/CategoryList";
import "./InnerCard.css";

export const InnerCard = () => {
  return (
    <div className="card__container">
      <h2 className="card__title">Summary</h2>
      <CategoryList />
    </div>
  );
};
