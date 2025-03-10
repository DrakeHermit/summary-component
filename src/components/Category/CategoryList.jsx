import "./CategoryList.css";
import transformJSON from "/src/utils/transformJSON.js";

export const CategoryList = () => {
  const data = transformJSON();

  return (
    <ul>
      {data.map((item) => (
        <li key={item.id} className={`${item.color} category__list`}>
          <div className="category__item">
            <img src={item.icon} alt={item.category} />
            <p>{item.category}</p>
          </div>
          <div className="category__rating">
            <p>
              {item.score} <span className="opacity">/</span>{" "}
              <span className="opacity">100</span>
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
};
