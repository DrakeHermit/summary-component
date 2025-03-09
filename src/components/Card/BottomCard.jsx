import { CategoryList } from "../Category/CategoryList";
import "./BottomCard.css";

export const BottomCard = () => {
  return (
    <div className="card__container">
      <h2 className="card__title">Summary</h2>
      <CategoryList />
    </div>
  );
};
