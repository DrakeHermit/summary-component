import { Card } from "../components/Card/Card";
import { Button } from "../components/Button/Button";
import "./MainPage.css";
import { InnerCard } from "../components/Card/innerCard";

export const MainPage = () => {
  return (
    <main className="main">
      <Card />
      <div className="card__description">
        <InnerCard />
        <Button />
      </div>
    </main>
  );
};
