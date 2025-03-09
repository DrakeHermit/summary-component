import data from "../../data.json";

export default function transformJSON() {
  const transformedData = data.map((item, index) => ({
    ...item,
    id: `${item.category.toLowerCase()}-${index}`,
  }));
  return transformedData;
}
