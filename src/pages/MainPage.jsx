import { BottomCard } from "../components/Card/BottomCard";
import { Card } from "../components/Card/Card";
import { Button } from "../components/Button/Button";
import "./MainPage.css";

export const MainPage = () => {
  return (
    <main>
      <Card />
      <div className="card__description">
        <BottomCard />
        <Button />
      </div>
    </main>
  );
};
