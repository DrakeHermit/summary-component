import "./CategoryList.css";
import transformJSON from "/src/utils/transformJSON.js";

export const CategoryList = () => {
  const data = transformJSON();

  return (
    <div>
      {data.map((item) => (
        <div key={item.id} className="category__item">
          <h3>{item.category}</h3>
          <p>{item.amount}</p>
        </div>
      ))}
    </div>
  );
};
