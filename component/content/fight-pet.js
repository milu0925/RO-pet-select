import Select from "../select";
import Card from "./card";
import { ethnicity, props, shape } from "../json/ro";
export default function FightPet() {
  return (
    <div className="content">
      <div className="top">
        <Select names="props" list={props} />
        <Select names="shape" list={shape} />
        <Select names="ethnicity" list={ethnicity} />
        <button className="question">
          <i className="icon-question"></i>
        </button>
      </div>
      <div className="bottom">
        <Card />
      </div>
    </div>
  );
}
