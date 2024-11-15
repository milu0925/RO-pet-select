import { data } from "../json/ro";
import Card from "@/component/content/card";

export default function CardList() {
  return (
    <div className="flex">
      {Object.entries(data).map(([key, values], index) => (
        <Card key={index} index={index} name={key} value={values} />
      ))}
    </div>
  );
}
